<template v-if="AlertSrv.mode">
  <client-only>
    <v-snackbar
      transition="slide-y-reverse-transition"
      v-model="AlertSrv.mode"
      :color="AlertSrv.type"
      bottom
      app
      :timeout="-1"
    >
      <div v-html="AlertSrv.message" />
      <v-progress-linear :value="AlertSrv.timerValue" color="white" class="mt-2" rounded />
      <template #action="{ attrs }" v-if="AlertSrv.closeable">
        <base-btn small icon color="white" text v-bind="attrs" @click="AlertSrv.mode = false">
          <v-icon>mdi-close</v-icon>
        </base-btn>
      </template>
    </v-snackbar>
  </client-only>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { alertSrv } from '~/services';

@Component
export default class AlertComponent extends Vue {
  private AlertSrv = alertSrv;
}
</script>
