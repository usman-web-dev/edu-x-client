import { Component, Prop, Vue } from 'nuxt-property-decorator';
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
  private readonly dataFunc!: () => Promise<AnyObject>;

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
    try {
      await new Promise(res => setTimeout(res, 3000));
      this.data = (await this.dataFunc()).data.map((d: any) => d.attributes);
    } catch {}
  }
}
