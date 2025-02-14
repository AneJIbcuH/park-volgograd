import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TypeCardAttraction } from '../entities/card-attraction/ui/CardAttraction.vue'

export type Widget =
	| 'map'
	| 'news'
	| 'events'
	| 'gifts'
	| 'info'
	| 'settings'
	| 'attraction'
	| 'places'
	| 'keyboard'

export const useStore = defineStore('store', () => {
	const widget = ref<Widget>('map')
	const searchString = ref('')
	const linkInput = ref()
	const cardAttraction = ref<TypeCardAttraction>()

	return { widget, searchString, linkInput, cardAttraction }
})
