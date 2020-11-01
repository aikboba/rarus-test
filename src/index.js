import './scss/main.scss'

import Vue from "vue"
import App from './vue-app/App'
import axios from 'axios/dist/axios'
import VueAxios from 'vue-axios/dist/vue-axios.min'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueAxios, axios);
Vue.use(VueSpinners);

new Vue({
  render: h => h(App)
}).$mount('#app')

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
