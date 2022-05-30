import { Component, Vue } from 'nuxt-property-decorator';
import { drawerSrv } from '~/services';
import { DrawerLink, RoleType } from '~/utils';

@Component
export default class CoreDrawer extends Vue {
  drawerSrv = drawerSrv;

  isGroupActive(item: DrawerLink) {
    return !!item.children?.filter(({ link }) => link && this.$route.name?.includes(link)).length;
  }

  get links(): Array<DrawerLink> {
    const links: Array<DrawerLink> = [{ title: 'Dashboard', icon: 'mdi-home-variant-outline', link: 'dashboard' }];

    if (this.$helpers.isAdmin) {
      links.push(
        {
          title: 'Class Management',
          icon: 'mdi-google-classroom',
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
              link: 'courses'
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
      );
    } else {
      links.push(
        {
          title: 'Courses',
          icon: 'mdi-book-open-page-variant-outline',
          link: 'course-assignments'
        },
        {
          title: 'Chats',
          icon: 'mdi-message-text',
          link: 'chats'
        }
      );
    }

    return links;
  }
}
