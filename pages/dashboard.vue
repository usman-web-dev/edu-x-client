<template>
  <div class="d-flex justify-center flex-column align-center width-100">
    <h1 class="text-h1">Dashboard</h1>
    <base-btn @click="$api.auth.logout()">Logout</base-btn>
  </div>
</template>

<script>
export default {
  middleware: ['isAdmin'],
  methods: {
    async logout() {
      await this.$strapi.logout();

      this.$router.push('/auth/login');
    }
  }
};
</script>
