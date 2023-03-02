<template>
     <div>
     <nav class="navbar navbar-light bg-light " v-if="user">
        <router-link to="/home">
        <a class="navbar-brand text-dark btn btn-sm" href="#">Home</a>
         </router-link>
        <ul class="nav justify-content-end ">
            
            <router-link to="/product">
            <li class="nav-item btn btn-sm">products</li>
            </router-link>
            <router-link to="/cartProduct">
            <li class="nav-item btn btn-sm">
                <b-icon-cart-fill />
                <span class="badge rounded-pill badge-notification bg-danger" > {{ total_quantity }}</span>
            </li>
            </router-link>
            <router-link to="/profile">
                <li class="nav-item btn btn-sm ">Profile</li>
            </router-link>
                <li>
                <a class="nav active-link btn-sm" href="javascript:void(0)" @click="submitLogout">Logout</a>
                </li>
        </ul>
      </nav> 
      <nav class="navbar navbar-light bg-dark m-3 " v-if="!user">
    <a class="navbar-brand text-white btn btn-sm" href="#">Home</a>
    <ul class="nav justify-content-end ">
        <router-link to="/login"><li class="nav-item">
            <a class="nav active-link btn text-white">Login</a>
        </li>
    </router-link>
    <router-link to="/sign_up">
        <li class="nav-item ml-3">
            <a class="nav active-link btn text-white">Sign up</a>
        </li>
    </router-link>
    </ul>
       </nav>
    </div>
 
</template>
<script>
// import { parse } from 'path';
import { mapGetters } from 'vuex';
// import axios from 'axios';
export default {
name:'Nav-Component',
data:function(){
    return{
             product:[],
             allQuantity:0
    }
},
methods:{
    submitLogout(){
        localStorage.removeItem('token');
        this.$store.dispatch('user',null);
        this.$router.push('/login');
    },
    sumOfQuantityitem(quantity){
        this.allQuantity +=quantity;               
    },
},
computed:{

...mapGetters(['user','cart_store','total_quantity']),

}

}
</script>