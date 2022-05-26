<template>
  <listing
    subtitle="All batches here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'department', title: 'Department' },
      { id: 'grade', title: 'Grade' }
    ]"
    :data-func="() => $api.batch.find(apiParams)"
    :delete-func="id => $api.batch.delete(id)"
    :api-params="apiParams"
  >
    <template #item_department="{ item: { department: { name } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
    <template #item_grade="{ item: { department: { grade: { name } } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
