<template>
    <h1 v-if="!product">their is no product</h1>
    
    <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Detail</th>
            <th scope="col">created_at</th>
            <th scope="col">updated_at</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in product" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.detail }}</td>
                <td>{{ product.created_at }}</td>
                <td>{{ product.updated_at }}</td>
          </tr>
        </tbody>
    </table>
 
   
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
name:'productView',
data:function(){
     return{
        data:{
            id:'',
            name:'',
            detail:'',
            created_at:'',
            updated_at:'',
        },
     }
},
computed:{
    
    ...mapGetters(['product'])
},

async mounted(){
    await axios.get('http://localhost:8001/api/getProduct')
           .then(response=>{ this.data=response.data.product;
            this.$store.dispatch('product',this.data);
        });
          
              
},
    //  computed:{
      
    //         ...mapGetters(['product']), 
    // }

}
</script>
<style>
</style>