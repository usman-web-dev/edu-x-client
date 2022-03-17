<template>
  <base-card title-in="center">
    <template #title>
      <h1 class="secondary--text">Login</h1>
    </template>

    <base-text-field label="Email" type="email" />
    <base-text-field label="Password" type="password" />

    <template #actions>
      <base-btn block @click="login">Login</base-btn>
    </template>
  </base-card>
</template>

<script>
export default {
  layout: 'auth',
  methods: {
    async login() {
      await this.$strapi.login({ identifier: 'usman.dev03@gmail.com', password: 'Usman@0303' });

      this.$router.replace('/dashboard');
    }
  }
};
</script>
