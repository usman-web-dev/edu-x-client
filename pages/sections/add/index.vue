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
      v-model="section.class"
      item-value="id"
      item-text="name"
      :data-func="() => $api.class.find(classApiParams)"
      :api-params="classApiParams"
      type="autocomplete"
      return-object
      :filter="classCustomFilter"
    >
      <template
        v-for="slot in ['item', 'selection']"
        #[slot]="{
          item: {
            name,
            batch: {
              name: batchName,
              department: {
                name: departmentName,
                grade: { name: gradeName }
              }
            }
          }
        }"
      >
        <v-list-item-content :key="slot">
          <v-list-item-title>{{ batchName }} ({{ name }})</v-list-item-title>
          <v-list-item-subtitle class="text-caption font-weight-light secondary--text text--lighten-3">
            {{ departmentName }} ({{ gradeName }})
          </v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </base-select>
  </save>
</template>

<script lang="ts" src="./index.ts" />
