import Vue from "vue";
import Vuex from "vuex";
import userStore from "./modules/user";
import blogStore from "./modules/blog";
import informationStore from "./modules/information";
import addressStore from "./modules/address";
import cgevStore from "./modules/cgevstore"
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userStore,
    blog: blogStore,
    information: informationStore,
    address: addressStore,
    cgev: cgevStore
  },
  getters,
});
