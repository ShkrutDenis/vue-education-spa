import Vue from "vue";
import Vuex from "vuex";

import postsState from "./post"

Vue.use(Vuex);

const modules = {
  posts: postsState
}

export default new Vuex.Store({
  modules
});
