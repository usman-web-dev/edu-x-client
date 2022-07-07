<template>
  <v-card class="shadow overflow-hidden" :class="`rounded${rounded ? `-${rounded}` : ''}`">
    <template v-if="loading">
      <v-progress-linear absolute top color="primary" indeterminate />
      <v-overlay :value="true" absolute />
    </template>

    <v-card-title v-if="$slots.title" :class="`justify-${titleIn}`">
      <slot name="title" />
    </v-card-title>
    <v-card-text v-if="$slots.default" class="fill-height">
      <slot />
    </v-card-text>
    <v-card-actions v-if="$slots.actions">
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
    },
    rounded: {
      default: 'lg'
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.v-card {
  word-wrap: unset !important;

  &__title {
    word-break: unset !important;
  }
}
</style>
