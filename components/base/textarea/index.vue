<template>
  <validation-provider :rules="rules" v-slot="{ errors }" :vid="vid" slim>
    <v-textarea
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @input="$emit('input', $event)"
      @blur="$emit('input', trimValue())"
      :clearable="!rules.includes('required')"
    >
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
    </v-textarea>
  </validation-provider>
</template>

<script lang="ts" src="./index.ts" />
