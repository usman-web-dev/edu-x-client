<template>
  <listing
    subtitle="All departments here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'createdAt', title: 'Created At', type: 'date' }
    ]"
    :data-func="() => $api.department.find(apiParams)"
    :delete-func="id => $api.department.delete(id)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
  />
</template>

<script lang="ts" src="./index.ts" />
