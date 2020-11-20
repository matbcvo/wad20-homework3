import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from "@/components/Login"
import Browse from "@/components/Browse"

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'browse', component: Browse},
  {path: '/login', name: 'login', component: Login},
]

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
