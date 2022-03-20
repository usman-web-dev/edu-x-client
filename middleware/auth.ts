import { Middleware } from '@nuxt/types';

const auth: Middleware = ({ $strapi, redirect }) => {
  if (!$strapi.user) {
    redirect('/login');
  }
};

export default auth;
