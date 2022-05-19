<template>
  <v-list-item
    nuxt
    :to="item.link && !item.children ? { name: item.link, params: item.params } : undefined"
    :class="contentClass"
    exact-path
    color="white"
  >
    <base-tooltip
      :msg="drawerSrv.miniVariant ? item.title : ''"
      #default="{ on }"
      direction="right"
      color="primary"
      transition="slide-x-reverse-transition"
      content-class="ml-2"
    >
      <v-list-item-icon class="mr-3" v-on="drawerSrv.miniVariant ? on : undefined">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </base-tooltip>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { DrawerLink } from '~/utils';
import { drawerSrv } from '~/services';

export default Vue.extend({
  props: {
    item: {
      required: true,
      type: Object as PropType<DrawerLink>
    },
    contentClass: {
      type: String,
      default: 'my-1'
    }
  },
  computed: {
    drawerSrv() {
      return drawerSrv;
    }
  }
});
</script>
