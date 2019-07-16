import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state';
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state:state,
  mutations: {
    SET_ACTIVE_MENU(state,payload){
      Vue.set(state,'activeMenu',payload);
    }
  },
  actions:{
    async registerPatient({dispatch,commit},payload){
      console.log('test test test',payload);
      Axios.post('http://localhost:8081/patient',payload).then((res ) =>{
        console.log('res');
      }).catch(err => {
        console.log('error is : ',err)
      });
    }
  }
})
