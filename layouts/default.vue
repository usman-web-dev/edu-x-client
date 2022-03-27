<template>
  <v-app>
    <lazy-alert />
    <lazy-core-drawer />
    <lazy-core-app-bar />
    <lazy-confirm />

    <v-main>
      <v-container class="fill-height">
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
