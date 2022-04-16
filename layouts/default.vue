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
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth'
};
</script>
