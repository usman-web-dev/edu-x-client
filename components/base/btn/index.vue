<template>
  <v-btn :color="color" v-bind="$attrs" v-on="$listeners" nuxt>
    <slot />
  </v-btn>
</template>

<script lang="ts" src="./index.ts" />
