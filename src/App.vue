<template>
  <div id="app">
    <router-view v-if="isLoginPage"></router-view>
    <Frame v-else></Frame>
  </div>
</template>

<script>
import Frame from '@/components/Frame/Frame.vue'
export default {
  name: 'app',
  components: {
    Frame
  },
  computed:{
    isLoginPage(){
      // console.log(this.$route)
      return this.$route.path.includes('/login') || this.$route.path.includes('/404')
    }
  },
  mounted(){
    this.$store.dispatch("getNotifications")
    // console.log(this.$store.getters.notificationsCount)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
