<template>
    <div>
       
    </div>
</template>
<script>
import axios from 'axios';
export default {
  //   created() {
  //   console.log('Component has been created!');
  // },
  
    data() {
            return {
              users: null
            }},
name: 'HeadersButton',
methods: {
   async handler(){
    axios
      .get('http://localhost:8000/api/gettask')
      .then(response => {this.users = response;
        console.log(this.users);
      })
            },
            async create_data(){
              axios .post('http://localhost:8000/api/gettask')
              .then(response=>{this.data=response;
              })
            }
        },
    }
    // async handler(){
//   handler: {function() {
//     this.$http({
//         url: 'http://localhost:8000/api/gettask',
//         method: 'POST'
//     })
//       .then(function() {
//         console.log("true");
//             // You've already attached the section to the student, so you can safely assume this is ok
//             // this.reservations.push(section).
//         });
// }
    //     // const response=await fetch('http://localhost:8000/api/gettask');
    //     // this.data=await response.json();
    //             //    console.log("hello");
    // await fetch('http://localhost:8000/api/gettask')
    //     .then(response => {
    //         // alert(response.data);
    //         console.log(response.data)
    //     })
        
    
</script>