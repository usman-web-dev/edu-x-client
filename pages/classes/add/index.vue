<template>
  <save
    title="Class"
    subtitle="Add a new class here"
    :add-func="() => $api.class.create(classData)"
    :edit-func="id => $api.class.update(id, classData)"
    @close="$router.push('/classes')"
    :edit-data-func="id => $api.class.findOne(id)"
    @edit-data="classData = { ...classData, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="classData.name" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
