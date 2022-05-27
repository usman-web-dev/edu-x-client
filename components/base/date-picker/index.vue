<template>
  <v-dialog ref="dialog" v-model="dialog" persistent max-width="320px" content-class="rounded-xl">
    <template #activator="{ on, attrs }">
      <base-text-field
        :value="value && $helpers.formatDate(value)"
        v-bind="{ ...attrs, ...$attrs }"
        readonly
        v-on="on"
        :rules="rules"
      >
        <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
        <template #append>
          <v-icon v-on="on">mdi-calendar-outline</v-icon>
        </template>
      </base-text-field>
    </template>
    <v-card>
      <v-card-text class="pa-0">
        <v-date-picker
          full-width
          color="primary"
          @input="$emit('input', $event)"
          :value="value"
          v-bind="$attrs"
          v-on="$listeners"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <base-btn text color="primary" @click="$refs.dialog.save(value)">OK</base-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./index.ts" />
