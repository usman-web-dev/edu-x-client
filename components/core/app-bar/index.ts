import { Component, Vue } from 'nuxt-property-decorator';
import { drawerSrv } from '~/services';

@Component
export default class CoreAppBar extends Vue {
  drawerSrv = drawerSrv;

  menuLinks = [
    { title: 'Profile', icon: 'mdi-account-circle-outline', link: '/user/profile' },
    { title: 'Logout', icon: 'mdi-account-arrow-right-outline', func: () => this.$api.auth.logout() }
  ];
}
