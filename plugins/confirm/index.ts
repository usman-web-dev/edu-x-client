import { Plugin } from '@nuxt/types';
import { Confirm, confirmSrv } from '~/services';

interface Props {
  $confirm: Confirm;
}

declare module 'vue/types/vue' {
  interface Vue extends Props {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends Props {}
  interface Context extends Props {}
}

const plugin: Plugin = (_, inject) => {
  inject('confirm', confirmSrv);
};

export default plugin;
