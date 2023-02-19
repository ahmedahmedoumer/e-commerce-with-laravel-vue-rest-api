<template>
    <h3>Sign up Page</h3>
    <div class="container row border-top justify-content-center col-6" >
<form @submit.prevent="submitForm" method="post">
    <div class="form-group">
        <input type="text" class="form-control" id="" v-model="fullName" placeholder="full name">
    </div>
    <div class="form-group">
        <input type="email" class="form-control" id="" v-model="email" placeholder="Email">
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="" v-model="password" placeholder="Password">
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="" v-model="confirm_password" placeholder="Confirm password">
    </div>
    <div class="form-group">
        <input type="submit" value="Sign up" class="form-control btn btn-success btn-block">
    </div>
    <router-link to="reset" class="btn-primary" style="text-align:center; margin-left: 40%;"> Reset ?</router-link>
</form>
</div>
</template>
<script>
import axios from 'axios';
export default {

    data:function(){
        return{
            fullName:'',
            email:'',
            password:'',
            confirm_password:'',

        }
    },
    methods:{
        async submitForm(){
            const data={
                fullName:this.fullName,
                email:this.email,
                password:this.password,
                confirm_password:this.confirm_password,
            }
            await axios.post('http://localhost:8001/api/register',data);
            // .then(response=>{
            //     console.log("success"
            //     + response);
                this.$router.push('/login');
            //     if(response.status==422){
            //         console.log("this is valiadtion error")
            //     }
            //    })
            //    .catch(error=>{console.log( error);
            // });

            // console.log("hello sign up page");
        },
    }
}
</script>
<style>
form-control{
        width: 20px;
    }
</style>