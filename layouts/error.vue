<template>
  <v-container class="fill-height secondary" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="8" xl="6">
        <div class="d-flex justify-center align-center align-lg-start flex-column flex-lg-row">
          <h2 class="text-h1 primary--text font-weight-bold">{{ error.statusCode }}</h2>
          <v-divider vertical class="grey darken-1 mx-8 d-none d-lg-block" />
          <div class="text-center text-lg-left">
            <h2 class="text-h4 text-lg-h2 white--text font-weight-bold">{{ errorDetails.title }}</h2>
            <p class="text-body-2 grey--text mt-1 mt-lg-3 mb-0">{{ errorDetails.text }}</p>
          </div>
        </div>
        <div class="text-center mt-10">
          <base-btn :large="$vuetify.breakpoint.lgAndUp" to="/">
            <v-icon color="white" class="mr-3">mdi-arrow-left</v-icon>
            Go back home
          </base-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'guest',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    errorDetails() {
      const { statusCode } = this.error;
      if (statusCode === 404) {
        return {
          title: 'Page not found',
          text: 'Please check the URL in the address bar and try again.'
        };
      }

      return {
        title: 'An error occurred',
        text: 'Oops! something went wrong, please try again in a while.'
      };
    }
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
