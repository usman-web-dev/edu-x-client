import { Plugin } from '@nuxt/types';
import { BaseApi } from '~/api';

const apis = {};
declare module 'vue/types/vue' {
  interface Vue {
    $api: typeof apis;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: typeof apis;
  }
  interface Context {
    $api: typeof apis;
  }
}

const axios: Plugin = (ctx, inject) => {
  // Customize the error message came from API.
  ctx.$strapi.hook('error', error => {
    throw new Error(error || 'Server Error');
  });

  // Inject custom APIs.
  BaseApi.prototype.$strapi = ctx.$strapi;
  BaseApi.prototype.$context = ctx;
  inject('api', apis);
};

export default axios;
