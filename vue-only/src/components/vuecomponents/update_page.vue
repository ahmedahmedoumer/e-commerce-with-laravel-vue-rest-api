<template>
  
    <div class="row">
        <div class="col-6">
    <form class="form-control btn-sm" @submit.prevent="submit_data" method="post">
    <input class="form-control" type="text" id="name"   v-bind:value="array_data.name"
    v-on:input="array_data.name = $event.target.value" >
    <input type="email" class="form-control" id="email" v-bind:value="array_data.email" v-on:input="array_data.email=$event.target.value" >
    <input type="submit" value="update" class="form-control btn-sm btn btn-primary" />
    </form>
</div>
</div>
    
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return{
          
            id:this.$route.params.id,
            array_data:{
            name:'',
            email:'',
            },
            data:[],
            form_data:[],
        }
       
    },
   async created(){
   
        await axios.get('http://localhost:8000/api/get/'+this.id)
        .then(response=>{
            this.form_data=response.data;
            console.log(this.form_data[0].name); })
        .catch(console.error());
        this.array_data.name=this.form_data[0].name;
        this.array_data.email=this.form_data[0].email;
    
    },
    methods: {
       async submit_data(){
           await axios.post('http://localhost:8000/api/update/'+this.id , this.array_data)
           .then(response=>{this.data=response.data});
           if(this.data.status===200){
            alert(" Congradulation successfully updated")
           }
        }
    },


}
</script>
<style>
form{
    width:50%,
}
</style>