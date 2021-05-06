<template>
  <Fragment>
    <section class="flex flex-wrap" v-if="items">
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
import { mapActions, mapGetters } from 'vuex'

import Card from '@/components/common/card'

export default {
  props: {},
  components: { Fragment, Card },
  data() {
    return {}
  },
  created() {
    this.fetchPokemons()
  },

  computed: {
    ...mapGetters({
      items: 'pokemon/pokemons',
    }),
  },
  methods: {
    ...mapActions({
      fetchPokemons: 'pokemon/fetchPokemons',
    }),
  },
}
</script>

<style></style>
