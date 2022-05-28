<template>
  <v-avatar :size="size" color="primary" class="white--text no-select">
    <span>{{ initials }}</span>
  </v-avatar>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    size: {
      default: 36,
      type: Number
    }
  },
  computed: {
    initials() {
      return this.$strapi.user?.username[0].toUpperCase();
    }
  }
});
</script>
