<template>
  <save
    title="Course"
    subtitle="Add a new course here"
    :add-func="() => $api.course.create(course)"
    :edit-func="id => $api.course.update(id, course)"
    @close="$router.push('/courses')"
    :edit-data-func="id => $api.course.findOne(id)"
    @edit-data="course = { ...course, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="course.name" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
