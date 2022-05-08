<template>
  <listing
    subtitle="All courses here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'createdAt', title: 'Created At' },
      { id: 'updatedAt', title: 'Updated At' }
    ]"
    :data-func="() => $api.course.find(apiParams)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
  />
</template>

<script lang="ts" src="./index.ts" />
