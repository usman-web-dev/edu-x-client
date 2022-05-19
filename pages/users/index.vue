<template>
  <div />
</template>

<script>
import { RoleType } from '~/utils';

export default {
  middleware: ({ redirect }) => {
    redirect(`/users/${RoleType.ADMIN}`);
  }
};
</script>
