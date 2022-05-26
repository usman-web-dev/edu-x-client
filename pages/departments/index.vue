<template>
  <listing
    subtitle="All departments here"
    :headers="[
      { id: 'name', title: 'Name' },
      { id: 'grade', title: 'Grade' }
    ]"
    :data-func="() => $api.department.find(apiParams)"
    :delete-func="id => $api.department.delete(id)"
    :api-params="apiParams"
  >
    <template #item_grade="{ item: { grade: { name } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
