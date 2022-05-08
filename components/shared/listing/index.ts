import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api/shared';
import { AnyObject, NormalizedPaginationResponse } from '~/utils';

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
    type: Function
  })
  private readonly dataFunc!: () => Promise<NormalizedPaginationResponse<AnyObject>>;

  @Prop({
    type: Object
  })
  private readonly apiParams!: ApiParamsModel;

  @Prop({
    default: 'mdi-shape-square-rounded-plus',
    type: String
  })
  private readonly noDataIcon?: string;

  get listingTitle() {
    return this.title ?? this.$helpers.titleize(this.$route.name ?? '');
  }

  data: Array<AnyObject> = [];

  async fetch() {
    const { data, pagination } = await this.dataFunc();

    this.data = data;
    this.apiParams.pagination = pagination;
  }
}
