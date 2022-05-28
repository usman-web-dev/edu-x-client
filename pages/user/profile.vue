<template>
  <v-row>
    <v-col cols="12" lg="3">
      <base-card title-in="center" class="mb-5">
        <template #title>
          Welcome&nbsp;
          <span class="font-weight-bold">{{ user.username }}</span>
          !
        </template>

        <div class="d-flex justify-center">
          <profile-avatar :size="120" class="text-h2" />
        </div>
      </base-card>
      <base-card title-in="center" class="pa-0">
        <v-list dense nav class="pa-0">
          <v-list-item
            v-for="[link, title] in Object.entries({
              personal: 'Personal Information',
              'update-password': 'Update Password'
            })"
            :key="link"
            color="primary"
            :to="`/user/profile/${link}`"
          >
            <v-list-item-title class="text-body-1">{{ title }}</v-list-item-title>
            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </base-card>
    </v-col>
    <v-col cols="12" lg="9">
      <v-slide-x-reverse-transition hide-on-leave>
        <div :key="$route.name">
          <nuxt-child />
        </div>
      </v-slide-x-reverse-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./profile.ts" />
