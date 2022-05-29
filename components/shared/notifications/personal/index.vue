<template>
  <base-menu :close-on-content-click="false" left>
    <template #activator>
      <div class="notifications cursor-pointer">
        <v-icon>mdi-bell-outline</v-icon>
        <span
          v-if="notifications.length"
          class="error white--text text-caption d-flex justify-center align-center notifications-count no-select cursor-pointer"
        >
          {{ notifications.length }}
        </span>
      </div>
    </template>

    <v-list dense max-width="600px" max-height="400px" class="overflow-y-auto">
      <h2 class="secondary--text text-body-1 pa-4 pt-1 no-select font-weight-bold">Notifications</h2>
      <template v-if="notifications.length">
        <v-list-item link v-for="({ text, createdAt }, idx) in notifications" :key="idx" class="primary--text">
          <v-list-item-content>
            <v-list-item-title class="text-caption secondary--text">{{ text }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption">
              {{ $helpers.formatDate(createdAt, undefined, true) }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <p class="px-5 pt-2 no-select text-body-1 text--text" v-else>No new notifications</p>
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
