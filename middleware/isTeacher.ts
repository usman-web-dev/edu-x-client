import { Middleware } from '@nuxt/types';

const isTeacher: Middleware = ({ $helpers, redirect }) => {
  if (!$helpers.isTeacher) {
    redirect('/dashboard');
  }
};

export default isTeacher;
