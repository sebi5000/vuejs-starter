import Vue from "vue";
import VueRouter from "vue-router";
import Cockpit from "./components/Cockpit.vue";
import Configurator from "./components/Configurator.vue";
import AdminCenter from "./components/AdminCenter.vue";
import App from "./App.vue";
import "./css/default.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSpinner);
library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    path: "/cockpit",
    component: Cockpit
  },
  {
    path: "/configurator",
    component: Configurator
  },
  {
    path: "/admincenter",
    component: AdminCenter
  },

];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
