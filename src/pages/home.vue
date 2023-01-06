<template>
	<section v-if="pokemons.length > 0">
		<p v-for="(pokemon, index) in pokemons" :key="index">
			<pokecard :pokemon="pokemon" />
		</p>
	</section>
</template>

<script setup>
	import Pokecard from '../components/pokecard.vue'
	import axios from 'axios'
	import { ref } from 'vue'

	getPokemons()

	const pokemons = ref([])

	const getPokemons = async () => {
		const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
		pokemons.value = data.results
	}
</script>
