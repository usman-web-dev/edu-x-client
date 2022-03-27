<template v-if="alertSrv.mode">
  <client-only>
    <v-snackbar
      transition="slide-y-reverse-transition"
      v-model="alertSrv.mode"
      :color="alertSrv.type"
      bottom
      app
      :timeout="-1"
    >
      <div v-html="alertSrv.message" />
      <v-progress-linear :value="alertSrv.timerValue" color="white" class="mt-2" rounded />
      <template #action="{ attrs }" v-if="alertSrv.closeable">
        <base-btn small icon color="white" text v-bind="attrs" @click="alertSrv.mode = false">
          <v-icon>mdi-close</v-icon>
        </base-btn>
      </template>
    </v-snackbar>
  </client-only>
</template>

<script>
import { alertSrv } from '~/services';

export default {
  data() {
    return {
      alertSrv
    };
  }
};
</script>
