<template>
  <div>
    <Frame></Frame>
  </div>
</template>

<script>
import Frame from '@/components/Frame/Frame.vue'
export default {
  name:'Admin',
  components:{
    Frame
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    if (!this.$store.state.user.isLogin) {
      this.$router.push("/login");
    }
  },
  mounted(){},
  updated(){},
  destroyed(){}
}
</script>
<style scoped>
</style>