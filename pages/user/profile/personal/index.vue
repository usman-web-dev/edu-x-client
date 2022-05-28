<template>
  <base-form #default="{ invalid }" @submit="updateProfile">
    <base-card class="pa-3" :loading="loading">
      <template #title>
        <div class="d-flex align-center justify-space-between width-100">
          <div>
            <h3 class="text-subtitle-1 text-md-h5 font-weight-bold secondary--text">Personal Information</h3>
          </div>

          <div>
            <base-btn :disabled="invalid" type="submit">
              <v-icon class="mr-2">mdi-check</v-icon>
              Update
            </base-btn>
          </div>
        </div>
      </template>

      <base-text-field label="Username" v-model="user.username" rules="required|min:3" />
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
