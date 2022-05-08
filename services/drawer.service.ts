import { BaseService } from './base.service';

class DrawerService extends BaseService {
  private _mode = true;
  miniVariant = false;

  get mode() {
    return this._mode;
  }

  set mode(mode: boolean) {
    const { smAndDown } = this.$context.$vuetify.breakpoint;
    if (smAndDown) {
      this.miniVariant = false;
      this._mode = mode;
    } else {
      this.miniVariant = !this.miniVariant;
    }
  }

  links = [
    { title: 'Dashboard', icon: 'mdi-home-variant-outline', selectedIcon: 'mdi-home-variant', link: 'dashboard' },
    {
      title: 'Courses',
      icon: 'mdi-book-open-page-variant-outline',
      selectedIcon: 'mdi-book-open-page-variant',
      link: 'courses'
    },
    {
      title: 'Teachers',
      icon: 'mdi-account-multiple-outline',
      selectedIcon: 'mdi-account-multiple',
      link: 'teachers'
    }
  ];
}

export const drawerSrv = new DrawerService();
