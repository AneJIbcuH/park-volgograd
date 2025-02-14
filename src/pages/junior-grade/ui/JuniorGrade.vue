<script setup lang="ts">
import type { Tab } from '@/shared/ui/v-tabs'
import VTabs from '@/shared/ui/v-tabs/VTabs.vue'
import { markRaw, ref } from 'vue'
import IconJS from '@/shared/icons/IconJS.vue'
import IconHTML from '@/shared/icons/IconHTML.vue'
import IconCSS from '@/shared/icons/IconCSS.vue'
import JuniorHtml from './blocks/junior-html.vue'
import JuniorCss from './blocks/junior-css.vue'
import JuniorJs from './blocks/junior-js.vue'
import JuniorVue from './blocks/junior-vue.vue'
import IconVue from '@/shared/icons/IconVue.vue'

const tabs = ref<Tab[]>([
	{
		id: 1,
		title: 'HTML',
		component: markRaw(JuniorHtml),
		prependIcon: markRaw(IconHTML),
	},
	{
		id: 2,
		title: 'CSS',
		component: markRaw(JuniorCss),
		prependIcon: markRaw(IconCSS),
	},
	{
		id: 3,
		title: 'JavaScript',
		component: markRaw(JuniorJs),
		prependIcon: markRaw(IconJS),
	},
	{
		id: 4,
		title: 'Vue',
		component: markRaw(JuniorVue),
		prependIcon: markRaw(IconVue),
	},
])

const isDev = ref(window.MODE === 'DEV')
</script>

<template>
	<div :class="['junior', { prod: !isDev }]">
		<div class="container">
			<VTabs :tabs />
		</div>
	</div>
</template>

<style lang="scss">
.prod {
	ul {
		display: none;
	}
}
</style>
