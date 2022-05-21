import { Component, Vue } from 'nuxt-property-decorator';
import { GradeModel, InstituteModel } from '~/api';

@Component
export default class GradeAddView extends Vue {
  grade = new GradeModel({ institute: new InstituteModel({ id: 1 }) });
}
