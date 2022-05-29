<template>
  <save
    title="Class"
    subtitle="Add a new class here"
    :add-func="() => $api.class.create(classData)"
    :update-func="id => $api.class.update(id, classData)"
    @close="$router.push('/classes')"
    :edit-data-func="id => $api.class.findOne(id, editApiParams)"
    @edit-data="onEditData"
  >
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
      :filter="batchCustomFilter"
    >
      <template
        v-for="slot in ['item', 'selection']"
        #[slot]="{
          item: {
            name,
            department: {
              name: departmentName,
              grade: { name: gradeName }
            }
          }
        }"
      >
        <v-list-item-content :key="slot">
          <v-list-item-title>{{ name }}</v-list-item-title>
          <v-list-item-subtitle class="text-caption font-weight-light secondary--text text--lighten-3">
            {{ departmentName }} ({{ gradeName }})
          </v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </base-select>
    <base-text-field label="Name" rules="required" v-model="classData.name" />
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
