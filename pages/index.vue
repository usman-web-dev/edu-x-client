<template>
  <div>
    <v-row class="header ma-0">
      <v-col cols="12" class="header-content gradient pa-0 pb-12">
        <v-container class="px-10">
          <v-toolbar flat color="transparent" dark>
            <v-toolbar-title>
              <nuxt-link to="/" class="white--text font-weight-bold">EDU-X</nuxt-link>
            </v-toolbar-title>
            <v-spacer />
            <div v-if="$strapi.user">
              <base-btn text color="white" small to="/dashboard">Dashboard</base-btn>
            </div>
            <div v-else>
              <base-btn text color="white" small class="mr-1" to="/auth/login">Login</base-btn>
            </div>
          </v-toolbar>
          <v-row justify="center" align="center" style="height: 40em">
            <v-col cols="12" md="6" class="text-center text-md-left">
              <h2 class="font-weight-light mb-5">
                Education Management,
                <br />in one place
              </h2>
              <p>
                Education is that whole system of human training within and without the school house walls, which molds
                and develops men.
              </p>
              <base-btn
                large
                color="white"
                elevation="0"
                class="font-weight-bold view-dashboard-btn"
                outlined
                to="/dashboard"
              >
                View Dashboard
                <v-icon class="ml-1">mdi-arrow-right</v-icon>
              </base-btn>
            </v-col>
            <v-col>
              <img class="header-image" src="/svgs/header.svg" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-container>
      <v-row class="ma-0">
        <v-col cols="12">
          <div>
            <h1 class="text-center primary--text">Request New Account</h1>
            <p class="text-center">Please fill out the following form and we will get back to you shortly.</p>
          </div>
          <v-row>
            <v-col cols="12" md="4" order="12" order-md="1">
              <div v-for="{ title, value } in contactDetails" :key="title">
                <h5>{{ title }}:</h5>
                <p>{{ value }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="8" order="1" order-md="12">
              <base-form #default="{ invalid }" @submit="sendMessage" ref="baseFormRef">
                <v-row>
                  <v-col cols="12" md="6">
                    <base-text-field
                      label="Your Name"
                      outlined
                      hide-details="auto"
                      dense
                      v-model="contactData.name"
                      rules="required|min:3"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <base-text-field
                      label="Your Email"
                      outlined
                      hide-details="auto"
                      dense
                      v-model="contactData.email"
                      rules="required|email"
                    />
                  </v-col>
                  <v-col cols="12">
                    <base-text-field
                      label="Your Institute Name"
                      outlined
                      hide-details="auto"
                      dense
                      v-model="contactData.instituteName"
                      rules="required|min:2"
                    />
                  </v-col>
                  <v-col cols="12">
                    <base-text-field
                      label="Your Subject"
                      outlined
                      hide-details="auto"
                      dense
                      v-model="contactData.subject"
                      rules="required|min:5"
                      placeholder="Email subject"
                    />
                  </v-col>
                  <v-col cols="12">
                    <base-textarea
                      label="Your Message"
                      outlined
                      hide-details="auto"
                      dense
                      v-model="contactData.message"
                      rules="required|min:10"
                      placeholder="Briefly explain why you want to create this institute"
                    />
                  </v-col>
                  <v-col cols="12">
                    <base-btn block elevation="0" :disabled="invalid || loading" :loading="loading" type="submit">
                      Send Message
                      <v-icon class="ml-3">mdi-email-fast-outline</v-icon>
                    </base-btn>
                  </v-col>
                </v-row>
              </base-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-footer id="core-footer" padless>
      <v-row class="secondary white--text ma-0 text-center">
        <v-col cols="12" class="py-5">
          <strong>
            © {{ new Date().getFullYear() }}
            <nuxt-link to="/">&nbsp;EDU-X</nuxt-link>
          </strong>
          <br />Designed by
          <strong>Usman Dev</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss">
.header {
  filter: drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.5));
  max-width: 100%;
  .header-content {
    max-width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0 100%);
    color: #fff;
    @media screen and (max-width: 960px) {
      clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
    }
    .v-toolbar__content {
      @media screen and (max-width: 960px) {
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
    }
    .view-dashboard-btn {
      transition: all 0.3s ease-in-out;
      &:hover i {
        margin-left: 20px !important;
      }
    }
    .header-image {
      max-width: 100%;
      pointer-events: none;
      user-select: none;
    }
  }
}
</style>
