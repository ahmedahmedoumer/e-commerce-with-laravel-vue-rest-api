<template>
  {{ user }}
  <Nav_Component />
  <router-view></router-view>
</template>

<script>
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
    ...mapGetters(['user'])
  }
}
</script>


