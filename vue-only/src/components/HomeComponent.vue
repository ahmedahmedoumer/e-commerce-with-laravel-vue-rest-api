<template>
    <div>
        <h3 v-if="user">
            hello {{ user.name }}   {{ user.email }} 
        </h3>
        <h3 v-if="!user">
            hello you are not logged in
        </h3>
    </div>
    
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: "HomeComponent",
    computed: {
        ...mapGetters([
            "user",
        ])
    },
    created() {
        this.$router.push("/home");
    },
}
</script>