<template>
  <!-- <div v-if="isAdmin=='user' || isAdmin==null ">
        <Nav_Component />
  </div> -->
  <Nav_Component />
    <router-view></router-view>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import Nav_Component from './components/Nav-Component.vue';
import './main.js'
export default {
  name:'App',
  data:function(){
       return {
        url:window.location.pathname,
       }
  },
  components:{
   Nav_Component,
  },
  computed:{
    ...mapGetters(['isAdmin','user']),
  },
  async created(){
    await axios.get('/user',{
    Headers:{
      'Authorization':'Bearer'+localStorage.getItem('token'),
  }}).then(response=>{
     this.$store.dispatch('user',response.data.user);
     this.$store.dispatch('isAdmin',response.data.isAdmin);

  });

  }
}
</script>


