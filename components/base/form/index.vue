<template>
  <validation-observer #default="slot" slim ref="baseForm">
    <v-form @submit.prevent="slot.invalid ? undefined : $emit('submit')">
      <slot v-bind="slot" />
    </v-form>
  </validation-observer>
</template>

<script lang="ts" src="./index.ts" />
