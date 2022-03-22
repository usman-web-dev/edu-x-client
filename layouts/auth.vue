<template>
  <v-app>
    <alert />

    <v-main class="secondary">
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" lg="6" xl="4">
            <v-img
              src="/svgs/edu-x.svg"
              class="mx-auto mb-5 cursor-pointer"
              max-width="200px"
              @click="$router.push('/')"
            />

            <v-slide-y-transition hide-on-leave>
              <nuxt />
            </v-slide-y-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'nonAuth'
};
</script>
