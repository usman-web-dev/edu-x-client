<template>
  <v-app>
    <alert />
    <core-drawer />
    <core-app-bar />

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
