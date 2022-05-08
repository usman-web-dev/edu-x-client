<template>
  <validation-provider :rules="rules" v-slot="{ errors }">
    <v-switch
      class="ma-0 pa-0"
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      :input-value="value"
      @change="$emit('input', $event)"
      inset
      color="secondary"
    >
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
    </v-switch>
  </validation-provider>
</template>

<script lang="ts" src="./index.ts" />
