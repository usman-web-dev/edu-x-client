import { Middleware } from '@nuxt/types';

const nonAuth: Middleware = ({ $strapi, redirect }) => {
  if ($strapi.user) {
    redirect('/dashboard');
  }
};

export default nonAuth;
