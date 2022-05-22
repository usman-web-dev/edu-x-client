<template>
  <save
    title="Course Assignment"
    subtitle="Add a new course assignment here"
    :add-func="() => $api.courseAssignment.create(courseAssignment)"
    :edit-func="id => $api.courseAssignment.update(id, courseAssignment)"
    @close="$router.push('/course-assignments')"
    :edit-data-func="id => $api.courseAssignment.findOne(id, editApiParams)"
    @edit-data="courseAssignment = { ...courseAssignment, ...$event }"
  >
    <base-select
      label="Section"
      rules="required"
      v-model="courseAssignment.section"
      item-value="id"
      item-text="name"
      :data-func="() => $api.section.find(sectionApiParams)"
      :api-params="sectionApiParams"
      type="autocomplete"
      return-object
      @change="courseAssignment.course = null"
    />
    <base-select
      label="Course"
      rules="required"
      v-model="courseAssignment.course"
      item-value="id"
      item-text="name"
      :items="courses"
      type="autocomplete"
      return-object
    />
    <base-select
      label="Teacher"
      rules="required"
      v-model="courseAssignment.teacher"
      item-value="id"
      item-text="username"
      :data-func="() => $api.user.find(teacherApiParams)"
      :api-params="teacherApiParams"
      type="autocomplete"
      return-object
    />
    <base-select
      label="Students"
      rules="required"
      v-model="courseAssignment.students"
      item-value="id"
      item-text="username"
      :data-func="() => $api.user.find(studentsApiParams)"
      :api-params="studentsApiParams"
      type="autocomplete"
      multiple
      return-object
      chips
      deletable-chips
    />
  </save>
</template>

<script lang="ts" src="./index.ts" />
