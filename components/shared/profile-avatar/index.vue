<template>
  <v-avatar :size="36" color="primary" class="white--text no-select">
    <span>{{ initials }}</span>
  </v-avatar>
</template>

<script>
export default {
  computed: {
    initials() {
      return this.$strapi.user?.username[0].toUpperCase();
    }
  }
};
</script>
