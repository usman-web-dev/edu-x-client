<template>
  <save
    title="Course"
    subtitle="Add a new course here"
    :add-func="() => $api.course.create(course)"
    :update-func="id => $api.course.update(id, course)"
    @close="$router.push('/courses')"
    :edit-data-func="id => $api.course.findOne(id, editApiParams)"
    @edit-data="course = { ...course, ...$event }"
  >
    <base-select
      label="Department"
      rules="required"
      v-model="course.department"
      item-value="id"
      item-text="name"
      :data-func="() => $api.department.find(departmentApiParams)"
      :api-params="departmentApiParams"
      type="autocomplete"
      return-object
      :filter="departmentCustomFilter"
    >
      <template
        v-for="slot in ['item', 'selection']"
        #[slot]="{
          item: {
            name,
            grade: { name: gradeName }
          }
        }"
      >
        {{ `${name} (${gradeName})` }}
      </template>
    </base-select>
    <base-text-field label="Name" rules="required" v-model="course.name" />
    <base-text-field label="Code" rules="required|min:2" v-model="course.code" />
    <base-text-field
      label="Credit Hours"
      rules="required|number"
      v-model.number="course.creditHours"
      type="number"
      v-if="$helpers.isUniversity"
    />
  </save>
</template>

<script lang="ts" src="./index.ts" />
