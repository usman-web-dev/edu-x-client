import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  inheritAttrs: false
})
export default class BaseInput extends Vue {
  @Prop({ default: '', type: String })
  protected readonly rules!: string;

  @Prop({ type: String })
  protected readonly vid!: string;

  @Prop({ default: null })
  protected readonly value!: string | null;

  trimValue() {
    return !!this.value && this.$attrs.type !== 'password' && typeof this.value === 'string'
      ? this.value.trim()
      : this.value;
  }
}
