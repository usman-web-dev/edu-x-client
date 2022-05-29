<template>
  <save
    title="Grade"
    subtitle="Add a new grade here"
    :add-func="() => $api.grade.create(grade)"
    :update-func="id => $api.grade.update(id, grade)"
    @close="$router.push('/grades')"
    :edit-data-func="id => $api.grade.findOne(id)"
    @edit-data="grade = { ...grade, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="grade.name" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
