import { createRouter, createWebHistory } from 'vue-router'
import Login_page from '@/components/Login_page.vue'
import signup from '@/components/sign-up.vue'
import HomeComponent from '@/components/HomeComponent.vue'
import productView from '@/components/user/productView.vue'
import profileView from '@/components/user/profileView.vue'
import cartProduct from '@/components/user/cartProduct'
import adminLogin from '@/components/admin/adminLogin.vue'
import showUsers from '@/components/admin/showUsers.vue'
import NavComponent from '@/components/Nav-Component.vue'
import store from '@/store'

const routes = [
    {
       path:'/',
       name:'NavBar',
       component:NavComponent
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
        meta:{
            requiresAuth:true,
        }
    },
   
     {
        path: '/admin',
        name: 'adminLogin',
        component: adminLogin
    },
    {
        path:'/admin/home', 
        name:'adminHome',
        component: HomeComponent ,
        meta:{
            requiresAuth:true,
            isAdmin:true,
        }},
        {
            path:'/admin/show/users', 
            name:'show-users',
            component: showUsers ,
            meta:{
                requiresAuth:true,
                isAdmin:true,
            }},
            {
                path:'/admin/view/customers', 
                name:'view-customer',
                component: HomeComponent ,
                meta:{
                    requiresAuth:true,
                    isAdmin:true,
                }},
             {
                    path:'/admin/show-available/product', 
                    name:'available-product',
                    component: HomeComponent ,
                    meta:{
                        requiresAuth:true,
                        isAdmin:true,
             }},
             {
                    path:'/admin/make-reports/report', 
                    name:'make-reports',
                    component: HomeComponent ,
                    meta:{
                        requiresAuth:true,
                        isAdmin:true,
             }},

             {
                path: '/admin/show/orders',
                name: 'adminHome',
                component: HomeComponent,
                meta:{
                    requiresAuth:true,
                    isAdmin:true,
                }
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
        component: profileView, 
        meta:{
            requiresAuth:true,
        }
    },
    {
        path: '/product',
        name: 'product',
        component: productView,
        meta:{
            requiresAuth:true,
        }
    },
    {
        path: '/cartProduct',
        name: 'cartProduct',
        component: cartProduct,
        meta:{
            requiresAuth:true,
        }
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
    if (to.matched.some(record=>record.meta.requiresAuth)) {
             if (!store.getters.user ) {
                next({name:'login'});
             }
             else{
                if (to.matched.some(rolecheck=>rolecheck.meta.isAdmin)) {
                    if(!(store.getters.isAdmin==='admin')){
                       return false;
                    }
                    else{
                        next();
                    }  
                }
                    next();  
             }
    }
    else{
        next();
    }
//      const user=localStorage.getItem('Token');
//           if (!user) {
//         console.log(user);
//         if(to.name!='login' && to.name!='adminLogin'){
//             next({name:'login'});
//         }
//         else{
//             next();
//         }
//     }
//     else{   
//            if (to.matched.length===0  || to.name=='login' || to.name=='adminLogin') {
//            next({name:'home'});
//            }
//            next();
//        }
  })

export default router