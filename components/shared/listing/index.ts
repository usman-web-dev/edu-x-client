import { Component, Prop, Vue } from 'nuxt-property-decorator';

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

  get listingTitle() {
    return this.title ?? this.$helpers.titleize(this.$route.name ?? '');
  }
}
