<template>
  <div />
</template>

<script>
export default {
  layout: 'auth',
  middleware({ $alert, redirect }) {
    $alert.show(
      `Email has been confirmed, please reset the password using forgot password link, if it's your first time.`,
      'success',
      true,
      20
    );
    redirect('/auth/login');
  }
};
</script>
