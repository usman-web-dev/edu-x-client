import { Store } from 'vuex';

const initStores = (store: Store<any>) => {};

export const plugins = [initStores];

export * from './base.module';
