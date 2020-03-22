import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: '苏州'
  },
  actions: {
    changeCity (context, city) {
      context.commit('changeCityMutation', city)
    }
  },
  mutations: {
    changeCityMutation (state, city) {
      state.city = city
    }
  }
})
export default store
