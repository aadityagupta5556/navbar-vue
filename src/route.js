import { createWebHistory, createRouter, } from 'vue-router'
import Home from './components/Home.vue'
import services from './components/services.vue'
import payment from './components/payment.vue'
const routes=[

    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'services',
        path:'/services',
        component:services
    },
    {
        name:'payment',
        path:'/payment',
        component:payment
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export  default router
