import { rejectError } from '@/helpers'

export const state = {
  items: [],
  item: {},
  activeItem: {},
  count: 0,
}

const base = 'pokemon'

export const getters = {
  pokemons: (state) => {
    return state.items
  },
  pokemon: (state) => {
    return state.item
  },
}
export const actions = {
  fetchPokemons({ state, commit }, options = { reset: true }) {
    if (options.reset) {
      commit('setItems', { resource: 'pokemon', items: [] }, { root: true })
    }

    return this.$axios
      .$get(`${base}?${options.limit ? `&limit=${options.limit}` : ''}`)
      .then((res) => {
        const { results, count } = res
        commit('setCount', count)
        commit(
          'setItems',
          { resource: 'pokemon', items: results },
          { root: true }
        )
        return state.items
      })
      .catch((err) => {
        return rejectError(err)
      })
  },
  fetchPokemon({ state, commit }, name) {
    commit('setItem', { resource: 'pokemon', item: {} }, { root: true })
    return this.$axios
      .$get(`${base}/${name}`)
      .then((res) => {
        const data = res
        commit('setItem', { resource: 'pokemon', item: data }, { root: true })
        return state.item
      })
      .catch((err) => rejectError(err))
  },
}

export const mutations = {
  setCount(state, count) {
    return (state.count = count)
  },
}
