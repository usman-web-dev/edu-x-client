<template>
  <div>
    <div class="d-flex align-center justify-space-between mb-3 mb-md-7">
      <div>
        <h3 class="text-subtitle-1 text-md-h5 font-weight-bold secondary--text">{{ listingTitle }}</h3>
        <span class="text-subtitle-2 text-md-subtitle-1 secondary--text text--lighten-4" v-if="subtitle">
          {{ subtitle }}
        </span>
      </div>

      <base-btn v-show="data.length" :to="{ name: `${$route.name}-add` }">
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

          <base-btn depressed :to="{ name: `${$route.name}-add` }">
            <v-icon class="mr-2">mdi-plus</v-icon>
            Add New
          </base-btn>
        </div>
      </template>

      <template v-for="(_, name) in $scopedSlots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </base-table>

    <div class="d-flex justify-space-between align-center py-2 flex-wrap" v-if="data.length">
      <span>
        Showing
        <span v-if="apiParams.pagination.total > 1">
          <span class="font-weight-medium">{{ apiParams.firstItem }}</span>
          -
          <span class="font-weight-medium">{{ apiParams.lastItem }}</span>
          of
          <span class="font-weight-medium">{{ apiParams.pagination.total }}</span>
          results
        </span>
        <span v-else>
          <span class="font-weight-medium">1</span>
          result
        </span>
      </span>

      <base-pagination class="ml-auto" :pagination="apiParams.pagination" />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
