import { Plugin } from '@nuxt/types';
import { auth, BaseApi } from '~/api';
import { course } from '~/api/course';
import { BaseService } from '~/services';

const api = {
  auth,
  course
};

export type Api = typeof api;

interface Props {
  $api: Api;
}

declare module 'vue/types/vue' {
  interface Vue extends Props {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends Props {}
  interface Context extends Props {}
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
  BaseService.prototype.$context = ctx;

  inject('api', api);
};

export default plugin;
