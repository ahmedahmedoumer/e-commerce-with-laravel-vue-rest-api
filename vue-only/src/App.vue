<template>
 
  <Nav_Component />
  <router-view></router-view>
</template>

<script>
import axios from 'axios';
import Nav_Component from './components/Nav-Component.vue';
export default {
  name:'App',
  components:{
   Nav_Component,
  },
  
async created(){
    // console.log(localStorage.getItem('token'));
     await axios.get('/user',{
        headers:{
             Authorization:'Bearer '+ localStorage.getItem('token')
            }
     })
       .then(response=>{
        this.$store.dispatch('user',response.data);
      })
       .catch(()=>{this.$router.push('/login');});
   

     
},
}
</script>


