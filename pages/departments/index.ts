import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api';

@Component
export default class DepartmentsView extends Vue {
  apiParams = new ApiParamsModel();
}
