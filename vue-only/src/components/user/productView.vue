<template>
    <h1 v-if="!product">their is no product</h1>
    <div class="row">
    <div v-for="product in product" :key="product.id">
        <div class="col-4 m-1">
          <div class="card ">
            <div class="card-header">
              {{product.name}}
            </div>
            <div class="card-body">
              <img src="img/icons/safari-pinned-tab.svg" alt="product_image">
              <h5 class="card-title">{{"Unit Price : $"+product.unit_price}}</h5>
              <p class="card-text">
                {{ product.created_at }}
              </p>
              <input type="number" min="1"  :name="product.name+product.id" :id="product.id" class="form-control" placeholder="enter quantity">
              <a href="#" class="btn btn-primary" @click="carttobag([product.id,product.unit_price])">cart to bag</a>
            </div>
          </div>
        </div>
      </div>
    
  </div>
    
   
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
name:'productView',
data:function(){
     return{
        data:{},
     }
},
methods:{
  carttobag(data){
        var quantity=document.getElementById(data[0]).value;
        quantity=parseInt(quantity);
     
        this.$store.commit('cart_store', {
          id:data[0],
          quantity:quantity,
          price:data[1]
        });

  }
},
computed:{
    
    ...mapGetters(['product'])
},

async mounted(){
    await axios.get('/getProduct')
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