<template>
  <save
    title="Course Assignment"
    subtitle="Add a new course assignment here"
    :add-func="() => $api.courseAssignment.create(courseAssignment)"
    :update-func="id => $api.courseAssignment.update(id, courseAssignment)"
    @close="$router.push('/course-assignments')"
    :edit-data-func="id => $api.courseAssignment.findOne(id, editApiParams)"
    @edit-data="onEditData"
  >
    <base-select
      label="Class"
      rules="required"
      v-model="classData"
      item-value="id"
      :data-func="() => $api.class.find(classApiParams)"
      :api-params="classApiParams"
      type="autocomplete"
      return-object
      @change="onClassChange"
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
    <base-select
      v-if="sectionKey"
      :key="sectionKey"
      label="Section"
      rules="required"
      v-model="courseAssignment.section"
      item-value="id"
      item-text="name"
      :data-func="() => $api.section.find(sectionApiParams)"
      :api-params="sectionApiParams"
      type="autocomplete"
      return-object
    />
    <base-select
      label="Course"
      rules="required"
      v-model="courseAssignment.course"
      item-value="id"
      item-text="name"
      :items="courses"
      type="autocomplete"
      return-object
    />
    <base-select
      label="Teacher"
      rules="required"
      v-model="courseAssignment.teacher"
      item-value="id"
      item-text="username"
      :data-func="() => $api.user.find(teacherApiParams)"
      :api-params="teacherApiParams"
      type="autocomplete"
      return-object
    />
    <base-select
      label="Students"
      rules="required"
      v-model="courseAssignment.students"
      item-value="id"
      item-text="username"
      :data-func="() => $api.user.find(studentsApiParams)"
      :api-params="studentsApiParams"
      type="autocomplete"
      multiple
      return-object
      chips
      deletable-chips
    />
  </save>
</template>

<script lang="ts" src="./index.ts" />
