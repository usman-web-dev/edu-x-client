<template>
  <v-menu v-bind="$attrs" v-on="$listeners" content-class="shadow rounded-lg" offset-y transition="slide-y-transition">
    <template #activator="{ on }">
      <div v-on="on" class="cursor-pointer">
        <slot name="activator" />
      </div>
    </template>

    <v-list dense>
      <slot />
    </v-list>
  </v-menu>
</template>

<script lang="ts" src="./index.ts" />
