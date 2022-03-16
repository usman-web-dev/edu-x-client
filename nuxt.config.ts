import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  head: {
    titleTemplate: '%s - EduX',
    title: 'EduX',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap'
      }
    ]
  },

  css: [],

  plugins: [],

  components: [
    { path: '@/components/', extensions: ['vue'] },
    { path: '@/components/shared/', extensions: ['vue'] }
  ],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  modules: [],

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#4f46e5',
          accent: '#111827',
          secondary: '#1f2937',
          warning: '#f97316',
          error: '#dc2626',
          success: '#16a34a'
        }
      }
    },
    defaultAssets: {
      font: false as unknown as undefined,
      icons: 'mdi'
    }
  },

  build: {}
};

export default config;
