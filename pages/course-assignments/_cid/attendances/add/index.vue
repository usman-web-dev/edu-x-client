<template>
  <save
    title="Attendance"
    :subtitle="subtitle"
    :add-func="() => $api.attendance.create(attendance)"
    :update-func="id => $api.attendance.update(id, attendance)"
    @close="$router.push({ name: 'course-assignments-cid-attendances', params: { cid: $route.params.cid } })"
    :edit-data-func="id => $api.attendance.findOne(id, editApiParams)"
    @edit-data="
      attendance = { ...attendance, ...$event };
      tempAttendanceStudents = $event.attendanceStudents;
      handleAttendanceStudents();
    "
  >
    <base-date-picker label="Date" rules="required" v-model="attendance.date" :max="$helpers.getDate(new Date())" />
    <base-time-picker
      label="From Time"
      rules="required"
      v-model="attendance.fromTime"
      :date="attendance.date"
      v-if="attendance.date"
    />
    <base-time-picker
      label="To Time"
      rules="required"
      v-model="attendance.toTime"
      :date="attendance.date"
      v-if="attendance.date"
    />
    <base-textarea label="Description" v-model="attendance.description" rows="3" />

    <base-table
      :data="attendance.attendanceStudents"
      :headers="[
        { id: 'student', title: 'Student' },
        { id: 'present', title: 'Present' }
      ]"
      :loading="$fetchState.pending"
    >
      <template #header_present="{ defaultStyle }">
        <div class="d-flex align-center">
          <span :class="defaultStyle" class="mr-3">Present</span>
          <base-switch :value="isAll" @change="handleAttendanceStudents(!isAll)" hide-details />
        </div>
      </template>
      <template
        #item_student="{
          item: {
            student: { username }
          },
          defaultStyle
        }"
      >
        <span :class="defaultStyle">{{ username }}</span>
      </template>
      <template #item_present="{ item }">
        <base-switch :value="item.present" @change="item.present = !!$event" hide-details />
      </template>
    </base-table>
  </save>
</template>

<script lang="ts" src="./index.ts" />
