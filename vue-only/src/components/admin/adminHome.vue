<template>
  <div>
   <nav v-if="user && isAdmin=='admin'" class="navbar navbar-light bg-light text-dark "   >
      <router-link to="/home" active-class="bg-dark text-white">
      <button class="navbar-brand btn btn-sm" href="#">Home</button>
       </router-link>
      <ul class="nav justify-content-end ">
          
          <router-link to="/product" active-class="bg-dark text-dark">
          <li class="nav-item text-dark btn btn-sm">products</li>
          </router-link>
          <router-link to="/profile" active-class="bg-dark text-white">
              <li class="nav-item btn btn-sm " >Profile</li>
          </router-link>
              <li>
              <button class="nav active-link btn-sm" href="javascript:void(0)" @click="submitLogout">Logout</button>
              </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
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

...mapGetters(['user','isAdmin','cart_store','total_quantity']),

}

}
</script>