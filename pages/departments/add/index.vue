<template>
  <save
    title="Department"
    subtitle="Add a new department here"
    :add-func="() => $api.department.create(department)"
    :update-func="id => $api.department.update(id, department)"
    @close="$router.push('/departments')"
    :edit-data-func="id => $api.department.findOne(id, editApiParams)"
    @edit-data="department = { ...department, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="department.name" />
    <base-select
      label="Grade"
      rules="required"
      v-model="department.grade.id"
      item-value="id"
      item-text="name"
      :data-func="() => $api.grade.find(gradeApiParams)"
      :api-params="gradeApiParams"
      type="autocomplete"
    />
  </save>
</template>

<script lang="ts" src="./index.ts" />
