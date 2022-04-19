<template>
  <div>
    <div class="d-flex align-center justify-space-between mb-3 mb-md-7">
      <div>
        <h3 class="text-subtitle-1 text-md-h5 font-weight-bold secondary--text">{{ listingTitle }}</h3>
        <span class="text-subtitle-2 text-md-subtitle-1 secondary--text text--lighten-4" v-if="subtitle">
          {{ subtitle }}
        </span>
      </div>

      <base-btn v-if="data.length">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Add New
      </base-btn>
    </div>

    <base-table v-bind="$attrs" v-on="$listeners" :data="data" :loading="$fetchState.pending">
      <template #no-data="{ defaultHeaderStyle, defaultItemStyle }">
        <div class="d-flex flex-column align-center py-3 py-md-8">
          <v-icon color="secondary" size="36" class="mb-2 text--lighten-4">{{ noDataIcon }}</v-icon>
          <span :class="defaultHeaderStyle">No {{ listingTitle.toLowerCase() }} found</span>
          <span :class="defaultItemStyle" class="text--lighten-4 mb-5">
            Get started by creating a new {{ listingTitle.toLowerCase() }}
          </span>

          <base-btn depressed>
            <v-icon class="mr-2">mdi-plus</v-icon>
            Add New
          </base-btn>
        </div>
      </template>
    </base-table>

    <div class="d-flex justify-space-between align-center py-2 flex-wrap">
      <span>
        Showing
        <span class="font-weight-medium">{{ 1 }}</span>
        to
        <span class="font-weight-medium">{{ 10 }}</span>
        of
        <span class="font-weight-medium">{{ 97 }}</span>
        results
      </span>

      <base-pagination class="ml-auto" />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
