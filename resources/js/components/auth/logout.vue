<template>
  <div>
      
  </div>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('destroyToken')
        .then(response =>{
            this.$router.push({name: 'login'});
            this.$Message.warning({
                background: true,
                content: 'Logout Success'
            });
    })
        
    }
}
</script>

<style>

</style>