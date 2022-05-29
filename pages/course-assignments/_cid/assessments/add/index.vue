<template>
  <save
    title="Assessment"
    :subtitle="subtitle"
    :add-func="() => $api.assessment.create(assessment)"
    :update-func="id => $api.assessment.update(id, assessment)"
    @close="$router.push({ name: 'course-assignments-cid-assessments', params: { cid: $route.params.cid } })"
    :edit-data-func="id => $api.assessment.findOne(id)"
    @edit-data="assessment = { ...assessment, ...$event }"
  >
    <v-row>
      <v-col cols="12" md="6">
        <base-select
          label="Type"
          rules="required"
          v-model="assessment.type"
          :items="$helpers.assessmentTypes"
          item-text="value"
          item-value="id"
        />
      </v-col>
      <v-col cols="12" md="6">
        <base-text-field
          label="Sub Type"
          placeholder="Assignment 1, Mid-Exam, Home Task 1, etc."
          v-model="assessment.subType"
          rules="required"
        />
      </v-col>

      <v-col cols="12">
        <base-date-time-picker
          label="Start"
          rules="required"
          v-model="assessment.start"
          :min="$helpers.getDate(new Date())"
          :max="assessment.deadline ? $helpers.getDate(assessment.deadline) : undefined"
        />
      </v-col>

      <v-col cols="12">
        <base-date-time-picker
          label="Deadline"
          rules="required"
          v-model="assessment.deadline"
          :min="assessment.start ? $helpers.getDate(assessment.start) : undefined"
        />
      </v-col>

      <v-col cols="12">
        <base-textarea
          label="Question Description"
          v-model="assessment.questionDescription"
          rows="3"
          rules="required"
        />
      </v-col>

      <v-col cols="12" md="6">
        <base-text-field
          label="Total Marks"
          v-model.number="assessment.totalMarks"
          type="number"
          rules="required|number"
        />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-end">
        <base-switch label="Required to submit" v-model="assessment.required" />
      </v-col>
    </v-row>
  </save>
</template>

<script lang="ts" src="./index.ts" />
