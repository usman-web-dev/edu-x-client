import { Middleware } from '@nuxt/types';

const isStudent: Middleware = ({ $helpers, redirect }) => {
  if (!$helpers.isStudent) {
    redirect('/dashboard');
  }
};

export default isStudent;
