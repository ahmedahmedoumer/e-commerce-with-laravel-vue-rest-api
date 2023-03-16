<template>
  <div>
   <nav v-if="user && isAdmin=='admin'" class="navbar navbar-light bg-light text-dark "   >
      <router-link to="/admin/home" active-class="bg-dark text-white">
      <button class="navbar-brand btn btn-sm" href="#">Home</button>
       </router-link>
      <ul class="nav justify-content-end ">
          
          <router-link to="/admin/show/users" active-class="bg-dark text-dark">
          <li class="nav-item text-dark btn btn-sm">Users</li>
          </router-link>
          <router-link to="/admin/view/customers" active-class="bg-dark text-dark">
          <li class="nav-item text-dark btn btn-sm">Customers</li>
          </router-link>
          <router-link to="/admin/show/orders" active-class="bg-dark text-dark">
          <li class="nav-item text-dark btn btn-sm">Orders</li>
          </router-link>
          <router-link to="/admin/show-available/product" active-class="bg-dark text-dark">
          <li class="nav-item text-dark btn btn-sm">products</li>
          </router-link>
          <router-link to="/admin/make-reports/report" active-class="bg-dark text-dark">
          <li class="nav-item text-dark btn btn-sm">Reports</li>
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
name:'adminHome',
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