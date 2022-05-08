<template>
  <save
    title="Student"
    subtitle="Add a new student here"
    :add-func="() => $api.user.create(student)"
    :edit-func="id => $api.user.update(id, student)"
    @close="$router.push('/students')"
    :edit-data-func="id => $api.user.findOne(id)"
    @edit-data="student = { ...student, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="student.username" />
    <base-text-field label="Email" rules="required|email" v-model="student.email" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
