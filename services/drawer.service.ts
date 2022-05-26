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
      title: 'Class Management',
      icon: 'mdi-google-classroom',
      roles: [RoleType.ADMIN],
      children: [
        {
          title: 'Grades',
          icon: 'mdi-folder-account-outline',
          link: 'grades'
        },
        {
          title: 'Departments',
          icon: 'mdi-office-building-outline',
          link: 'departments'
        },
        {
          title: 'Batches',
          icon: 'mdi-calendar-account-outline',
          link: 'batches'
        },
        {
          title: 'Classes',
          icon: 'mdi-account-supervisor-outline',
          link: 'classes'
        },
        {
          title: 'Sections',
          icon: 'mdi-human-male-board-poll',
          link: 'sections'
        }
      ]
    },
    {
      title: 'Course Management',
      icon: 'mdi-book-open-variant',
      children: [
        {
          title: 'Courses',
          icon: 'mdi-book-open-page-variant-outline',
          link: 'courses',
          roles: [RoleType.ADMIN]
        },
        {
          title: 'Course Assignments',
          icon: 'mdi-folder-outline',
          link: 'course-assignments'
        }
      ]
    },
    {
      title: 'Users',
      icon: 'mdi-account-outline',
      roles: [RoleType.ADMIN],
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
