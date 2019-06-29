import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "kibart-app",
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    status: "",
    basiclinks: [
      {
        title: "home",
        path: "/",
        icon: "home"
      },
      {
        title: "about",
        path: "/about",
        icon: "info"
      }
    ]
  },
  getters: {
    status(state) {
      return state.status;
    },
    basiclinks(state) {
      return state.basiclinks;
    }
  },
  mutations: {
    SET_STATUS(state, payload) {
      state.status = payload;
    }
  }, // end-mutations
  actions: {
    setStatus: ({ commit, state }, newStatus) => {
      commit("SET_STATUS", newStatus);
      return state.status;
    }
  }, // end-actions
  plugins: [vuexPersist.plugin]
});
