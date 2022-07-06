<template>
  <base-menu left>
    <template #activator>
      <div class="notifications cursor-pointer">
        <v-icon>mdi-bell-outline</v-icon>
        <span
          v-if="notificationCount"
          class="error white--text text-caption d-flex justify-center align-center notifications-count no-select cursor-pointer"
        >
          {{ notificationCount }}
        </span>
      </div>
    </template>

    <v-list dense max-width="600px">
      <div class="d-flex justify-space-between pa-4 pt-1 pr-6">
        <h2 class="secondary--text text-body-1 no-select font-weight-bold">Notifications</h2>
        <base-tooltip #default="{ on }" msg="Read All" transition="slide-y-reverse-transition" color="primary">
          <v-icon v-if="notificationCount > 1" v-on="on" @click.stop="readNotification()">mdi-check-all</v-icon>
        </base-tooltip>
      </div>
      <v-divider />
      <div style="max-height: 400px" class="overflow-y-auto" v-if="notifications.length">
        <v-list-item
          v-for="({ id, text, createdAt, read, type, extra }, idx) in notifications"
          :key="id"
          class="primary--text"
          @click="handleNotificationClick(idx, { type, extra, read })"
        >
          <v-list-item-content>
            <v-list-item-title class="text-caption secondary--text">{{ text }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption d-flex flex-column">
              {{ $helpers.formatDate(createdAt, undefined, true) }}
            </v-list-item-subtitle>
            <div>
              <v-chip
                small
                color="primary"
                outlined
                @click="$route.name !== 'calendar' && $router.push('/calendar')"
                class="secondary--text"
                v-if="type === 'meeting'"
              >
                View on Calendar
              </v-chip>
            </div>
          </v-list-item-content>
          <v-list-item-action v-if="!read">
            <base-tooltip
              #default="{ on }"
              msg="Read notification"
              transition="slide-y-reverse-transition"
              color="primary"
            >
              <v-icon v-on="on" @click="readNotification(idx)">mdi-check-all</v-icon>
            </base-tooltip>
          </v-list-item-action>
        </v-list-item>
      </div>
      <p class="px-4 pt-2 no-select grey--text mb-0" v-else>No new notifications</p>
    </v-list>
  </base-menu>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped>
.notifications {
  position: relative;

  &-count {
    position: absolute;
    top: -7px;
    right: -7px;
    border-radius: 50%;
    width: 18px;
    height: 13px;
    padding: 10px;
  }
}
</style>
