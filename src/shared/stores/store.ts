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
	| 'objects'
	| 'keyboard'

export type Lang = 'Russian' | 'English' | 'China'

export const useStore = defineStore('store', () => {
	const widget = ref<Widget>('map')
	const searchString = ref('')
	const linkInput = ref()
	const cardAttraction = ref<TypeCardAttraction>()
	const currentLanguage = ref<Lang>('Russian')
	const scaleMap = ref(2.3)
	const ratio = ref(0.5)

	return { widget, searchString, linkInput, cardAttraction, currentLanguage, scaleMap, ratio }
})
