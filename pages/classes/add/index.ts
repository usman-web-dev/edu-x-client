import { Component, Vue } from 'nuxt-property-decorator';
import { ClassModel } from '~/api';

@Component
export default class ClassAddView extends Vue {
  classData = new ClassModel();
}
