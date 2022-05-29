<template>
  <listing
    title="Assessments"
    :subtitle="subtitle"
    :headers="[
      { id: 'type', title: 'Type', type: 'title' },
      { id: 'subType', title: 'Sub Type' },
      { id: 'start', title: 'Start', type: 'datetime' },
      { id: 'deadline', title: 'Deadline', type: 'datetime' },
      { id: 'totalMarks', title: 'Total Marks' }
    ]"
    :data-func="() => $api.assessment.find(apiParams)"
    :delete-func="id => $api.assessment.delete(id)"
    :api-params="apiParams"
    :add="$helpers.isTeacher"
    :actions="actions"
    :overrideActions="overrideActions"
    :save-params="$route.params"
  />
</template>

<script lang="ts" src="./index.ts" />
