<template>
    <div class="container form-control">
        <form method="POST" @submit.prevent="submit_form" :class="{ 'disable-interaction' : submitted }">
          <div class="row col-6 mt-5" ></div>
            <div class="row">
            <div class="col-6">
                <input class=" form-control text-sm" placeholder="user name" type="text" name="name" v-model="user_form.name" >
                <div v-if="feedback"><span class="btn btn-danger" v-text="feedback.name"></span></div>
             <!-- <input type="text" class="form-control mt-4"  v-model="user_form.name" placeholder="user name"> -->
            </div>
        </div>
        <div class="row">
            <div class="col-6">
             <input type="text" class="form-control " name="email" v-model="user_form.email" placeholder="email">
             <div v-if="feedback"><span class="btn btn-danger" v-text="feedback.email"></span></div>
            </div>
        </div>
         <input type="submit" class="btn btn-success m-10" >
        </form>
        </div>
   
</template>
<script>
import axios from 'axios';
export default {
    props:{
        message: String,
        id:String,
    },
    name:'submit_forms',
data: function(){
    return{
        // submit_form_checker:this.message,
        submitted:false,
        feedback:null,
        error_data:'',
        user_form:{
            name:'',
            email:'',
        },
        check:String,
        status_code:'',
    }
   
},
methods:{
   
    async submit_form(){
       this.submmitted=true;
       await axios.post('http://localhost:8000/api/create',this.user_form)
       .then(response=>{this.check=response})
       .catch(error=>{this.feedback=error.response.data.errors});
        if(this.check.status===200){
            // this.$swal("successfully inserted ");
            alert(this.check.data);
        }
        //  else{

        //     alert("failed !!");
        // }
        // .catch(error => {
        //   this.feedback = error.response.data.errors;
        //  });
        // else if(this.check.status==422){
        //     alert("hell0");
        //     // this.error_data=this.check.response.data;
        //     console.log("hello");
        //     // console.log(this.check.response.data.errors.message);
        // }
        // else{
        //     // console.log("failed !!")
        //     alert("failed !!")
        // }
        // .catch(error => {
        //         this.errors = error.response.data.errors;
        //         // console.log(this.errors);
        //     })

        }
}
}
</script>
<style>
input{
    padding: 2px;
    margin: 1%;
}
input[type=submit]{
  
}
</style>