import { Component, Vue } from 'nuxt-property-decorator';
import { drawerSrv } from '~/services';
import { DrawerLink } from '~/utils';

@Component
export default class CoreDrawer extends Vue {
  drawerSrv = drawerSrv;

  isGroupActive(item: DrawerLink) {
    return !!item.children?.filter(({ link }) => link && this.$route.name?.includes(link)).length;
  }
}
