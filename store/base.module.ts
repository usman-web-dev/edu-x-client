import { Context } from '@nuxt/types';
import { VuexModule } from 'nuxt-property-decorator';
import { Api } from '~/plugins/api';

export class BaseModule extends VuexModule {
  $api!: Api;
  $context!: Context;
}
