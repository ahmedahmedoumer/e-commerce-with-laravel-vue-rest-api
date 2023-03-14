<template>
    <div>

        <!-- </div> -->

    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card border-0 shadow">
                    <div class="card-body p-5">
                        <h3 class="mb-4">Login</h3>
                        
                            <div class="mb-3">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" v-model="data.email" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" v-model="data.password" id="password" name="password" required>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-block" v-on:click="submitAdminLogin">Login</button>
                            </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default{
    name:'adminLogin',
    data:function(){
        return{
            data:{
            email:'',
            password:'',
            }
        }
    },
    methods:{
       async submitAdminLogin(){
            await axios.post('/admin/login',this.data)
            .then(response=>{ 
                // console.log(response.data.user);
                // console.log(response.data.isAdmin);
                // console.log(response.data.token);
                localStorage.setItem('token',response.data.token);
                this.$store.dispatch('user',response.data.user);
                this.$store.dispatch('isAdmin',response.data.isAdmin);
                this.$router.push('/admin/home');
               })
           .catch(error=>{console.log(error);
            //   this.$router.push('/admin');
        });
        }
    },
    computed:{
        ...mapGetters(['user']),
    }
}
</script>
