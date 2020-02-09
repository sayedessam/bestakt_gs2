// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// register Vuetify v2.0
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'katex/dist/katex.min.css'
import VueKatex from 'vue-katex'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component

    // Material icons used bu Vuetify
    head.link.push({
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css'
      //'https://fonts.googleapis.com/icon?family=Material+Icons'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Cairo:300,400&display=swap&subset=arabic,latin-ext'
    }
    )
  
    //opts includes, vuetify themes, icons, etc.
    const opts = {
      rtl: true,
      theme: {
        themes: {
          light: {
            primary: '#9b27af',
            secondary: '#14cba8',
            accent: '#9effff',
            error: '#b71c2f',
          }
        }
      }
    } 
    Vue.use(Vuetify)
    appOptions.vuetify = new Vuetify(opts)

  Vue.use(VueKatex)
  
  Vue.component('Layout', DefaultLayout)
}
