<template>
  <save
    :title="title"
    :subtitle="subtitle"
    :custom-title="true"
    :update-func="updateFunc"
    @close="
      $router.push({
        name: `course-assignments-cid-assessments${$route.params.subid ? '-id-submissions' : ''}`,
        params: $route.params
      })
    "
    :edit-data-func="editDataFunc"
    @edit-data="onEditData($event)"
    :edit-param="$route.params.subid ? 'subid' : 'id'"
    :disable-save="(!isSubmission && countdown === 'Expired') || !submission.answers.length"
    save-title="Save"
  >
    <v-row v-if="$helpers.isTeacher" class="mb-1">
      <v-col cols="12" md="3">
        <base-text-field
          label="Obtained Marks"
          v-model.number="submission.obtainedMarks"
          type="number"
          rules="required|number"
        />
      </v-col>
    </v-row>
    <div class="d-flex flex-column text-body-1 secondary--text">
      <span>
        <span class="font-weight-bold">Start:</span>
        <span class="secondary--text text--lighten-4">
          {{ $helpers.formatDate(assessment.start || new Date(), undefined, true) }}
        </span>
      </span>
      <span>
        <span class="font-weight-bold">Deadline:</span>
        <span class="secondary--text text--lighten-4">
          {{ $helpers.formatDate(assessment.deadline || new Date(), undefined, true) }}
        </span>
      </span>
      <span v-if="!isSubmission">
        <span class="font-weight-bold">Countdown:</span>
        <span :class="`${timeLeft < 5 ? 'error--text' : 'secondary--text text--lighten-4'}`">
          {{ countdown }}
        </span>
      </span>
      <span v-if="$helpers.isTeacher">
        <span class="font-weight-bold">Submitted By:</span>
        <span class="secondary--text text--lighten-4">
          {{ submission.student && submission.student.username }}
        </span>
      </span>
      <span>
        <span class="font-weight-bold">Question Description:</span>
        <span class="secondary--text text--lighten-4">{{ assessment.questionDescription }}</span>
      </span>
    </div>

    <template v-if="assessment.questionMedia && assessment.questionMedia.length">
      <h2 class="mt-7 secondary--text">Question Files:</h2>
      <media-upload v-model="assessment.questionMedia" :readonly="true" />
    </template>

    <h2 class="mt-7 secondary--text">File Submission:</h2>
    <media-upload v-model="submission.answers" :readonly="!!isSubmission" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
