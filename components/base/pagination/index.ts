import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Pagination } from '~/utils';

@Component
export default class BasePagination extends Vue {
  @Prop({
    required: true,
    type: Object
  })
  private readonly pagination!: Pagination;

  updatePage(n: number) {
    if (n !== this.pagination.page) {
      this.pagination.page = n;
      this.$emit('update-page');
    }
  }
}
