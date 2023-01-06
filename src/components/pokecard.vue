<template>
	<div class="card">
		<router-link :to="`/pokemon/${getId(pokemon)}`">
			<div class="card-body">
				<p>{{ pokemon.name }}</p>
			</div>
		</router-link>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue'
	const { pokemon } = defineProps(['pokemon'])
	const getId = pokemon => {
		const url = pokemon.url
		
	}
</script>

<style></style>
