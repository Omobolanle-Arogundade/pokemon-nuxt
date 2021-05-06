<template>
  <Fragment>
    <section class="flex flex-wrap" v-if="items">
      <nav id="store" class="w-full z-30 top-0 px-6 py-1">
        <div
          class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
        >
          <a
            class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            href="#"
          >
            Characters
          </a>

          <div class="p-8">
            <div class="bg-white flex items-center rounded-full shadow-xl">
              <input
                class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                v-model="pokemon"
                placeholder="Search by name or id"
              />

              <div class="p-4">
                <button
                  @click="search"
                  class="bg-green-500 text-white rounded-full p-2 hover:bg-red-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                >
                  Go
                </button>
              </div>
            </div>
          </div>
          <a class="my_pointer" @click="clear">Clear</a>
        </div>
      </nav>
      <card
        v-for="(pokemon, i) of items"
        :pokemon="pokemon"
        :index="i"
        :key="pokemon.id"
      />
    </section>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { mapActions } from 'vuex'

import Card from '@/components/common/card'

export default {
  props: {},
  components: { Fragment, Card },
  data() {
    return {
      pokemon: '',
    }
  },
  created() {
    this.fetchPokemons()
  },

  computed: {
    items: {
      get() {
        return this.$store.state.pokemon.items
      },
      set(value) {
        this.$store.commit(
          'setItems',
          { resource: 'pokemon', items: value },
          { root: true }
        )
      },
    },
  },
  methods: {
    ...mapActions({
      fetchPokemons: 'pokemon/fetchPokemons',
      fetchPokemon: 'pokemon/fetchPokemon',
    }),
    search() {
      if (this.pokemon) {
        this.fetchPokemon(this.pokemon)
          .then((res) => (this.items = [res]))
          .catch(() => this.fetchPokemons())
      }
    },
    clear() {
      this.fetchPokemons()
    },
  },
}
</script>

<style></style>
