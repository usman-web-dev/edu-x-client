import { Context } from '@nuxt/types';
import { Strapi } from '@nuxtjs/strapi';

export abstract class BaseApi {
  $strapi!: Strapi;
  $context!: Context;
}
