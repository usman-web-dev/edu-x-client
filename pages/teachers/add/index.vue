<template>
  <save
    title="Teacher"
    subtitle="Add a new teacher here"
    :add-func="() => $api.user.create(teacher)"
    :edit-func="id => $api.user.update(id, teacher)"
    @close="$router.push('/teachers')"
    :edit-data-func="id => $api.user.findOne(id)"
    @edit-data="teacher = { ...teacher, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="teacher.username" />
    <base-text-field label="Email" rules="required|email" v-model="teacher.email" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
