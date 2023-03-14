<template>

        <nav class="navbar navbar-light bg-light text-dark ml-auto " v-if="user && isAdmin=='admin'">
        <router-link to="/home" active-class="bg-dark text-white">
        <a class="navbar-brand btn btn-sm" href="#">Home</a>
         </router-link>
        <ul class="nav justify-content-end ">
            <router-link to="/profile" active-class="bg-dark text-white">
                <li class="nav-item btn btn-sm " >Profile</li>
            </router-link>
                <li>
                <a class="nav active-link btn-sm" href="javascript:void(0)" @click="submitLogout">Logout</a>
                </li>
        </ul>
      </nav> 
    
</template>
<script>
import { mapGetters } from 'vuex';
// import axios from 'axios';
export default {
name:'adminNavBar',
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

...mapGetters(['user','isAdmin','cart_store','total_quantity']),

}

}
</script>
<style scoped>
.sidebar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 60px;
}
  
.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  padding: 10px 20px;
}

.sidebar a {
  display: block;
  color: #000;
}

.sidebar a:hover {
  color: #fff;
  background-color: #000;
}

@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
}
</style>