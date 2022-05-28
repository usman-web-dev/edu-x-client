import { Middleware } from '@nuxt/types';

const isAdmin: Middleware = ({ $helpers, redirect }) => {
  if (!$helpers.isAdmin) {
    redirect('/course-assignments');
  }
};

export default isAdmin;
