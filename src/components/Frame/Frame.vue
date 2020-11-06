<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="side1"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <Menu
          :active-name="$route.path"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
          :style="{marginTop:'50px'}"
        >
          <MenuItem name="/admin/dashboard" to="/admin/dashboard">
            <Icon type="ios-compass" />
            <span>仪表盘</span>
          </MenuItem>
          <MenuItem name="/admin/article"  to="/admin/article">
            <Icon type="ios-list-box-outline" />
            <span>文章列表</span>
          </MenuItem>
          <MenuItem name="/admin/settings"  to="/admin/settings">
            <Icon type="ios-settings"></Icon>
            <span>设置</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{ padding: 0 }" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{ margin: '0 20px' }"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content
          :style="{ margin: '20px', background: '#fff', minHeight: '260px' }"
        >
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "Frame",
  components: {},
  props: {},
  data() {
    return {
      isCollapsed: false,
    };
  },
  watch: {},
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
  },
  created() {},
  mounted() {},
  updated() {
    this.$nextTick(()=>{
      
    })
  },
  destroyed() {},
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>