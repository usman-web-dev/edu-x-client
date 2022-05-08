<template>
  <v-navigation-drawer
    color="secondary"
    app
    dark
    :mini-variant="drawerSrv.miniVariant"
    floating
    v-model="drawerSrv.mode"
    mobile-breakpoint="959"
  >
    <v-list-item class="px-0">
      <v-list-item-content>
        <v-list-item-title>
          <v-img
            :src="`/svgs/${!drawerSrv.miniVariant ? 'edu-' : ''}x.svg`"
            contain
            :height="!drawerSrv.miniVariant ? 60 : 40"
          />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list dense>
      <v-list-item v-for="item in drawerSrv.links" :key="item.title" nuxt :to="{ name: item.link }" class="mb-2" exact>
        <base-tooltip
          :msg="drawerSrv.miniVariant ? item.title : ''"
          #default="{ on }"
          direction="right"
          color="primary"
          transition="slide-x-reverse-transition"
          content-class="ml-2"
        >
          <v-list-item-icon class="mr-3" v-on="drawerSrv.miniVariant ? on : undefined">
            <v-icon>{{ $route.name === item.link ? item.selectedIcon : item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </base-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" src="./index.ts" />
