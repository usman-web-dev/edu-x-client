import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api';

@Component
export default class BatchesView extends Vue {
  apiParams = new ApiParamsModel({ populate: ['department'] });
}
