import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/';

/* vue-apollo graphql接入*/
import VueApollo from 'vue-apollo';
import {apolloClient} from './vue-apollo';

Vue.use(VueApollo);
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  store,
  render: (h) => h(App),
}).$mount('#app');
