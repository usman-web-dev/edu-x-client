<template>
  <base-form #default="{ invalid }" @submit="login">
    <base-card title-in="center" rounded="xl" class="pa-5">
      <template #title>
        <h2 class="secondary--text">Login</h2>
      </template>

      <base-text-field label="Email" type="email" v-model="loginData.email" rules="required|email" autofocus />
      <base-text-field label="Password" type="password" v-model="loginData.password" rules="required|min:8|max:36" />

      <template #actions>
        <div class="width-100">
          <base-btn block :disabled="invalid || loading" type="submit" large :loading="loading">Login</base-btn>
          <div class="text-center mt-4">
            <nuxt-link to="/auth/forgot-password">Forgot Password?</nuxt-link>
          </div>
        </div>
      </template>
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
