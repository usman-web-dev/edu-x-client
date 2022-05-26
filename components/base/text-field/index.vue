<template>
  <validation-provider :rules="rules" v-slot="{ errors }" :vid="vid" slim>
    <v-text-field
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @input="$emit('input', $event)"
      @blur="$emit('input', trimValue())"
      :clearable="!rules.includes('required')"
      :type="Type"
    >
      <template #append v-if="!$slots.append && $attrs.type === 'password'">
        <v-icon @click="ViewPassword = !ViewPassword">mdi-eye{{ ViewPassword ? '-off' : '' }}-outline</v-icon>
      </template>

      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
      <template v-for="(_, name) in $scopedSlots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </v-text-field>
  </validation-provider>
</template>

<script lang="ts" src="./index.ts" />
