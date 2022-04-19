import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { PaginationModel } from '~/api';

@Component
export default class BasePagination extends Vue {
  @Prop({
    default: () => [],
    type: Array
  })
  private readonly pagination!: PaginationModel;

  updatePage(n: number) {
    if (n !== this.pagination.currentPage) {
      // eslint-disable-next-line vue/no-mutating-props
      this.pagination.currentPage = n;
      this.$emit('update-page');
    }
  }
}
