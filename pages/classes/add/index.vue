<template>
  <save
    title="Class"
    subtitle="Add a new class here"
    :add-func="() => $api.class.create(classData)"
    :edit-func="id => $api.class.update(id, classData)"
    @close="$router.push('/classes')"
    :edit-data-func="id => $api.class.findOne(id, editApiParams)"
    @edit-data="classData = { ...classData, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="classData.name" />
    <base-select
      label="Batch"
      rules="required"
      v-model="classData.batch.id"
      item-value="id"
      item-text="name"
      :data-func="() => $api.batch.find(batchApiParams)"
      :api-params="batchApiParams"
      type="autocomplete"
    />
  </save>
</template>

<script lang="ts" src="./index.ts" />
