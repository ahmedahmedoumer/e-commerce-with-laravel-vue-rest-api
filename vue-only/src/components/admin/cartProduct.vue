<template>
    
<div class="container" style="margin-left: 5%;">
    
     <div v-if="response_data">
           <div class="alert alert-primary" role="alert">
            {{"you are successfully pay out. Thank You !!"}}
          </div>
     </div>
    <div v-if="cart_store.length<=0">
        <h3> your bag is Empty</h3>
    </div>
    <h2 v-else>  products in your bag</h2>
   <div v-for="(item ,i) in cart_store" :key="i" >
  <div class="btn-sm">
   
    {{"product id :"+ item.id }} <br>
    {{"Quantity  :"+ item.quantity }} <br>
    {{ "per product =    "+  item.price }}
  </div>
  <input type="button" class="btn btn-danger" value="remove from cart" @click="removeCart(item.id)" >
   </div>
      <h3 v-if="cart_store.length!=0">{{ "total price = $" + total_price }}</h3>
<div v-if="cart_store.length!=0">
   <input  type="button" value="Pay Out" class=" btn btn-success col-4" @click="payout()">
</div>
</div>
      
</template>
<script>
import store from '@/store';
import axios from 'axios';
import { mapGetters } from 'vuex'
export default {
    name:'cartProduct',
    data:function(){
        return{
         response_data:'',
          userData:[],
          dataNull:null,
        }
    },
    computed:{
        ...mapGetters(['product','cart_store','total_price'])
    },

    methods: {
        removeCart(id){
            this.$store.commit('removeCart',{id});
        },
        async payout(){
            await axios.post('http://localhost:8001/api/PayOut',[
            store.state.user,
            store.state.cart_store,
            store.state.total_price
            ])
            .then(response =>{
                if(response.status===200){
                    this.response_data=response.status;
                    this.$store.commit('setnullcartstore',null);
                }
                });
        }
    },

    
}

</script>