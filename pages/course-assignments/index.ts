import { Component, Vue } from 'nuxt-property-decorator';
import { ApiParamsModel } from '~/api';

@Component
export default class CourseAssignmentsView extends Vue {
  apiParams = new ApiParamsModel({ populate: ['course', 'section.class.batch', 'teacher', 'students'] });
}
