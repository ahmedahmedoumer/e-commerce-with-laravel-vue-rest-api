<template>
    <div class="margin">
    <h3>Sign up Page</h3>
    <div class="container row border-top justify-content-center col-6" >
<form @submit.prevent="submitForm" method="post">
    <div class="form-group">
        <input type="text" class="form-control" id="name" v-model="fullName" placeholder="full name">
    </div>
    <div class="form-group">
        <input type="email" class="form-control" id="email" v-model="email" placeholder="Email">
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="confirm_password" v-model="confirm_password" placeholder="Confirm password">
    </div>
    <div class="form-group">
        <input type="submit" value="Sign up" class="form-control btn btn-success btn-block">
    </div>
    <router-link to="reset" class="btn-primary" style="text-align:center; margin-left: 40%;"> Reset ?</router-link>
</form>
</div>
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
            await axios.post('/register',data);
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
<style scoped>
form-control{
        width: 20px;
        border: 2px,solid;
    }
.margin{
        margin-left: 15%;
        margin-top: 5%;
    }
</style>