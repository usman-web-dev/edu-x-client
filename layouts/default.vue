<template>
  <v-app>
    <alert />

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
