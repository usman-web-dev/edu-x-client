import { Component, Vue } from 'nuxt-property-decorator';
import { CourseModel } from '~/api/course';

@Component
export default class CourseAddView extends Vue {
  course = new CourseModel();
}
