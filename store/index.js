import Vue from 'vue';
import Vuex from 'vuex'
import getters from './getters'
import view from './modules/view'
import tagsView from './modules/tagsView'
import user from './modules/user'
import index from './modules/index'
/* import api from '@/plugins/api' */
Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    modules: {
      view,
      tagsView,
      user,
      index
    },
    getters,
    actions: {
      async nuxtServerInit({ commit }, { req, app }) {
        try {
          /* const { status, data: { code, userInfo } } = await api.getUser();
          const data = (status === 200 && code === 0) ? userInfo : null;
          commit('setUserInfo', data); */
        } catch (err) {
          console.log(err)
        }
      }
    },
  })
}

export default store