<template>
  <listing
    subtitle="All grades here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'createdAt', title: 'Created At', type: 'date' }
    ]"
    :data-func="() => $api.grade.find(apiParams)"
    :delete-func="id => $api.grade.delete(id)"
    :api-params="apiParams"
  />
</template>

<script lang="ts" src="./index.ts" />
