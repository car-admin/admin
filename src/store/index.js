import { createStore } from "vuex";

const store = createStore({
  state: {
    isShowLoading: false, // 全局 loading
    // 左侧菜单栏数据
  },
  mutations: {
    setMenus(state, items) {
      state.menuItems = [...items];
    },
    setLoading(state, isShowLoading) {
      state.isShowLoading = isShowLoading;
    },
  },
});

export default store;
