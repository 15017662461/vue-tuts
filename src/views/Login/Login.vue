<template>
  <Row >
    <Col span="12" offset="5"
      ><Card :style="{marginTop:'150px'}"
        >
        <template slot="title">
          <h2>登录</h2>
        </template>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="formInline.password"
              placeholder="Password"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="toLogin"
              >Signin</Button
            >
          </FormItem>
        </Form></Card
      ></Col
    >
  </Row>
</template>

<script>
import {login} from '@/network/login.js'
import {mapState} from 'vuex'
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 3,
            message: "The password length cannot be less than 3 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {
    isLogin(newVal,oldVal){
      console.log(1)
      if(newVal == true){
        this.$router.push('/admin/dashboard')
      }
    }
  },
  computed: {
    isLogin(){this.$store.state.user.isLogin}
  },
  methods: {
    toLogin(){
      const user = this.formInline.user;
      const password = this.formInline.password
      this.$store.dispatch("login",{user,password})
      .then(() => {
        this.$router.push('/admin/dashboard')
      })
    }
  },
  created() {
    if(this.$store.state.user.isLogin){
      this.$router.push('/admin/dashboard')
    }
  },
  mounted() {},
  updated() {
    if(this.isLogin){
      this.$router.push('/admin/dashboard')
    }
  },
  destroyed() {},
};
</script>
<style scoped>
</style>