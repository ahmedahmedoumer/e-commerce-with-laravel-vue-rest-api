<template>
  <div class="container">
  <div class="row">
    <div class="col-2">
<ul class="list-group  bg-black text-xs text-white">
  <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
</svg></li>

  <li class="list-group-item  bg-black text-xs text-white"><router-link to="/admin/homeee" >Dashboard</router-link></li>
  <li class="list-group-item  bg-black text-xs text-white"><router-link to="/admin/show-users" >Users</router-link></li>
  <li class="list-group-item  bg-black text-xs text-white"><router-link to="/admin/product-adding" >Add product</router-link></li>
  <li class="list-group-item  bg-black text-xs text-white"><router-link to="/admin/generating-report" >Report</router-link></li>
</ul>
    </div>
    <div class="col-10">
      <NavComponentVue/>
      <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
    
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import NavComponentVue from '@/components/admin/adminHome.vue';
// import axios from 'axios';
export default {
name:'adminNavBar',
components:{
  NavComponentVue,
},
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