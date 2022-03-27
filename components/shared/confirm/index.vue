<template>
  <v-dialog :max-width="450" persistent :value="confirmSrv.Mode" content-class="rounded-xl">
    <base-card class="pa-8 rounded-lg">
      <template #title>
        <span class="font-weight-medium secondary--text text-center">{{ confirmSrv.Message }}</span>
      </template>

      <template #actions>
        <div class="d-flex justify-center width-100">
          <base-btn @click="confirmSrv.close(true)" large class="mr-5" color="error">
            <span>Yes</span>
          </base-btn>
          <base-btn outlined @click="confirmSrv.close(false)" large color="error">
            <span>No</span>
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
