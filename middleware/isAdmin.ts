import { Middleware } from '@nuxt/types';
import { RoleType } from '~/utils';

const isAdmin: Middleware = ({ $strapi, redirect }) => {
  if ($strapi.user?.role?.id !== RoleType.ADMIN) {
    redirect('/dashboard');
  }
};

export default isAdmin;
