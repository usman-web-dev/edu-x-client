<template>
  <save
    title="Meeting"
    :subtitle="subtitle"
    :add-func="addFunc"
    :update-func="updateFunc"
    @close="$router.push({ name: 'course-assignments' })"
    :edit-data-func="id => $api.meeting.findOne(id, editApiParams)"
    @edit-data="onEditData"
  >
    <v-row>
      <v-col cols="12">
        <base-text-field label="Title" placeholder="Meeting title" v-model="meeting.title" rules="required" />
      </v-col>

      <v-col cols="12">
        <base-date-time-picker
          label="Start"
          rules="required"
          v-model="meeting.start"
          :min="$helpers.getDate(new Date())"
          :max="meeting.end ? $helpers.getDate(meeting.end) : undefined"
        />
      </v-col>

      <v-col cols="12">
        <base-date-time-picker
          label="End"
          rules="required"
          v-model="meeting.end"
          :min="meeting.start ? $helpers.getDate(meeting.start) : undefined"
        />
      </v-col>

      <v-col cols="12">
        <base-textarea label="Description (Optional)" v-model="meeting.description" rows="3" />
      </v-col>

      <v-col cols="12">
        <base-text-field label="URL (Optional)" placeholder="Meeting URL" v-model="meeting.meetingUrl" rules="url" />
      </v-col>

      <v-col cols="12">
        <base-select
          label="Attendees"
          rules="required"
          v-model="meetingAttendees"
          item-value="id"
          item-text="username"
          :items="attendees"
          multiple
          return-object
          chips
          deletable-chips
          type="autocomplete"
        />
      </v-col>

      <v-col cols="12">
        <base-switch label="Reccuring" v-model="meeting.recurring" @change="onRecurringChange" hide-details />
      </v-col>

      <v-slide-y-transition hide-on-leave>
        <v-col cols="12" class="d-flex flex-wrap align-end" style="gap: 20px" v-if="meeting.recurring">
          Repeat Every:
          <base-switch
            hide-details
            v-for="day in days"
            :key="day"
            :label="$helpers.titleize(day)"
            v-model="meeting[day]"
          />
        </v-col>
      </v-slide-y-transition>
    </v-row>
  </save>
</template>

<script lang="ts" src="./index.ts" />
