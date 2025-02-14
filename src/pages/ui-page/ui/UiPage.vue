<script setup lang="ts">
import { ref } from 'vue'
import { VButton } from '@/shared/ui/v-button'
import { VSearchInput } from '@/shared/ui/v-search-input'
import VCheckbox from '@/shared/ui/v-checkbox/ui/VCheckbox.vue'
import VSwitcher from '@/shared/ui/v-switcher/VSwitcher.vue'
import AboutAttraction from '@/shared/entities/about-attraction/ui/AboutAttraction.vue'
import CardAttraction from '@/shared/entities/card-attraction/ui/CardAttraction.vue'
import CardNews from '@/shared/entities/card-news/ui/CardNews.vue'
import CardEvents from '@/shared/entities/card-events/ui/CardEvents.vue'

const name = ref('')
const active = ref(false)
</script>

<template>
	<div class="ui">
			<VButton outline>Outline</VButton>
			<VButton>Просто кнопка</VButton>
			<VButton size="large">Large кнопка</VButton>
			<VButton radius="l" outline>96px</VButton>
			<VButton radius="xxs">24px</VButton>
			<VButton radius="xs" variant="white">белая</VButton>
			<VCheckbox
				name="policy"
				default-value="true"
				:default-checked="true"
				label="Аттракционы"
			/>
			<!-- <AboutAttraction/> -->
			<VSearchInput
				:active="active"
				v-model="name"
				@click="active = !active"
				placeholder="Поиск мест и аттракционов"
			/>
			{{ name }}
			<!-- <CardAttraction/>
			<CardNews/>
			<CardEvents/> -->
			<VSwitcher />

	</div>
</template>

<style lang="scss" scoped>
 .ui {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 80px;
 }

</style>
