<template>
  <validation-provider :rules="rules" v-slot="{ errors }" :vid="vid" slim>
    <component
      :is="`v-${type}`"
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @change="$emit('input', !!$event ? $event : null)"
      :clearable="!rules.includes('required')"
      :loading="$fetchState.pending"
      :items="items"
    >
      <template #append-item v-if="apiParams">
        <v-list-item v-intersect="loadMore" v-if="!isEnd">
          <v-list-item-content>
            <v-list-item-title class="primary--text">Loading...</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
      <template v-for="(_, name) in $scopedSlots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </component>
  </validation-provider>
</template>

<script lang="ts" src="./index.ts" />
