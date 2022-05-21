<template>
  <save
    title="Section"
    subtitle="Add a new section here"
    :add-func="() => $api.section.create(section)"
    :edit-func="id => $api.section.update(id, section)"
    @close="$router.push('/sections')"
    :edit-data-func="id => $api.section.findOne(id)"
    @edit-data="section = { ...section, ...$event }"
  >
    <base-text-field label="Name" rules="required" v-model="section.name" />
  </save>
</template>

<script lang="ts" src="./index.ts" />
