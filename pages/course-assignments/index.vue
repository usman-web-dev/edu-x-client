<template>
  <listing
    subtitle="All course assignments here"
    :headers="[
      { id: 'class', title: 'Class' },
      { id: 'course', title: 'Course' },
      { id: 'teacher', title: 'Teacher' },
      { id: 'students', title: 'Total Students' }
    ]"
    :data-func="() => $api.courseAssignment.find(apiParams)"
    :delete-func="id => $api.courseAssignment.delete(id)"
    no-data-icon="mdi-folder-plus-outline"
    :api-params="apiParams"
    :override-actions="overrideActions"
    :add="$helpers.isAdmin()"
  >
    <template
      #item_class="{
        item: {
          section: {
            name,
            class: {
              name: className,
              batch: {
                name: batchName,
                department: {
                  name: departmentName,
                  grade: { name: gradeName },
                }
              }
            }
          }
        },
        defaultStyle,
      }"
    >
      <v-list-item-title :class="defaultStyle">{{ batchName }} {{ className }} ({{ name }})</v-list-item-title>
      <v-list-item-subtitle class="text-caption font-weight-light secondary--text text--lighten-3">
        {{ departmentName }}
        <span v-if="!$helpers.hasRole(4)">({{ gradeName }})</span>
      </v-list-item-subtitle>
    </template>
    <template #item_course="{ item: { course: { name } }, defaultStyle }">
      <span :class="defaultStyle">{{ name }}</span>
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
