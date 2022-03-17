<template>
  <v-card class="shadow">
    <v-card-title v-if="$slots.title" class="pa-8 pb-0" :class="`justify-${titleIn}`">
      <slot name="title" />
    </v-card-title>
    <v-card-text class="pa-8">
      <slot />
    </v-card-text>
    <v-card-actions v-if="$slots.actions" class="light-gray px-8 py-5">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    titleIn: {
      type: String,
      default: 'start'
    }
  }
};
</script>
