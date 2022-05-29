import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  ssr: false,

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

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        ...[
          {
            name: 'grades-id-edit',
            path: '/grades/:id/edit',
            component: resolve(__dirname, 'pages/grades/add/index.vue')
          },
          {
            name: 'batches-id-edit',
            path: '/batches/:id/edit',
            component: resolve(__dirname, 'pages/batches/add/index.vue')
          },
          {
            name: 'departments-id-edit',
            path: '/departments/:id/edit',
            component: resolve(__dirname, 'pages/departments/add/index.vue')
          },
          {
            name: 'classes-id-edit',
            path: '/classes/:id/edit',
            component: resolve(__dirname, 'pages/classes/add/index.vue')
          },
          {
            name: 'sections-id-edit',
            path: '/sections/:id/edit',
            component: resolve(__dirname, 'pages/sections/add/index.vue')
          },
          {
            name: 'courses-id-edit',
            path: '/courses/:id/edit',
            component: resolve(__dirname, 'pages/courses/add/index.vue')
          },
          {
            name: 'course-assignments-id-edit',
            path: '/course-assignments/:id/edit',
            component: resolve(__dirname, 'pages/course-assignments/add/index.vue')
          },
          {
            name: 'course-assignments-cid-attendances-id-edit',
            path: '/course-assignments/:cid/attendances/:id/edit',
            component: resolve(__dirname, 'pages/course-assignments/_cid/attendances/add/index.vue')
          },
          {
            name: 'course-assignments-cid-assessments-id-edit',
            path: '/course-assignments/:cid/assessments/:id/edit',
            component: resolve(__dirname, 'pages/course-assignments/_cid/assessments/add/index.vue')
          },
          {
            name: 'course-assignments-cid-assessments-id-submissions-subid-details',
            path: '/course-assignments/:cid/assessments/:id/submissions/:subid/details',
            component: resolve(__dirname, 'pages/course-assignments/_cid/assessments/_id/details/index.vue')
          },
          {
            name: 'users-role-id-edit',
            path: '/users/:role/:id/edit',
            component: resolve(__dirname, 'pages/users/_role/add/index.vue')
          }
        ]
      );
    },
    prefetchLinks: false
  },

  render: {
    resourceHints: false
  },

  css: ['@/assets/scss/index.scss'],

  plugins: ['~/plugins/vee-validate', '~/plugins/api', '~/plugins/alert', '~/plugins/confirm', '~/plugins/helpers'],

  components: [
    { path: '@/components/', extensions: ['vue'] },
    { path: '@/components/shared/', extensions: ['vue'] }
  ],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/strapi'],

  strapi: {
    url: 'http://localhost:1337/api',
    cookie: {
      path: '/'
    }
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
