<template>
        <div>
            <input type="text" v-model="this.data.username" id="username">
            <input type="text" v-model="this.data.password" id="password">
            <input type="submit" value="login" @click="submitAdminLogin">
        </div>
</template>
<script>
import axios from 'axios';
export default{
    name:'adminLogin',
    data:function(){
        return{
            data:{
            username:'',
            password:'',
            }
        }
    },
    methods:{
       async submitAdminLogin(){
            console.log(this.username+"  "+this.password);
            await axios.post('/admin/login',this.data);
        }
    },
}
</script>
