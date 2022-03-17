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

  css: ['@/assets/scss/index.scss'],

  plugins: ['~/plugins/vee-validate', '~/plugins/api'],

  components: [
    { path: '@/components/', extensions: ['vue'] },
    { path: '@/components/shared/', extensions: ['vue'] }
  ],

  router: {
    middleware: 'auth'
  },

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/strapi'],

  strapi: {
    url: 'http://localhost:1337/api'
  },

  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/scss/vuetify-variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#4f46e5',
          accent: '#111827',
          secondary: '#1f2937',
          warning: '#f97316',
          error: '#dc2626',
          success: '#16a34a',
          gray: '#f3f4f6',
          'light-gray': '#f9fafb'
        }
      }
    },
    defaultAssets: {
      font: false as unknown as undefined,
      icons: 'mdi'
    }
  },

  build: {
    transpile: ['vee-validate/dist/rules']
  }
};

export default config;
