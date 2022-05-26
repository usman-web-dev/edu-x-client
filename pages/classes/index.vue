<template>
  <listing
    subtitle="All classes here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'batch', title: 'Batch' },
      { id: 'department', title: 'Department' },
      { id: 'grade', title: 'Grade' }
    ]"
    :data-func="() => $api.class.find(apiParams)"
    :delete-func="id => $api.class.delete(id)"
    :api-params="apiParams"
  >
    <template #item_batch="{ item: { batch: { name } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
    <template #item_department="{ item: { batch: { department: { name } } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
    <template #item_grade="{ item: { batch: { department: { grade: { name } } } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
