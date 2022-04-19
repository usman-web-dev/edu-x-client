import { Component, Vue } from 'nuxt-property-decorator';
import { drawerSrv } from '~/services';

@Component
export default class CoreDrawer extends Vue {
  drawerSrv = drawerSrv;
}
