<template>
  <listing
    title="Attendances"
    :subtitle="subtitle"
    :headers="[
      { id: 'date', title: 'Date' },
      { id: 'fromTime', title: 'From' },
      { id: 'toTime', title: 'To' },
      { id: 'totalStudents', title: 'Total Students' },
      { id: 'presentAbsent', title: 'Present/Absent' }
    ]"
    :data-func="() => $api.attendance.find(apiParams)"
    :delete-func="id => $api.attendance.delete(id)"
    :api-params="apiParams"
    :override-actions="overrideActions"
    :add="!$helpers.isStudent"
    :save-params="$route.params"
  >
    <template #item_date="{ item: { date }, defaultStyle }">
      <span :class="defaultStyle">{{ $helpers.formatDate(date) }}</span>
    </template>
    <template #item_fromTime="{ item: { date, fromTime }, defaultStyle }">
      <span :class="defaultStyle">{{ $helpers.formatTime(date, fromTime) }}</span>
    </template>
    <template #item_toTime="{ item: { date, toTime }, defaultStyle }">
      <span :class="defaultStyle">{{ $helpers.formatTime(date, toTime) }}</span>
    </template>
    <template #item_totalStudents="{ defaultStyle }">
      <span :class="defaultStyle">{{ courseAssignment.students.length }}</span>
    </template>
    <template #item_presentAbsent="{ item, defaultStyle }">
      <span :class="defaultStyle">{{ getPresentAbsentCount(item) }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
