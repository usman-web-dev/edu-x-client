import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api';

@Component
export default class ClassesView extends Vue {
  apiParams = new ApiParamsModel({ populate: ['batch.department.grade'] });
}
