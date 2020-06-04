<template>
  <div class="auth_dashboard_main">
    <router-link :to="{name: 'logout'}" class="btn btn-sm btn-success">Logout</router-link>
      <h3>welcome {{userInfo.name}}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo(){
       return this.$store.getters.userInfo;
    }
  },
  mounted () {
    this.$store.dispatch('retriveUser');
  }
}
</script>

<style>
  .auth_dashboard_main{
    width: 100%;
    text-align: center;
  }
</style>