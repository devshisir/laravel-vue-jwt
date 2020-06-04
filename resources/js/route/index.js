import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);



// import component
import Authmain from '../components/auth/auth.vue'
import dashboard from '../components/auth/dashboard.vue'

import Login from '../components/auth/login.vue'
import Register from '../components/auth/register.vue'
import Logout from '../components/auth/logout.vue'
import ForgotPass from '../components/auth/forgotPassword.vue'
import Newpassword from '../components/auth/newPassword.vue'

const routes = [
    
    {
        path: '/',
        name: 'Authmain',
        component: Authmain,
        children: [
            {
                path: '/',
                name: 'login',
                component: Login,
                meta: { requiresVisitors: true }
            },
            {
                path: '/registration',
                name: 'registration',
                component: Register,
                meta: { requiresVisitors: true }
            },
            {
                path: '/user',
                name: 'user',
                component: dashboard,
                meta: { 
                    requiresAuth: true,
                 }
            },
            {
                path: '/logout',
                name: 'logout',
                component: Logout
            },
            {
                path: '/password',
                name: 'forgotpass',
                component: ForgotPass,
                meta: { requiresVisitors: true }
            },
            {
                path: '/reset-password/:token/:email', 
                name: 'newpass',
                component: Newpassword,
                meta: { requiresVisitors: true }
            },
        ]
    },
];

const router = new VueRouter({
mode: 'history',
  routes
});

export default router;