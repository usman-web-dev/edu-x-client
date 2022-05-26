<template>
  <save
    title="Batch"
    subtitle="Add a new batch here"
    :add-func="() => $api.batch.create(batch)"
    :edit-func="id => $api.batch.update(id, batch)"
    @close="$router.push('/batches')"
    :edit-data-func="id => $api.batch.findOne(id, editApiParams)"
    @edit-data="batch = { ...batch, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="batch.name" />
    <base-select
      label="Department"
      rules="required"
      v-model="batch.department"
      item-value="id"
      item-text="name"
      :data-func="() => $api.department.find(departmentApiParams)"
      :api-params="departmentApiParams"
      type="autocomplete"
      :filter="departmentCustomFilter"
      return-object
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
  </save>
</template>

<script lang="ts" src="./index.ts" />
