import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, BatchModel, ClassModel } from '~/api';

@Component
export default class ClassAddView extends Vue {
  classData = new ClassModel({ batch: new BatchModel() });
  editApiParams = new ApiParamsModel({ populate: ['batch'] });
  batchApiParams = new ApiParamsModel();
}
