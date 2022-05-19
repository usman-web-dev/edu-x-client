import { DrawerLink, RoleType } from '~/utils';
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

  links: Array<DrawerLink> = [
    { title: 'Dashboard', icon: 'mdi-home-variant-outline', link: 'dashboard' },
    {
      title: 'Departments',
      icon: 'mdi-office-building-outline',
      link: 'departments'
    },
    {
      title: 'Classes',
      icon: 'mdi-google-classroom',
      link: 'classes'
    },
    {
      title: 'Courses',
      icon: 'mdi-book-open-page-variant-outline',
      link: 'courses'
    },
    {
      title: 'Users',
      icon: 'mdi-account-outline',
      link: 'users',
      children: [
        {
          title: 'Admins',
          icon: 'mdi-account-multiple-outline',
          link: 'users-role',
          params: { role: `${RoleType.ADMIN}` }
        },
        {
          title: 'Teachers',
          icon: 'mdi-account-school-outline',
          link: 'users-role',
          params: { role: `${RoleType.TEACHER}` }
        },
        {
          title: 'Students',
          icon: 'mdi-account-group-outline',
          link: 'users-role',
          params: { role: `${RoleType.STUDENT}` }
        }
      ]
    }
  ];
}

export const drawerSrv = new DrawerService();
