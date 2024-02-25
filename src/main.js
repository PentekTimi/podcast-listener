import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'

import App from './App.vue'
import router from './router'
import './includes/firebase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'
import progressBar from './includes/progress-bar'
import 'nprogress/nprogress.css'

/* import specific icons */
import {
  faSpinner,
  faUpload,
  faTimes,
  faPencilAlt,
  faCompactDisc,
  faCheck,
  faHeadphonesAlt,
  faPlay,
  faCircle,
  faPause,
  faRotateLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faSpinner,
  faUpload,
  faTimes,
  faPencilAlt,
  faCompactDisc,
  faCheck,
  faHeadphonesAlt,
  faPlay,
  faCircle,
  faPause,
  faRotateLeft,
  faComment
)

registerSW({ immediate: true })
progressBar(router)

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(i18n)

    app.mount('#app')
  }
})
