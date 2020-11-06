<template>
  <Card :style="{padding:'15px'}">
    <Button slot="title" @click="toReadAll" :disabled="isAllRead" type="primary" :style="{position:'absolute',right:'30px',top:'5px'}">全部标记为已读</Button>
    <List>
        <ListItem v-for="(item,index) in lists" :key="index"> 
          <ListItemMeta :title="item.title" :description="item.desc" />
          <template slot="action" v-if="!item.hasRead">
            <Badge dot><Button @click="clickToRead(item)">标记为已读</Button></Badge>
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
    clickToRead(item){
      this.lists.forEach(i => {
        if(i.id === item.id){
          i.hasRead = true;
        }
      })
    },

    toReadAll(){
      this.lists.forEach(item => {
        item.hasRead = true;
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