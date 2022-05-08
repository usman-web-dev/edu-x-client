<template>
  <base-form #default="{ invalid }" @submit="forgotPassword">
    <base-card title-in="center" rounded="xl" class="pa-5">
      <template #title>
        <h2 class="secondary--text">Forgot Password?</h2>
      </template>

      <base-text-field
        label="Email"
        type="email"
        v-model="forgotPasswordData.email"
        rules="required|email"
        autofocus
        placeholder="Enter your email"
      />

      <template #actions>
        <div class="width-100">
          <base-btn block :disabled="invalid || loading" type="submit" large :loading="loading">Send Email</base-btn>
          <div class="text-center mt-4">
            <nuxt-link to="/auth/login">
              <v-icon color="primary">mdi-arrow-left</v-icon>
              Back to login
            </nuxt-link>
          </div>
        </div>
      </template>
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
