<template>
      <NavComponentVue/>
        <router-view></router-view>
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