<template>
  <listing
    subtitle="All sections here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'createdAt', title: 'Created At', type: 'date' }
    ]"
    :data-func="() => $api.section.find(apiParams)"
    :delete-func="id => $api.section.delete(id)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
  />
</template>

<script lang="ts" src="./index.ts" />
