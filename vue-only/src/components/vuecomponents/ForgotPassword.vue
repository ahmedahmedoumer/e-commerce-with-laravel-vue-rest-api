<template>
    <div class="auto-rapper">
        <div class="auto-inner">
        <form action="" method="post">

            <div class="form-group">
                <div class="col-6">
                <input type="email" class="form-control col-6" name="email" 
                v-model="email" placeholder="enter email">
                <input type="submit" value="submit" class="btn btn-primary btn-block"/>
            </div>
            </div>
        </form>
    </div>
</div>
</template>
<script>
export default {
    name:'ForgotPassword',

}
</script>