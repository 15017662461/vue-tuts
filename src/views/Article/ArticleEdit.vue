<template>
  <div>
    {{$route.query.id}}
  </div>
</template>

<script>
import {getArticle} from '@/network/article.js'
export default {
  name: "ArticleEdit",
  components: {},
  props: {},
  data() {
    return {
      id:this.$route.query.id
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    getArticle(this.id).then(resp => {
      console.log(resp)
    })
  },
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
<style scoped>
</style>