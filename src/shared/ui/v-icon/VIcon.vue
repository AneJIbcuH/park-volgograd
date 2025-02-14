<script lang="ts" setup>
import { computed } from 'vue'
import { getImageUrl, getSvgIcon } from '@/shared/utils/icons.js'

interface Props {
	name: string
	size?: string
}

const { name, size = '96' } = defineProps<Props>()

const width = computed(() => {
	return `${size}px`
})
const height = computed(() => {
	return `${size}px`
})
</script>

<template>
	<div
		v-if="getSvgIcon(name)"
		class="base-icon"
		:style="{
			width,
			height,
		}"
		v-html="getSvgIcon(name)"
	/>
	<img
		v-else
		:src="getImageUrl(name)"
		:style="{
			width,
			height,
			minWidth: width,
			minHeight: height,
		}"
		:alt="name"
	/>
</template>

<style lang="scss" scoped>
:deep(svg) {
	width: 100%;
	height: 100%;
	transition: all var(--transition-time) linear;

	path {
		fill: currentColor;
	}
}
</style>
