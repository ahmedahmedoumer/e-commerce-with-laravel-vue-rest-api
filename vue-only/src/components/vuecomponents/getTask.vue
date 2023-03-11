<template>
    <div>
        <!-- <button  @click="getuser">get</button>
        <button  @click="show_submit_form"> create </button>
        <button  @click="update"> update</button>
        <button   @click="delete_data"> delete</button> -->
            <button class="pr-5 fa fa-align-center text-dark" @click="getuser">get</button>
            <button class="m-5  text-dark" @click="show_submit_form"> create </button>
            <button class="pr-5  text-dark fa fa-align-center" @click="update"> update</button>
            <button  class="m-5  text-dark" @click="delete_data"> delete</button> 
    </div>
</template>
<script>
export default {
name:'getTask',
data:function(){
    return{
        display:false,
    }
},
methods:{
    getuser(){
        console.log('this get user');
    },
    show_submit_form(){
        this.display=true;
        this.$emit('clicked',this.display);
        //  console.log(this.display);
    } ,
    ahmmedin(){
    console.log("ahmedin");
  }
}
}

</script>

<style>
button {
    background-color: rgb(243, 247, 243); 
    color: rgb(2, 0, 0);
    text-decoration-color:black;
    text-decoration-style: bold;
}
</style>