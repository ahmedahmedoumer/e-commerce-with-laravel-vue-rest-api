<template>
<div class="container" style="margin-left: 5%;">
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
      <h3>{{ "total price = $" + total_price }}</h3>
   <input type="button" value="Pay Out" class=" btn btn-success col-4" @click="payout()">
</div>
      
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'cartProduct',


    computed:{
        ...mapGetters(['product','cart_store','total_price'])
    },

    methods: {
        removeCart(id){
            this.$store.commit('removeCart',{id});
        },
        payout(){
            this.$store.commit('Payout',4);
        }
    },

    
}

</script>