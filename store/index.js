import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  setItems(state, { resource, items }) {
    state[resource].items = items
  },
  setItem(state, { resource, item }) {
    state[resource].item = item
  },
  addItemToArray(state, { item, index, resource }) {
    Vue.set(state[resource].items, index, item)
  },
}
