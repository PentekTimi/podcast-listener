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

/* import specific icons */
import {
  faSpinner,
  faUpload,
  faTimes,
  faPencilAlt,
  faCompactDisc,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faSpinner, faUpload, faTimes, faPencilAlt, faCompactDisc, faCheck)

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)

    app.mount('#app')
  }
})
