import { Plugin } from '@nuxt/types';
import { BaseApi } from '~/api';
import { auth } from '~/api/auth';

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

const plugin: Plugin = (ctx, inject) => {
  ctx.$strapi.hook('error', e => {
    let error: string;
    if (Array.isArray(e.message)) {
      error = e.message[0].messages[0].message;
    } else if (typeof e.message === 'object' && e.message !== null) {
      error = e.message.message;
    } else if (e.message) {
      error = e.message;
    } else {
      error = e.original?.error?.message?.replace?.('identifier', 'email') ?? 'Server Error';
    }

    ctx.$alert.show(error, 'error');
  });

  // Inject custom APIs.
  BaseApi.prototype.$strapi = ctx.$strapi;
  BaseApi.prototype.$context = ctx;

  inject('api', api);
};

export default plugin;
