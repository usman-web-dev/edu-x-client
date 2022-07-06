<template>
  <v-app-bar color="gray" app elevate-on-scroll class="shadow">
    <v-app-bar-nav-icon color="primary" @click="drawerSrv.mode = !drawerSrv.mode" />
    <div class="d-flex justify-end align-center width-100">
      <notifications-personal />
      <base-menu>
        <template #activator>
          <div class="d-flex align-center ml-5">
            <span class="mr-2 secondary--text">{{ $helpers.titleize($strapi.user && $strapi.user.username) }}</span>
            <profile-avatar />
          </div>
        </template>

        <v-list-item
          v-for="{ title, icon, link, func } in menuLinks"
          :key="title"
          :to="link"
          @click="func ? func() : undefined"
          color="primary"
        >
          <v-list-item-icon class="mr-2">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </base-menu>
    </div>
  </v-app-bar>
</template>

<script lang="ts" src="./index.ts" />
