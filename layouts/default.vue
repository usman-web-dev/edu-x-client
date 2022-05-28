<template>
  <v-app>
    <lazy-alert />
    <lazy-core-drawer />
    <lazy-core-app-bar />
    <lazy-confirm />

    <v-main>
      <v-container class="height-100 px-4" fluid>
        <nuxt />
      </v-container>

      <v-footer color="transparent" padless class="d-flex justify-center" absolute>
        {{ instituteName }}
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    instituteName() {
      return this.$strapi.user?.institute?.name;
    }
  }
};
</script>
