<template>
  <v-dialog :max-width="450" persistent :value="confirmSrv.Mode" content-class="rounded-lg">
    <base-card class="py-5">
      <div class="d-flex">
        <base-btn icon color="error">
          <v-icon>mdi-alert-outline</v-icon>
        </base-btn>

        <div class="ml-3">
          <h3 class="text-h5 font-weight-medium secondary--text mb-1">{{ confirmSrv.Title }}</h3>
          <h4 class="text-subtitle-2 font-weight-regular secondary--text text--lighten-4">
            {{ confirmSrv.Message }}
          </h4>
        </div>
      </div>

      <template #actions>
        <div class="d-flex justify-end width-100">
          <base-btn text @click="confirmSrv.close(false)" color="secondary">
            <span>No</span>
          </base-btn>
          <base-btn @click="confirmSrv.close(true)" class="ml-3" color="error" depressed>
            <span>Yes</span>
          </base-btn>
        </div>
      </template>
    </base-card>
  </v-dialog>
</template>

<script>
import { confirmSrv } from '~/services';

export default {
  data() {
    return {
      confirmSrv
    };
  }
};
</script>
