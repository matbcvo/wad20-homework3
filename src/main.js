import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Index from "@/components/Index"
import Login from "@/components/Login"
import Browse from "@/components/Browse"
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path: '/login',
    alias: '/',
    name: 'login', 
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/browse',
    name: 'browse', 
    component: Browse
  },
]

const router = new VueRouter({routes});

const store = new Vuex.Store({
  state: {
    posts: [],
    profiles: [],
    user: [],
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getProfiles(state) {
      return state.profiles;
    },
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    async getPosts({commit}) {
      axios.get("https://private-anon-5a6551f4d8-wad20postit.apiary-mock.com/posts").then(response => {
        commit("setPosts", response.data);
        //console.log(response.data);
      }).catch(error => {
        alert("Error, can't get posts data: " + error);
      });
    },
    async getProfiles({commit}) {
      axios.get("https://private-anon-5a6551f4d8-wad20postit.apiary-mock.com/profiles").then(response => {
        commit("setProfiles", response.data);
        //console.log(response.data);
      }).catch(error => {
        alert("Error, can't get profiles data: " + error);
      });
    },
    async getUser({commit}) {
      axios.get("https://private-anon-5a6551f4d8-wad20postit.apiary-mock.com/users/1").then(response => {
        commit("setUser", response.data);
        //console.log(response.data);
      }).catch(error => {
        alert("Error, can't get user data: " + error);
      });
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setProfiles(state, profiles) {
      state.profiles = profiles;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')