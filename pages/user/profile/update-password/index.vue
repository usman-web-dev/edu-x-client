<template>
  <base-form #default="{ invalid }" @submit="updatePassword" ref="baseFormRef">
    <base-card class="pa-3" :loading="loading">
      <template #title>
        <div class="d-flex align-center justify-space-between width-100">
          <div>
            <h3 class="text-subtitle-1 text-md-h5 font-weight-bold secondary--text">Update Password</h3>
          </div>

          <div>
            <base-btn :disabled="invalid" type="submit">
              <v-icon class="mr-2">mdi-check</v-icon>
              Update
            </base-btn>
          </div>
        </div>
      </template>

      <base-text-field
        label="Old Password"
        v-model="password.oldPassword"
        rules="required|min:8|max:36"
        type="password"
      />
      <base-text-field
        label="Password"
        v-model="password.password"
        rules="required|min:8|max:36"
        type="password"
        vid="Password"
      />
      <base-text-field
        label="Confirm Password"
        v-model="confirmPassword"
        rules="required|confirmed:Password"
        type="password"
      />
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
