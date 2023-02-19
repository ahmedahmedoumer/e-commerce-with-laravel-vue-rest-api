<template>
   
    <div v-if="array_data" class="mt-5 mb-2" style="font-family: 'Times New Roman', Times, serif;">
        <h1> this is The get Page !! </h1>
        <!-- <h1  v-text="array_data"></h1> -->
        <table class="btn-sm" border="1">
            <tr border="1" class="bg-black text-white">
                    <td>No</td>
                    <td>Name</td>
                    <td>email</td>
                    <td>Date</td>
                    <td>Action</td>
            </tr>
            <template v-if="isloading">
                <tr>
                    <h2>
                       <div class="spinner-border mx-1 my-1" role="status">
                         <span class="sr-only" ></span>
                       </div>
                       </h2>
                       <span class="my-1 text-primary" v-text="loading_text"></span>
                    
                </tr>
            </template>
                <tr  v-for="item in array_data " v-bind:key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.created_at }}</td>
                    <router-link :to="'/update/' + item.id">
                     <td class="btn btn-primary btn-sm" >update</td>
                    </router-link>
                    <!-- <router-link :to="'delete/'+item.id"> -->
                      <td class="btn btn-danger btn-sm" @click="ahmedinz(item.id)">delete</td>
                    <!-- </router-link> -->
                </tr>
        </table>
        <router-view></router-view>
    </div>

</template>
<script>
import axios from 'axios'
// import { response } from 'express';
export default {
    data:function(){
        return{
            isloading:true,
            loading_text:"LOADING....",
        array_data:[],
        delete_data:[]
        }
    },
    async created(){
             while(this.isloading==true){
               this.loading_text="LOADING.....";
       
        const check= await axios.get('http://localhost:8000/api/view_data');
             this.array_data=check.data;
             console.log(this.array_data);

              if(this.array_data){
            this.isloading=false;
        }
        }
    },
    methods: {
       
        async ahmedinz(id){
            console.log("hello"+id);
            if(confirm("do you want to delete")){
            await axios.get("http://localhost:8000/api/delete_data/"+id)
            .then(response=>{this.delete_data=response})
            .catch(error=>{console.log(error)});
            this.array_data=this.delete_data.data;
            console.log(this.array_data);
        }

        //     this.delete_data=ahmed.response.data;

        //    if(ahmed.status===200){
        //     console.log("successfully deleted");
        //    }

        },
        update_data(id){
              this.$emit('id',id);
        },
    },

}
</script>
<style>
td{
    padding: 5px;
    margin:5px;
}
</style>