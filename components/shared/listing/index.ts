import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api/shared';
import { AnyObject } from '~/utils';

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
  private readonly dataFunc!: (apiParams: ApiParamsModel) => Promise<AnyObject>;

  @Prop({
    default: 'mdi-shape-square-rounded-plus',
    type: String
  })
  private readonly noDataIcon?: string;

  get listingTitle() {
    return this.title ?? this.$helpers.titleize(this.$route.name ?? '');
  }

  apiParams = new ApiParamsModel();

  data: Array<AnyObject> = [];

  async fetch() {
    const {
      data,
      meta: { pagination }
    } = await this.dataFunc(this.apiParams);
    this.data = data.map((d: any, id: number) => ({ ...d.attributes, id }));
    this.apiParams.pagination = pagination;
  }
}
