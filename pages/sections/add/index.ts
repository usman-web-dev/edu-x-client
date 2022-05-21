import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel, ClassModel, SectionModel } from '~/api';

@Component
export default class SectionAddView extends Vue {
  section = new SectionModel({ class: new ClassModel() });
  editApiParams = new ApiParamsModel({ populate: ['class'] });
  classApiParams = new ApiParamsModel();
}
