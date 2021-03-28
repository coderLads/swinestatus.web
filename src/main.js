import firebase from 'firebase/app';
import Vue from 'vue';
import App from './App.vue';
import config from './firebaseConfig';
import './index.css';
import router from './router';

firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
