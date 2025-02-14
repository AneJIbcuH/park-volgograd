<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watchEffect } from 'vue'
import { VSearchInput } from '@/shared/ui/v-search-input'
import VButton from '@/shared/ui/v-button/VButton.vue'

const { widget, searchString, linkInput } = storeToRefs(useStore())
const active = ref(false)

// onMounted(() => {
// 	console.log(linkInput.value.linkInput)	
// //   input.value.focus()
// })

function openKeyboard() {
	if (widget.value != 'keyboard') {
		active.value = !active.value
		widget.value = 'keyboard'
	}
}

watchEffect(() => {
	if (widget.value != 'keyboard') {
		active.value = false
	}
})
</script>

<template>
	<div class="search">
		<VSearchInput
			:active="active"
			v-model="searchString"
			@click="openKeyboard"
			placeholder="Поиск мест и аттракционов"
			ref="linkInput"
		/>
		<VButton
			size="large"
			radius="l"
			class="search-btn"
			@click="
				() => {
					active ? console.log('найти') : (widget = 'places')
				}
			"
			>{{ widget == 'keyboard' ? 'Найти' : 'Все места' }}</VButton
		>
	</div>
</template>

<style scoped lang="scss">
.search {
	display: flex;
	gap: 40px;

	&-btn {
		flex-shrink: 0;
	}
}
</style>
