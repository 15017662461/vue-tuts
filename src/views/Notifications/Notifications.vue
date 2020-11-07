<template>
  <Card :style="{padding:'15px'}">
    <Button slot="title" @click="toReadAll" :loading="isLoading" :disabled="isAllRead" type="primary" :style="{position:'absolute',right:'30px',top:'5px'}">全部标记为已读</Button>
    <List>
        <ListItem v-for="(item,index) in lists" :key="index"> 
          <ListItemMeta :title="item.title" :description="item.desc" />
          <template slot="action" v-if="!item.hasRead">
            <Badge dot><Button @click="clickToRead(item.id)" :loading="isLoading">标记为已读</Button></Badge>
          </template>
        </ListItem>
    </List></Card
  >
</template>

<script>

export default {
  name: "Notifications",
  components: {},
  props: {},
  data() {
    return {
      isLoading:false
    };
  },
  watch: {},
  computed: {
    isAllRead(){
      return this.lists.every(item => {
        return item.hasRead === true
      })
    },
    lists(){
      return this.$store.state.notifications.lists
    }
  },
  methods: {
    clickToRead(id){
      this.isLoading = true;
      this.$store.dispatch("markRead",id).then(() => {
        // console.log(1)
        this.isLoading = false;
      });
    },

    toReadAll(){
      this.isLoading = true;
      this.$store.dispatch("markReadAll").then(() =>{
        this.isLoading = false;
      })
    }
  },
  created() {
    
  },
  mounted() {
    console.log(this.$store.state)
  },
  updated() {},
  destroyed() {},
};
</script>
<style scoped>
</style>