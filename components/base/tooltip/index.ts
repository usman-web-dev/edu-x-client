import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class BaseTooltip extends Vue {
  @Prop({
    default: 'top',
    type: String
  })
  private readonly direction!: string;

  @Prop({
    required: true,
    type: String
  })
  private readonly msg!: string;

  @Prop({
    default: 'secondary',
    type: String
  })
  private readonly color!: string;
}
