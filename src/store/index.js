import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    registeredUser: null,
  },
  getters: {
    isAuthenticated(state) {
      return !!state.registeredUser;
    },
  },
  mutations: {
    CHECK_USER(state, data) {
      state.registeredUser = data;
    },
    LOGOUT(state) {
      state.registeredUser = null;
    },
    SIGNUP(state, data) {
      state.users.push(data);
      state.registeredUser = data;
    },
  },
  actions: {
    signin(vuex, data) {
      const user = vuex.state.users.find((user) => {
        if (user.login === data.login && user.password === data.password) {
          return user;
        }
      });

      if (user) {
        vuex.commit("CHECK_USER", user);
        router.push("/");
      } else {
        alert("Login or password is wrong!!!");
      }

      // console.log(data);
    },
    signup(vuex, data) {
      vuex.commit("SIGNUP", data);
      router.push("/");
    },
    logout(vuex) {
      vuex.commit("LOGOUT");
      router.push("/signin");
    },
  },
  modules: {},
});
