<template>
  <div />
</template>

<script>
export default {
  middleware: ({ redirect }) => {
    redirect('/user/profile/personal');
  }
};
</script>
