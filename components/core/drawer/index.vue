<template>
  <v-navigation-drawer
    color="secondary"
    app
    dark
    :mini-variant="drawerSrv.miniVariant"
    floating
    v-model="drawerSrv.mode"
    mobile-breakpoint="959"
    width="290"
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
      <template v-for="item in drawerSrv.links">
        <core-drawer-link :item="item" :key="`item-${item.title}`" v-if="!item.children" />

        <v-list-group :key="`group-${item.title}`" color="white" :value="isGroupActive(item)" v-else>
          <template #activator>
            <core-drawer-link :item="item" content-class="pl-0" />
          </template>

          <core-drawer-link v-for="child in item.children" :item="child" :key="`child-${child.title}`" />
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" src="./index.ts" />
