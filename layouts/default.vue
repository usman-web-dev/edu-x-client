<template>
  <v-app>
    <div class="d-flex justify-center flex-column align-center">
      <h1 class="text-h1">Oh haha! headings...</h1>
      <base-btn @click="login">Oh haha!</base-btn>
      <base-text-field label="okoko" rules="required" class="mt-5" value="saa" type="password" />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    async login() {
      await this.$strapi.login({ identifier: 'usman.dev03@gmail.com', password: 'Usman@0303' });
    }
  }
});
</script>
