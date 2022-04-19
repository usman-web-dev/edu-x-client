import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { AnyObject, TableHeader } from '~/utils';

@Component
export default class BaseTable extends Vue {
  @Prop({
    default: () => [],
    type: Array
  })
  private readonly headers!: Array<TableHeader>;

  @Prop({
    default: () => [],
    type: Array
  })
  private readonly data!: Array<AnyObject>;

  @Prop({
    default: false,
    type: Boolean
  })
  private readonly loading!: boolean;

  get defaultHeaderStyle() {
    return 'text-md-subtitle-1 text-body-2 font-weight-medium secondary--text';
  }

  get defaultItemStyle() {
    return 'text-md-subtitle-2 text-caption font-weight-regular secondary--text';
  }
}
