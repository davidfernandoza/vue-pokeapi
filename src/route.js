import home from './pages/home.vue'
import pokemon from './pages/pokemon.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', component: home },
	{ path: '/pokemon', component: pokemon }
]

export default createRouter({
	history: createWebHistory(),
	routes
})
