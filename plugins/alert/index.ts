import { Plugin } from '@nuxt/types';
import { Alert, alertSrv } from '~/services';

interface Props {
  $alert: Alert;
}

declare module 'vue/types/vue' {
  interface Vue extends Props {}
}

declare module '@nuxt/types' {
  interface NuxtAppOptions extends Props {}
  interface Context extends Props {}
}

const alert: Plugin = (_, inject) => {
  inject('alert', alertSrv);
};

export default alert;
