<template>
  <listing
    subtitle="All batches here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'department', title: 'Department' }
    ]"
    :data-func="() => $api.batch.find(apiParams)"
    :delete-func="id => $api.batch.delete(id)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
  >
    <template #item_department="{ item: { department: { name } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
