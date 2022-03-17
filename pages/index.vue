<template>
  <base-card title-in="center">
    <template #title>
      <h1 class="secondary--text">Login</h1>
    </template>

    <base-text-field label="Email" type="email" />
    <base-text-field label="Password" type="password" />

    <template #actions>
      <base-btn block>Login</base-btn>
    </template>
  </base-card>
</template>

<script>
export default {
  layout: 'auth'
};
</script>
