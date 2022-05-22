import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  inheritAttrs: false
})
export default class SaveComponent extends Vue {
  @Prop({
    required: true,
    type: String
  })
  private readonly title!: string;

  @Prop({
    type: String
  })
  private readonly subtitle?: string;

  @Prop({
    type: Function
  })
  private readonly addFunc?: () => Promise<any>;

  @Prop({
    type: Function
  })
  private readonly editFunc?: (id: number) => Promise<any>;

  @Prop({
    type: Function
  })
  private readonly editDataFunc?: (id: number) => Promise<any>;

  @Prop({
    default: 'id',
    type: String
  })
  private readonly editParam!: string;

  loading = false;

  get isLoading() {
    return this.$fetchState.pending || this.loading;
  }

  get isEdit(): number | undefined {
    const param = this.$route.params[this.editParam];

    return param ? +param : undefined;
  }

  async save() {
    this.loading = true;

    if (!this.editFunc && !this.addFunc) {
      return;
    }

    try {
      this.isEdit ? await this.editFunc?.(this.isEdit) : await this.addFunc?.();
      this.$alert.show('Record has been saved.');
      this.$emit('close');
    } catch {
    } finally {
      this.loading = false;
    }
  }

  async fetch() {
    if (this.isEdit && this.editDataFunc) {
      const data = await this.editDataFunc(this.isEdit);

      this.$emit('edit-data', data);
    }
  }
}
