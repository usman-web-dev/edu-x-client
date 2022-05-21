<template>
  <save
    title="Section"
    subtitle="Add a new section here"
    :add-func="() => $api.section.create(section)"
    :edit-func="id => $api.section.update(id, section)"
    @close="$router.push('/sections')"
    :edit-data-func="id => $api.section.findOne(id, editApiParams)"
    @edit-data="section = { ...section, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="section.name" />
    <base-select
      label="Class"
      rules="required"
      v-model="section.class.id"
      item-value="id"
      item-text="name"
      :data-func="() => $api.class.find(classApiParams)"
      :api-params="classApiParams"
      type="autocomplete"
    />
  </save>
</template>

<script lang="ts" src="./index.ts" />
