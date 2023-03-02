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
.dev-run-preview .dev-run-preview-edit {
  display: none;
}
/* .ivu-layout-sider {
} */
</style>
<template>
  <div class="layout">
    <Sider
      :style="{
        position: 'fixed',
        height: '100vh',
        left: 0,
        overflow: 'auto',
      }"
    >
      <Menu theme="dark" width="auto" :open-names="['1']">
        <Submenu
          v-for="(menus, index) in subMenus"
          :name="menus.name"
          :key="menus.name"
        >
          <template #title>
            <Icon type="ios-navigate"></Icon>
            {{ menus.title }}
          </template>
          <MenuItem
            v-for="(item, index) in menus.children"
            :name="item.name"
            :to="item.path"
            :key="index"
            >{{ item.title }}</MenuItem
          >
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{ marginLeft: '200px' }">
      <Header
        :style="{
          background: '#fff',
          boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
        }"
        ><div :style="{ display: 'flex', justifyContent: 'flex-end' }">
          <a href="javascript:;" @click="toLogin">登录</a>
        </div>
      </Header>
      <Content :style="{ padding: '0 16px 16px' }">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
  {{ a }}
</template>
<script>
import { commonRoutes } from "../router";
export default {
  data: function () {
    return {
      subMenus: commonRoutes
        .find((router) => {
          return router.path === "/";
        })
        .children.map((child) => ({
          path: child.path,
          name: child.name,
          title: child.title,
          children: child.children
            ? child.children.map((child) => ({
                path: child.path,
                name: child.name,
                title: child.title,
              }))
            : [],
        })),
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
