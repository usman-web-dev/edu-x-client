import { Middleware } from '@nuxt/types';
import { RoleType } from '~/utils';

const isStudent: Middleware = ({ $strapi, redirect }) => {
  if ($strapi.user?.role !== RoleType.STUDENT) {
    redirect('/dashboard');
  }
};

export default isStudent;
