import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { ApiParamsModel } from '~/api/shared';
import {
  ACTIONS,
  AnyObject,
  ListingAction,
  NormalizedPaginationResponse,
  OverrideListingAction,
  TableHeader
} from '~/utils';

@Component({
  inheritAttrs: false
})
export default class ListingComponent extends Vue {
  @Prop({
    type: String
  })
  private readonly title?: string;

  @Prop({
    type: String
  })
  private readonly subtitle?: string;

  @Prop({
    default: true,
    type: Boolean
  })
  private readonly add!: boolean;

  @Prop({
    type: Function
  })
  private readonly dataFunc!: () => Promise<NormalizedPaginationResponse<AnyObject>>;

  @Prop({
    type: Function
  })
  private readonly deleteFunc?: (id: number) => Promise<any>;

  @Prop({
    type: Object
  })
  private readonly apiParams!: ApiParamsModel;

  @Prop({
    default: () => [],
    type: Array
  })
  private readonly actions!: Array<ListingAction>;

  @Prop({
    type: Function
  })
  private readonly overrideActions?: <T>(data: T) => Array<OverrideListingAction>;

  @Prop({
    default: true,
    type: Boolean
  })
  private readonly showActions!: boolean;

  @Prop({
    default: 'mdi-shape-square-rounded-plus',
    type: String
  })
  private readonly noDataIcon?: string;

  @Prop({
    type: Object
  })
  private readonly saveParams?: Route['params'];

  get listingTitle() {
    return this.title ?? this.$helpers.titleize(this.$route.name ?? '');
  }

  getItemActions(item: AnyObject) {
    const actions = [...this.actions, ACTIONS.edit, ACTIONS.delete];

    if (this.overrideActions) {
      this.overrideActions(item).forEach(action => {
        const idx = actions.findIndex(({ name }) => action.name === name);

        if (idx > -1) {
          if ('hide' in action) {
            actions.splice(idx, 1);
          } else if ('roles' in action) {
            !action.roles.some(role => this.$helpers.hasRole(role)) && actions.splice(idx, 1);
          } else {
            actions[idx] = action;
          }
        }
      });
    }

    return actions;
  }

  get headers() {
    const headers: Array<TableHeader> = this.$attrs.headers as any;

    if (this.showActions) {
      headers.push({
        id: 'actions',
        title: 'Actions',
        width: '1%'
      });
    }

    return headers;
  }

  data: Array<AnyObject> = [];

  async fetch() {
    this.apiParams.enablePagination = true;
    const { page, pageSize } = this.$route.query;

    if (page || pageSize) {
      this.apiParams.pagination.page = +page || 1;
      this.apiParams.pagination.pageSize = +pageSize || 25;
    }

    const { data, pagination } = await this.dataFunc();

    this.data = data;
    this.apiParams.pagination = pagination;
  }

  async emitItem(name: string, item?: AnyObject) {
    if (item) {
      if (name === 'delete') {
        if (await this.$confirm.confirm('Delete Confirmation', 'Are you sure you want to delete?')) {
          if (!this.deleteFunc) {
            this.$emit(name, item.id);
          } else {
            this.$nuxt.$loading.start();
            try {
              await this.deleteFunc(item.id);
              this.$alert.show('Record has been deleted.');
              this.$fetch();
            } catch {
            } finally {
              this.$nuxt.$loading.finish();
            }
          }
        }
      } else if (name === 'edit') {
        this.$router.push({ name: `${this.$route.name}-id-edit`, params: { id: item.id, ...(this.saveParams ?? {}) } });
      } else {
        this.$emit(name, item);
      }
    }
  }

  @Watch('$route.query')
  onQueryChange() {
    this.$fetch();
  }

  updatePage() {
    const { page, pageSize } = this.apiParams.pagination;

    this.$router.replace({ query: { ...this.$route.query, pageSize: `${pageSize}`, page: `${page}` } });
  }
}
