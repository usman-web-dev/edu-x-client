import { Middleware } from '@nuxt/types';
import { RoleType } from '~/utils';

const isTeacher: Middleware = ({ $strapi, redirect }) => {
  if ($strapi.user?.role !== RoleType.TEACHER) {
    redirect('/dashboard');
  }
};

export default isTeacher;
