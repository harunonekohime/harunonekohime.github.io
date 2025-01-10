import 'normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { useStorage } from '@vueuse/core'

// i18n
const defaultLocale = useStorage('locale', 'de')
const i18n = createI18n({
  locale: defaultLocale.value,
  messages,
})

// add the icons to the library
library.add(fas, fab)

// create the app
const app = createApp(App)

// plugins
app.use(router)
app.use(i18n)

// components
app.component('font-awesome-icon', FontAwesomeIcon)

// mount the app
app.mount('#app')
