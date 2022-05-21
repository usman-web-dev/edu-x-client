import { Component, Vue } from 'nuxt-property-decorator';
import { SectionModel } from '~/api';

@Component
export default class SectionAddView extends Vue {
  section = new SectionModel();
}
