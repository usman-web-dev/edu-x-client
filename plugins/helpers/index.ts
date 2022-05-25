import { Plugin } from '@nuxt/types';
import { Helpers, helpers } from './helpers';

interface Props {
  $helpers: typeof helpers;
}

declare module 'vue/types/vue' {
  interface Vue extends Props {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends Props {}
  interface Context extends Props {}
}

const helper: Plugin = (ctx, inject) => {
  Helpers.prototype.$context = ctx;
  inject('helpers', helpers);
};

export default helper;
