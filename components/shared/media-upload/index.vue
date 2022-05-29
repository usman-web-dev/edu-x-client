<template>
  <validation-provider :rules="rules" v-slot="{ errors }" tag="div" ref="providerRef">
    <div class="d-flex my-5">
      <div class="media rounded-lg" :class="{ 'ml-5': idx }" v-ripple v-for="(file, idx) in mediaFiles" :key="idx">
        <v-img :src="getImageLink(file)" v-if="getImageLink(file)" contain max-height="100%" class="rounded-lg" />
        <v-sheet
          height="100%"
          color="secondary"
          dark
          class="d-flex flex-column justify-center align-center no-select rounded-lg"
          v-else
        >
          {{ file.fileName }}
          <span class="grey--text">{{ file.mimeType }}</span>
        </v-sheet>

        <v-icon color="error" class="media-remove" v-if="!readonly" @click.stop="remove(idx)">mdi-close-circle</v-icon>

        <div class="d-flex justify-end align-center media-actions px-2 width-100">
          <v-icon color="primary" @click.stop="file.download($api)">mdi-download-outline</v-icon>
        </div>
      </div>
      <div v-if="!mediaFiles.length" class="text-md-subtitle-1 text-body-2 font-weight-medium error--text">
        No files attached
      </div>
    </div>
    <v-slide-y-transition>
      <div class="v-messages mt-1 ml-3 error--text" v-if="errors.length">
        {{ errors[0] }}
      </div>
    </v-slide-y-transition>

    <drag-drop-upload @input="addMedia" v-if="!readonly" />
  </validation-provider>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped>
.media {
  position: relative;
  height: 150px;
  width: 150px;

  &-remove,
  &-actions {
    position: absolute;
  }

  &-remove {
    top: -12px;
    right: -12px;
  }

  &-actions {
    bottom: 8px;
  }
}
</style>
