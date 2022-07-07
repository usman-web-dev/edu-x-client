<template>
  <grid-layout
    :layout.sync="layout"
    :row-height="30"
    is-draggable
    :margin="[20, 20]"
    :use-css-transforms="true"
    responsive
    @layout-updated="saveLayout"
  >
    <grid-item v-for="{ x, y, w, h, i } in layout" :x="x" :y="y" :w="w" :h="h" :i="i" :key="i">
      <base-card class="fill-height">
        <dashboard-number text="Departments" :number="departments" v-if="i === 'departments'" />
        <dashboard-number text="Batches" :number="batches" v-else-if="i === 'batches'" />
        <dashboard-number text="Classes" :number="classes" v-else-if="i === 'classes'" />
        <dashboard-number text="Courses" :number="courses" v-else-if="i === 'courses'" />
        <dashboard-number
          :text="`${$helpers.isStudent ? 'Enrolled ' : ''}Courses`"
          :number="courseAssignments"
          v-else-if="i === 'courseAssignments'"
        />
        <div v-else-if="i === 'users'" class="fill-height d-flex justify-center gap-8">
          <div class="d-flex flex-column align-center justify-center fill-height">
            <span class="text-h5 font-weight-medium grey--text">Admins</span>
            <span class="text-h3 font-weight-bold secondary--text">{{ admins }}</span>
          </div>
          <div class="d-flex flex-column align-center justify-center fill-height">
            <span class="text-h5 font-weight-medium grey--text">Teachers</span>
            <span class="text-h3 font-weight-bold secondary--text">{{ teachers }}</span>
          </div>
          <div class="d-flex flex-column align-center justify-center fill-height">
            <span class="text-h5 font-weight-medium grey--text">Students</span>
            <span class="text-h3 font-weight-bold secondary--text">{{ students }}</span>
          </div>
        </div>
        <div v-else-if="i === 'assessments'">
          <h5 class="text-h5 font-weight-bold secondary--text">Assessments</h5>
          <v-divider />
          <div class="overflow-auto fill-height">
            <base-table
              v-if="assessments.length"
              :data="assessments"
              :headers="[
                { id: 'name', title: 'Assessment' },
                { id: 'view', title: '', width: '1%' }
              ]"
            >
              <template
                #item_name="{
                  item: {
                    type,
                    subType,
                    course: {
                      course: { name: courseName },
                      section: {
                        name: sectionName,
                        class: { name: className }
                      }
                    }
                  }
                }"
              >
                <v-list-item-title>{{ type }}, {{ subType }}</v-list-item-title>
                <v-list-item-subtitle>{{ courseName }} ({{ className }} {{ sectionName }})</v-list-item-subtitle>
              </template>
              <template
                #item_view="{
                  item: {
                    id,
                    course: { id: cid }
                  }
                }"
              >
                <base-btn small :to="{ name: 'course-assignments-cid-assessments-id-details', params: { id, cid } }">
                  View
                </base-btn>
              </template>
            </base-table>
            <div v-else class="text-md-subtitle-1 text-body-2 font-weight-medium grey--text mt-3">
              Yeah!! No pending assessments
            </div>
          </div>
        </div>
        <div v-else-if="i === 'coursesAssignment'">
          <h5 class="text-h5 font-weight-bold secondary--text mb-3">
            Courses

            <base-btn to="/course-assignments" small>View All</base-btn>
          </h5>
          <v-divider />
          <base-table
            :data="coursesAssignment"
            :headers="[
              { id: 'class', title: 'Class' },
              { id: 'course', title: 'Course' },
              { id: 'teacher', title: 'Teacher' },
              { id: 'attendance', title: 'Attendance' }
            ]"
          >
            <template
              #item_class="{
                item: {
                  section: {
                    name,
                    class: {
                      name: className,
                      batch: {
                        name: batchName,
                        department: { name: departmentName }
                      }
                    }
                  }
                },
                defaultStyle
              }"
            >
              <v-list-item-title :class="defaultStyle">{{ batchName }} {{ className }} ({{ name }})</v-list-item-title>
              <v-list-item-subtitle class="text-caption font-weight-light secondary--text text--lighten-3">
                {{ departmentName }}
              </v-list-item-subtitle>
            </template>
            <template
              #item_course="{
                item: {
                  course: { name }
                },
                defaultStyle
              }"
            >
              <span :class="defaultStyle">{{ name }}</span>
            </template>
            <template
              #item_teacher="{
                item: {
                  teacher: { username }
                },
                defaultStyle
              }"
            >
              <span :class="defaultStyle">{{ username }}</span>
            </template>
            <template #item_attendance="{ item: { attendances }, defaultStyle }">
              <v-progress-circular
                :value="getAttendance(attendances)"
                color="primary"
                v-if="getAttendance(attendances) > -1"
                size="50"
                rotate="-90"
              >
                <span class="text-caption">{{ getAttendance(attendances) }}%</span>
              </v-progress-circular>
              <span v-else :class="defaultStyle">N\A</span>
            </template>
          </base-table>
        </div>
      </base-card>
    </grid-item>
  </grid-layout>
</template>

<script lang="ts" src="./dashboard.ts" />
