<template>
  <save
    title="Class"
    subtitle="Add a new class here"
    :add-func="() => $api.class.create(classData)"
    :edit-func="id => $api.class.update(id, classData)"
    @close="$router.push('/classes')"
    :edit-data-func="id => $api.class.findOne(id, editApiParams)"
    @edit-data="onEditData"
  >
    <base-text-field label="Name" rules="required" v-model="classData.name" />
    <base-select
      label="Batch"
      rules="required"
      v-model="classData.batch"
      item-value="id"
      item-text="name"
      :data-func="() => $api.batch.find(batchApiParams)"
      :api-params="batchApiParams"
      type="autocomplete"
      @change="onBatchChange"
      return-object
    />
    <base-select
      v-if="courseKey"
      :key="courseKey"
      label="Course Offerings"
      rules="required"
      v-model="classData.courses"
      item-value="id"
      item-text="name"
      :data-func="() => $api.course.find(courseApiParams)"
      :api-params="courseApiParams"
      type="autocomplete"
      multiple
      return-object
      chips
      deletable-chips
    />
  </save>
</template>

<script lang="ts" src="./index.ts" />
