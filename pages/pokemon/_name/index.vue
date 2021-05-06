<template>
  <div
    class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
    style="background-image: url('https://source.unsplash.com/1L71sPT5XKc')"
  >
    <div
      class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
    >
      <!--Main Col-->
      <div
        id="profile"
        class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div class="p-4 md:p-12 text-center lg:text-left">
          <h1 class="text-3xl font-bold pt-8 lg:pt-0">
            {{ pokemon.name | capitalize }}
          </h1>
          <div
            class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"
          ></div>

          <p
            v-if="pokemon.species"
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grip-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            Species - {{ pokemon.species.name | capitalize }}
          </p>

          <p
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grip-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            Height - {{ pokemon.height }}
          </p>

          <p
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grip-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            Weight - {{ pokemon.weight }}
          </p>

          <p
            v-if="pokemon.abilities"
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grip-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            Abilities -
            <span
              v-for="(ability, index) of pokemon.abilities.slice(0, 5)"
              :key="index"
              >{{ ability.ability.name | capitalize
              }}<span
                v-if="
                  index <
                  (pokemon.abilities.length > 5
                    ? 4
                    : pokemon.abilities.length - 1)
                "
                >,&nbsp;</span
              ></span
            >
          </p>

          <p
            v-if="pokemon.forms"
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grip-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            Forms -
            <span
              v-for="(form, index) of pokemon.forms.slice(0, 5)"
              :key="index"
              >{{ form.name | capitalize
              }}<span
                v-if="
                  index <
                  (pokemon.forms.length > 5 ? 4 : pokemon.forms.length - 1)
                "
                >,&nbsp;</span
              ></span
            >
          </p>

          <p
            v-if="pokemon.moves"
            class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-grip-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            Moves -
            <span
              v-for="(move, index) of pokemon.moves.slice(0, 5)"
              :key="index"
              >{{ move.move.name | capitalize
              }}<span
                v-if="
                  index <
                  (pokemon.moves.length > 5 ? 4 : pokemon.moves.length - 1)
                "
                >,&nbsp;</span
              ></span
            >
          </p>

          <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
        </div>
      </div>

      <!--Img Col-->
      <div class="w-full lg:w-2/5">
        <!-- Big profile image for side bar (desktop) -->
        <img
          :src="`https://lorempokemon.fakerapi.it/pokemon/200/${
            pokemon && pokemon.id - 1
          }`"
          class="rounded-none lg:rounded-lg shadow-2xl"
        />
        <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
      </div>

      <!-- Pin to top right corner -->
      <NuxtLink to="/">
        <div class="absolute top-0 right-0 h-12 w-18 p-4">
          <button class="js-change-theme focus:outline-none">🌙</button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  created() {
    const { name } = this.$route.params
    if (!name) {
      return this.$router.push('/')
    }
    this.fetchPokemon(name).then((res) => console.log('res is', res))
  },
  computed: {
    ...mapGetters({
      pokemon: 'pokemon/pokemon',
    }),
  },
  methods: {
    ...mapActions({
      fetchPokemon: 'pokemon/fetchPokemon',
    }),
  },
}
</script>

<style></style>
