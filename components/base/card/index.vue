<template>
  <v-card class="shadow rounded-xl pa-5">
    <v-card-title v-if="$slots.title" :class="`justify-${titleIn}`">
      <slot name="title" />
    </v-card-title>
    <v-card-text>
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
