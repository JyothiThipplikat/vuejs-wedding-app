import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Signup from './views/Signup.vue';
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

import Survey from "./views/Survey.vue";

import CustomerProfile from "./views/CustomerProfile.vue";

import AddToCart from "./views/AddToCart.vue";

import VendorsIndex from "./views/VendorsIndex.vue";
import VendorsShow from "./views/VendorsShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home',component: Home },

    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },

    { path: "/survey", name: "survey", component: Survey},
    { path: "/customerprofile", name: "customerprofile", component: CustomerProfile},
    { path: "/addtocart", name: "addtocart", component: AddToCart},

    { path: "/vendors", name: "VendorsIndex", component: VendorsIndex},
    { path: "/vendors/:id", name: "VendorsShow", component: VendorsShow},
  ]
});
