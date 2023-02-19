import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import submit_forms from '../components/submit_forms.vue'
import get_data from '../components/get_data.vue'
import update_page from '../components/update_page.vue'
import Login_page from '@/components/Login_page.vue'
import signup from '@/components/sign-up.vue'
import HomeComponent from '@/components/HomeComponent.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import productView from '@/components/admin/productView.vue'
import profileView from '@/components/admin/profileView.vue'

const routes = [{
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/create',
        name: 'create',
        component: submit_forms

    },
    {
        path: '/sign_up',
        name: 'sign-up',
        component: signup
    },
    {
        path: '/get',
        name: 'get_data',
        component: get_data

    },
    {
        path: '/login',
        name: 'login',
        component: Login_page

    },
    {
        path: '/profile',
        name: 'profile',
        component: profileView
    },
    {
        path: '/update/:id',
        name: '/update/:id',
        component: update_page,
    },
    {
        path: '/ForgotPassword',
        name: 'Forgot',
        component: ForgotPassword,
    },
    {
        path: '/product',
        name: 'product',
        component: productView,
    },
    // {
    //     path: '/delete/:id',
    //     name:'/delete/:id',
    //     component:
    // },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router