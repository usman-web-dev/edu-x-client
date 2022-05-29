<template>
  <listing
    :title="title"
    :subtitle="subtitle"
    :headers="[
      { id: 'student', title: 'Submitted By' },
      { id: 'obtainedMarks', title: 'Obtained Marks' },
      { id: 'answers', title: 'No. of Files Attached' }
    ]"
    :data-func="() => $api.assessmentSubmission.find(apiParams)"
    :delete-func="id => $api.assessmentSubmission.delete(id)"
    :api-params="apiParams"
    :add="false"
    :actions="actions"
    :overrideActions="overrideActions"
    @view-details="
      $router.push({
        name: 'course-assignments-cid-assessments-id-submissions-subid-details',
        params: { ...$route.params, subid: $event.id }
      })
    "
  >
    <template #item_student="{ item: { student }, defaultStyle }">
      <span :class="defaultStyle">{{ student.username }}</span>
    </template>
    <template #item_answers="{ item: { answers }, defaultStyle }">
      <span :class="defaultStyle">{{ answers.length }}</span>
    </template>
  </listing>
</template>

<script lang="ts" src="./index.ts" />
