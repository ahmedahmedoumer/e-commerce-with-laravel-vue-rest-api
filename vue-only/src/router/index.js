import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import submit_forms from '../components/submit_forms.vue'
// import get_data from '../components/vuecomponents/get_data.vue'
// import update_page from '../components/vuecomponents/update_page.vue'
import Login_page from '@/components/Login_page.vue'
import signup from '@/components/sign-up.vue'
import HomeComponent from '@/components/HomeComponent.vue'
// import ForgotPassword from '@/components/vuecomponents/ForgotPassword.vue'
import productView from '@/components/user/productView.vue'
import profileView from '@/components/user/profileView.vue'
import cartProduct from '@/components/user/cartProduct'
import adminLogin from '@/components/admin/adminLogin.vue'
import store from '@/store'
 
const routes = [{
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
   
     {
        path: '/admin',
        name: 'adminLogin',
        component: adminLogin
    },
    {
        path: '/sign_up',
        name: 'sign-up',
        component: signup
    },
  {     path: '/login',
        name: 'login',
        component: Login_page

    },
    {
        path: '/profile',
        name: 'profile',
        component: profileView
    },
    {
        path: '/product',
        name: 'product',
        component: productView,
    },
    {
        path: '/cartProduct',
        name: 'cartProduct',
        component: cartProduct,
    },
   
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    //   { path: '*', beforeEnter: (to, from, next) => { next('/') } },
    // {
    //     path: '/',
    //     name: 'homePage',
    //     component:HomeComponent
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
     const user=store.state.user;
    if (user == null) {
        console.log("null   "+user);
        if(to.name!='login' && to.name!='adminLogin'){
            next({name:'login'});
        }
        else{
            next();
        }
    }
    else{
           if (to.matched.length===0  || to.name=='login' || to.name=='adminLogin') {
           next({name:'home'});
           }
           next();
       }
  })

export default router