import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: null,
  },
  mutations: {
    SET_ACTIVE_MENU(state,payload){
      Vue.set(state,'activeMenu',payload);
    }
  },
  actions: {

  }
})
