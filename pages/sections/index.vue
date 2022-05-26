<template>
  <listing
    subtitle="All sections here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'class', title: 'Class' },
      { id: 'batch', title: 'Batch' },
      { id: 'department', title: 'Department' },
      { id: 'grade', title: 'Grade' }
    ]"
    :data-func="() => $api.section.find(apiParams)"
    :delete-func="id => $api.section.delete(id)"
    :api-params="apiParams"
  >
    <template #item_class="{ item: { class: { name } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
    <template #item_batch="{ item: { class: { batch: { name } } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
    <template #item_department="{ item: { class: { batch: { department: { name } } } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
    <template #item_grade="{ item: { class: { batch: { department: { grade: { name } } } } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
