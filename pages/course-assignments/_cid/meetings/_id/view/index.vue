<template>
  <base-card :loading="$fetchState.pending" class="pa-3">
    <template #title>
      <div class="d-flex align-center justify-space-between width-100">
        <div>
          <h3 class="text-subtitle-1 text-md-h5 font-weight-bold secondary--text">Meeting</h3>
          <span class="text-subtitle-2 text-md-subtitle-1 secondary--text text--lighten-4">
            {{ subtitle }}
          </span>
        </div>

        <div v-if="ownMeeting && !isHost">
          <base-btn
            :outlined="ownMeeting.accepted !== false"
            color="error"
            @click="acceptMeeting(ownMeeting.id, false)"
            :disabled="isMeetingPassed"
          >
            Reject{{ ownMeeting.accepted === false ? 'ed' : '' }}
          </base-btn>
          <base-btn
            :outlined="ownMeeting.accepted !== true"
            color="success"
            @click="acceptMeeting(ownMeeting.id, true)"
            :disabled="isMeetingPassed"
          >
            Accept{{ ownMeeting.accepted === true ? 'ed' : '' }}
          </base-btn>
        </div>
        <div v-else-if="isHost">
          <base-btn text color="error" @click="deleteMeeting">Delete</base-btn>
          <base-btn color="success" :to="{ name: 'course-assignments-cid-meetings-id-edit' }">Edit</base-btn>
        </div>
      </div>
    </template>

    <div class="d-flex flex-column text-body-1 secondary--text mb-5">
      <span>
        <span class="font-weight-bold">Title:</span>
        <span class="secondary--text text--lighten-4">
          {{ meeting.title }}
        </span>
      </span>
      <span v-if="meeting.host && !isHost">
        <span class="font-weight-bold">Host:</span>
        <span class="secondary--text text--lighten-4">
          {{ meeting.host.username }}
        </span>
      </span>
      <span>
        <span class="font-weight-bold">Start:</span>
        <span class="secondary--text text--lighten-4">
          {{ formatDate(meeting.start) }}
        </span>
      </span>
      <span>
        <span class="font-weight-bold">End:</span>
        <span class="secondary--text text--lighten-4">
          {{ formatDate(meeting.end) }}
        </span>
      </span>
      <span v-if="meeting.description">
        <span class="font-weight-bold">Description:</span>
        <span class="secondary--text text--lighten-4">
          {{ meeting.description }}
        </span>
      </span>
      <span v-if="meeting.meetingUrl">
        <span class="font-weight-bold">Meeting URL:</span>
        <a :href="meeting.meetingUrl" target="_blank">{{ meeting.meetingUrl }}</a>
      </span>
      <span v-if="meeting.recurring">
        <span class="font-weight-bold">Repeats Every:</span>
        <span class="secondary--text text--lighten-4">
          {{
            days
              .filter(day => meeting[day])
              .map(day => $helpers.titleize(day))
              .join(', ')
          }}
        </span>
      </span>
    </div>

    <base-table
      :data="attendees"
      :headers="[
        { id: 'attendee', title: 'Attendee' },
        { id: 'status', title: 'Status' }
      ]"
      :loading="$fetchState.pending"
    >
      <template
        #item_attendee="{
          item: {
            attendee: { username }
          },
          defaultStyle
        }"
      >
        <span :class="defaultStyle">{{ username }}</span>
      </template>
      <template #item_status="{ item: { accepted } }">
        <span :class="`${getStatusColor(accepted).color}--text font-weight-medium`">
          {{ getStatusColor(accepted).title }}
        </span>
      </template>
    </base-table>
  </base-card>
</template>

<script lang="ts" src="./index.ts" />
