<template>
  <base-form #default="{ invalid }" @submit="save">
    <base-card :loading="isLoading" class="pa-3">
      <template #title>
        <div class="d-flex align-center justify-space-between width-100">
          <div>
            <h3 class="text-subtitle-1 text-md-h5 font-weight-bold secondary--text">
              {{ customTitle ? '' : isEdit ? 'Edit ' : 'Add ' }}{{ title }}
            </h3>
            <span
              class="text-subtitle-2 text-md-subtitle-1 secondary--text text--lighten-4"
              v-if="subtitle && (!isEdit || customTitle)"
            >
              {{ subtitle }}
            </span>
          </div>

          <div>
            <base-btn type="button" text color="error" @click="$emit('close')">Cancel</base-btn>
            <base-btn :disabled="invalid || disableSave" type="submit">
              <v-icon class="mr-2">mdi-check</v-icon>
              {{ saveTitle || (isEdit ? 'Update' : 'Add') }}
            </base-btn>
          </div>
        </div>
      </template>

      <slot />
    </base-card>
  </base-form>
</template>

<script lang="ts" src="./index.ts" />
