<template>
    <div>
<table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Email</th>
      <th scope="col">created at</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="users in allUserData" :key="users.id">
      <td>{{users.id}}</td>
      <td>{{users.name}}</td>
      <td>{{ users.email}}</td>
      <td>{{users.created_at}}</td>
    </tr>
  </tbody>
</table>
</div>  
</template>
<script>
import { mapGetters } from 'vuex';

export default{
    name:'showUsers',

    created(){
        this.$store.dispatch('fetch');
    },
    computed:{
        ...mapGetters(['allUserData'])
    }

}

</script>