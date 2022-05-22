<template>
  <listing
    subtitle="All course assignments here"
    :headers="[
      { id: 'class', title: 'Class' },
      { id: 'teacher', title: 'Teacher' },
      { id: 'students', title: 'Total Students' }
    ]"
    :data-func="() => $api.courseAssignment.find(apiParams)"
    :delete-func="id => $api.courseAssignment.delete(id)"
    no-data-icon="mdi-account-plus-outline"
    :api-params="apiParams"
  >
    <template #item_class="{ item: { section: { name, class: { name: className, batch: { name: batchName } } } }, defaultStyle }">
      <span :class="defaultStyle">{{ batchName }} {{ className }} ({{ name }})</span>
    </template>
    <template #item_teacher="{ item: { teacher: { username } }, defaultStyle }">
      <span :class="defaultStyle">{{ username }}</span>
    </template>
    <template #item_students="{ item: { students }, defaultStyle }">
      <span :class="defaultStyle">{{ students.length }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
