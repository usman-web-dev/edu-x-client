<template>
  <listing
    subtitle="All classes here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'batch', title: 'Batch' }
    ]"
    :data-func="() => $api.class.find(apiParams)"
    :delete-func="id => $api.class.delete(id)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
  >
    <template #item_batch="{ item: { batch: { name } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
