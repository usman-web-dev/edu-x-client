<template>
  <listing
    title="Assessments"
    :subtitle="subtitle"
    :headers="[
      { id: 'type', title: 'Type', type: 'title' },
      { id: 'subType', title: 'Sub Type' },
      { id: 'start', title: 'Start', type: 'datetime' },
      { id: 'deadline', title: 'Deadline', type: 'datetime' },
      { id: 'totalMarks', title: 'Total Marks' },
      { id: 'obtainedMarks', title: 'Obtained Marks', roles: [4] }
    ]"
    :data-func="() => $api.assessment.find(apiParams)"
    :delete-func="id => $api.assessment.delete(id)"
    :api-params="apiParams"
    :add="$helpers.isTeacher"
    :actions="actions"
    :overrideActions="overrideActions"
    :save-params="$route.params"
    @view-details="handleAction('details', $event.id)"
    @view-submissions="handleAction('submissions', $event.id)"
  >
    <template #item_obtainedMarks="{ item, defaultStyle }">
      <span :class="defaultStyle">
        {{
          item.submissions && item.submissions.length && item.submissions[0].obtainedMarks != null
            ? item.submissions[0].obtainedMarks
            : "N\\A"
        }}
      </span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
