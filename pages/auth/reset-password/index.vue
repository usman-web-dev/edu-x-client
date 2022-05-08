<template>
  <base-form #default="{ invalid }" @submit="resetPassword">
    <base-card title-in="center" rounded="xl" class="pa-5">
      <template #title>
        <h2 class="secondary--text">Reset Password</h2>
      </template>

      <base-text-field
        label="Password"
        type="password"
        v-model="resetPasswordData.password"
        rules="required|min:8|max:36"
        vid="Password"
        autofocus
      />
      <base-text-field
        label="Confirm Password"
        type="password"
        v-model="resetPasswordData.passwordConfirmation"
        rules="required|confirmed:Password"
      />

      <template #actions>
        <base-btn block :disabled="invalid || loading" type="submit" large :loading="loading">Reset Password</base-btn>
      </template>
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
