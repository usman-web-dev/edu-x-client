<template>
  <save
    title="Department"
    subtitle="Add a new department here"
    :add-func="() => $api.department.create(department)"
    :edit-func="id => $api.department.update(id, department)"
    @close="$router.push('/departments')"
    :edit-data-func="id => $api.department.findOne(id)"
    @edit-data="department = { ...department, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="department.name" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
