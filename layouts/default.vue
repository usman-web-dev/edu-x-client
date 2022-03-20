<template>
  <v-app>
    <alert />

    <v-main>
      <v-container class="fill-height">
        <base-tooltip #default="{ on }" transition="slide-x-reverse-transition" msg="ahaha">
          <base-btn v-on="on">ok</base-btn>
        </base-tooltip>
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
