<template>
  <v-row>
    <v-col cols="6">
      <base-date-picker
        :label="`${this.$attrs.label} Date`.trim()"
        v-model="date"
        :rules="rules"
        :min="$attrs.min"
        :max="$attrs.max"
      />
    </v-col>
    <v-col cols="6">
      <base-time-picker :label="`${this.$attrs.label} Time`.trim()" v-model="time" :rules="rules" :date="date" />
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.ts" />
