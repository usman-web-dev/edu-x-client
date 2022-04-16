<template>
  <div>
    <div class="d-flex align-center justify-space-between mb-3 mb-md-7">
      <div>
        <h3 class="text-subtitle-1 text-md-h5 font-weight-bold secondary--text">{{ listingTitle }}</h3>
        <span class="text-subtitle-2 text-md-subtitle-1 secondary--text text--lighten-4" v-if="subtitle">
          {{ subtitle }}
        </span>
      </div>

      <base-btn>Add New</base-btn>
    </div>

    <base-table v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script lang="ts" src="./index.ts" />
