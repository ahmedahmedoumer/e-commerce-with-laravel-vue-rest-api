<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

    <div class="container border-top">
        <div ><i class="bi bi-box-arrow-in-right"></i></div>
            <form  method="post" @submit.prevent="loginUser">
                <div class="row">
                    <div class="col-6">
                       <input type="email" name="email" v-model="user_data.email" id="email" class="form-control" placeholder="Enter Email">
                       <input type="password" name="password" v-model="user_data.password" id="password" class="form-control" placeholder="Enter Password">
                    </div>
                </div>
                <div class="row col-6">
                    <input type="submit" class="btn btn-primary" value="Login">
                    <input type="text" name="create_account" id="create_account" class="btn btn-success" value="Create Account">
                    <p class="forgot-password text-right">
                        <router-link to="/ForgotPassword"> forgot Password</router-link>
                        {{ message}}
                    </p>
                </div>
            </form>
                
    
        
    </div>
</template>
<script>
// import { response } from 'express';
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
    name:'Login-page',
    data:function(){
        return{
            data:'',
            user_data:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        async loginUser(){
            await axios.post('http://localhost:8001/api/login',this.user_data)
            .then(response=>{
                localStorage.setItem('token',response.data.token);
                  this.$store.dispatch('user',response.data.user);
                     this.$router.push('/home');

                        })
              .catch(error=>{console.log(error)});
        }
         
    },
    computed:{
                  ...mapGetters({
                    'message':'dinz'
                  })
    },
}
</script>
<style>
   .submit{
    margin-left: 2%;
    padding-right: 2%;
   }
   i{
    font-size:100px;
    margin-left: 20%;
    margin-bottom: 4px;
   }
   div.conainer{
    margin-bottom: 10px;
   }
   input{
    margin-bottom: 2%;
   }
   input[type=submit]{
      margin-top: 8%;
   }
   ul{
    font-size: medium;
     color:black;
     margin:2%;
   }
   li{
    padding-block-end: 2px;
    color: black;
    margin-left:10px;
    font-size: 15px;
   }
</style>