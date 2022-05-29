<template>
  <client-only>
    <div>
      <h6 class="secondary--text mb-2 text-h6" v-if="label">{{ label }}</h6>
      <vue-dropzone
        ref="dragDropUploadRef"
        id="dropzone"
        :options="dropzoneOptions"
        :duplicate-check="true"
        class="p-relative rounded-xl"
        style="border: 1px dashed"
        :style="`border-color: ${$vuetify.theme.currentTheme.primary}`"
        :use-custom-slot="true"
        @vdropzone-file-added="addFile"
      >
        <div class="dropzone-custom-content">
          <h3 class="title dropzone-custom-title ma-0 primary--text">
            <span class="text-h6 font-weight-regular secondary-3--text">
              Drop file anywhere to upload
              <br />
              <span class="text-subtitle-2">or</span>
            </span>
            <br />
            <base-btn color="primary" class="mt-5">Select File</base-btn>
          </h3>
        </div>
      </vue-dropzone>
    </div>
  </client-only>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss">
.dz-message {
  margin: 0 !important;
}
.dz-preview {
  width: 100%;
  margin: 0 !important;
  margin-bottom: 5px !important;
  z-index: 2 !important;
  .dz-image {
    display: flex !important;
    justify-content: center;
    z-index: 1 !important;
  }
  .dz-progress {
    opacity: 0 !important;
  }
  .dz-remove {
    bottom: 65% !important;
    border-radius: 10px;
    right: 10px;
    opacity: 1 !important;
    &:hover {
      text-decoration: none !important;
    }
  }
  .dz-error-message {
    opacity: 1 !important;
    top: 75% !important;
    border-radius: 0 !important;
    padding: 0 5px;
  }
  .dz-details {
    border-radius: 15px;
    z-index: 2 !important;
    .dz-size {
      margin-bottom: 5px !important;
    }
  }
}
</style>
