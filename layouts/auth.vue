<template>
  <v-app>
    <v-main class="secondary">
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-img src="/svgs/edu-x.svg" class="mx-auto" max-width="200px" />

            <v-card class="pa-10 mt-5 shadow">
              <nuxt />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
