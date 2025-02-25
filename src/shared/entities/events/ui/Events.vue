<script setup lang="ts">
import { ref } from 'vue'
import CardEvents, {
	type TypeCardEvents,
} from '../../card-events/ui/CardEvents.vue'
import { axiosInstance } from '@/shared/api'
import { storeToRefs } from 'pinia'
import { useStore } from '@/shared/stores/store'

const events = ref<TypeCardEvents[]>([])
const { currentLanguage } = storeToRefs(useStore())

axiosInstance.get(`/api/${currentLanguage}/events`).then((res) => {
	events.value = res.data
})
</script>

<template>
	<div class="page-events">
		<div class="page-events-content">
			<div class="title">Мероприятия</div>
			<div class="page-events-content-cards" @touchmove.stop>
				<TransitionGroup name="card">
					<CardEvents v-for="card in events" :props="card" :key="card.title" />
				</TransitionGroup>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.page-events {
	border-radius: var(--rounded-l);
	padding: 40px;
	width: 2000px;
	height: 1999px;
	background: var(--white);
	overflow-y: scroll;

	&-content {
		border-radius: var(--rounded);
		padding: 40px;
		background: var(--bg);
		min-height: 1919px;

		&-cards {
			display: flex;
			flex-wrap: wrap;
			margin-top: 40px;
		}
	}
}
</style>
