<template>
  <v-tooltip
    :top="direction == 'top'"
    :bottom="direction == 'bottom'"
    :left="direction == 'left'"
    :right="direction == 'right'"
    :color="color"
    v-bind="$attrs"
  >
    <template #activator="{ on }">
      <slot :on="on" />
    </template>
    <span>{{ msg }}</span>
  </v-tooltip>
</template>

<script lang="ts" src="./index.ts" />
