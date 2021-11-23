import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      isLogin: false,
      accessToken: "",
      userInfo: {
        nickName: "",
        avatar: "",
      },
    };
  },
  mutations: {
    login(state, payload) {
      state.isLogin = true;
      state.accessToken = payload.accessToken;
      state.userInfo.nickName = payload.user.nickName;
      state.userInfo.avatar = payload.user.avatar;
    },
    logout(state) {
      state.isLogin = false;
      state.accessToken = "";
      state.userInfo.nickName = "";
      state.userInfo.avatar = "";
    },
  },
  plugins: [createPersistedState()],
});

export default store;
