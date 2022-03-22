<template>
  <base-form #default="{ invalid }" @submit="forgotPassword">
    <base-card title-in="center">
      <template #title>
        <h1 class="secondary--text">Forgot Password?</h1>
      </template>

      <base-text-field label="Email" type="email" v-model="forgotPasswordData.email" rules="required|email" autofocus />

      <template #actions>
        <div class="width-100">
          <base-btn block :disabled="invalid" type="submit" large>Send Email</base-btn>
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
