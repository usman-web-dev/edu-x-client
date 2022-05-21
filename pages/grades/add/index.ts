import { Component, Vue } from 'nuxt-property-decorator';
import { GradeModel } from '~/api';

@Component
export default class GradeAddView extends Vue {
  grade = new GradeModel();
}
