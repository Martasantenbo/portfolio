// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://kit.fontawesome.com/476ce73535.js', defer: true, crossorigin:'anonymous' },
      ],
    },
  },
  buildModules: [
    'nuxt-windicss',
    'nuxt-svgo',
    '@nuxtjs/color-mode'
  ],
})
