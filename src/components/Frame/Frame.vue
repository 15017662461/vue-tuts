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
          :style="{ marginTop: '50px' }"
        >
          <MenuItem name="/admin/dashboard" to="/admin/dashboard">
            <Icon type="ios-compass" />
            <span>仪表盘</span>
          </MenuItem>
          <MenuItem name="/admin/article" to="/admin/article">
            <Icon type="ios-list-box-outline" />
            <span>文章列表</span>
          </MenuItem>
          <MenuItem name="/admin/settings" to="/admin/settings">
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
          <Dropdown
            :style="{ float: 'right', marginRight: '80px' }"
            @on-click="dropDownClick"
          >
            <Avatar :src="this.$store.state.user.avatar" />
            <span>欢迎您！{{ this.$store.state.user.displayName }}</span>
            <Badge
              :count="notificationCount"
              :offset="[13, 5]"
              overflow-count="10"
              ><Icon type="ios-arrow-down"></Icon
            ></Badge>
            <DropdownMenu slot="list">
              <DropdownItem name="/admin/notifications"
                ><Badge :dot="Boolean(notificationCount)"
                  >通知中心</Badge
                ></DropdownItem
              >
              <DropdownItem name="/admin/settings">个人设置</DropdownItem>
              <DropdownItem name="/login">退出登录</DropdownItem>
            </DropdownMenu></Dropdown
          >
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
    notificationCount() {
      return this.$store.getters.notificationsCount;
    },
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },

    dropDownClick(name) {
      // console.log(name)
      if (name === "/login") {
        this.$store.commit("toLogout");
        console.log(this.$store.state.user);
      }
      if (!this.$route.path.includes(name)) {
        this.$router.push(name);
      }
    },
  },
  created() {
    if (!this.$store.state.user.isLogin) {
      this.$router.push("/login");
    }
  },
  mounted() {},
  updated() {
    this.$nextTick(() => {});
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