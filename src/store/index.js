import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userActive: "",
    users: [],
    user: null,
    showRegister: false,
    showMsgProfile: true,
  },
  getters: {},
  mutations: {
    addUsers: (state) => {
      state.users = [state.user, ...state.users];
      // localStorage.setItem("asd", JSON.stringify(state.users));
    },
  },
  actions: {
    addUserAction(context) {
      context.commit("addUsers");
    },
    addNewProfile(context) {
      context.commit("showRegistred");
    },
  },
  modules: {},
});
