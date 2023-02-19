<template>
    <div>
        <p class="form-control bg-light text-black " >
            <router-link  active-class="nav_active" class="pr-5  " to="/get">get</router-link>
            <router-link  active-class="nav_active" class="m-5 " to="/create"> create </router-link>
            <router-link  active-class="nav_active" class="pr-5  fa fa-align-center" to="/"> update</router-link>
            <router-link  active-class="nav_active" class="m-5  " to="/"> delete</router-link>
            <!-- <router-link class="pr-5 fa fa-align-center text-dark" aria-hidden="true" to="/">Home</router-link>
            <router-link class="m-5  text-dark" to="/about">About</router-link>
            <router-link class="pr-5  text-dark fa fa-align-center" to="/">Home</router-link>
            <router-link class="m-5  text-dark" to="/about">About</router-link>
            <router-link class="pr-5  text-dark fa fa-align-center" to="/">Home</router-link>
            <router-link class="m-5  text-dark  link-black" to="/about">About</router-link> -->
        </p>
        <update_page/>
        <router-view></router-view>
    </div>
</template>
<script>
import getTask from '@/components/getTask';
import update_page from './update_page.vue';
export default {
    component:{
        getTask,
        update_page,
    },
        data:function(){
            return{
                display:true,
            }
        },
}
</script>
<style>
p{
    margin: 2px;
    padding: 2%;
    color: black;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.nav_active{
    background-color: white;
    color:green;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
    font-weight: bold;
    font-size: 25px;



}
</style>