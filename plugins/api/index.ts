import { Plugin } from '@nuxt/types';
import { BaseApi } from '~/api';
import { auth } from '~/api/auth';
import { BaseModule } from '~/store';

const api = {
  auth
};

export type Api = typeof api;

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: Api;
  }
  interface Context {
    $api: Api;
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

  BaseModule.prototype.$api = api;
  BaseModule.prototype.$context = ctx;

  inject('api', api);
};

export default axios;
