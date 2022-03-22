<template>
  <base-form #default="{ invalid }" @submit="resetPassword">
    <base-card title-in="center">
      <template #title>
        <h1 class="secondary--text">Reset Password</h1>
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
        <base-btn block :disabled="invalid" type="submit" large>Reset Password</base-btn>
      </template>
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
