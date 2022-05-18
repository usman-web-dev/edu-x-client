import { Component, Vue } from 'nuxt-property-decorator';
import { DepartmentModel } from '~/api';

@Component
export default class DepartmentAddView extends Vue {
  department = new DepartmentModel();
}
