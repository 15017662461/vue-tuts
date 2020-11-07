<template>
  <Upload multiple type="drag" 
  action="http://up.imgapi.com/" 
  :on-success="uploadSuccess" 
  :on-error="uploadFailed" 
  :data="multidata"
  :on-preview="preview"
  >
    <div style="padding: 20px 0">
      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
      <p>点击上传头像</p>
    </div>
  </Upload>
</template>

<script>
export default {
  name: "Settings",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    multidata(){
      return {
        Token:'fd9b5e3bbbbbb904b599cbd4326b758315d3a9a1:h4Gx6LY5BLXKeE70OykWUD0KRXw=:eyJkZWFkbGluZSI6MTYwNDcyNTI4OSwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzI4Nzg4IiwiYWlkIjoiMTcyNTg0MCIsImZyb20iOiJmaWxlIn0='
      }
    }
  },
  methods: {
    uploadSuccess(resp){
      this.$store.commit("updateAvatar",resp.linkurl);
    },

    uploadFailed(err){
      console.log(err)
    },

    preview(file){
      console.log(file)
    }
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style scoped>
</style>