import { Middleware } from '@nuxt/types';

const auth: Middleware = ({ $strapi, redirect }) => {
  if ($strapi.user) {
    return redirect('/dashboard');
  }

  return redirect('/');
};

export default auth;
