<script setup lang="ts">
import { ref } from 'vue'
import CardGifts, {
	type TypeCardGifts,
} from '../../card-gifts/ui/CardGifts.vue'
import { axiosInstance } from '@/shared/api'
import { storeToRefs } from 'pinia'
import { useStore } from '@/shared/stores/store'

const activeFilter = ref(1)
const gifts = ref<TypeCardGifts[]>([])
const { currentLanguage } = storeToRefs(useStore())

axiosInstance.get(`/api/${currentLanguage}/gifts`).then((res) => {
	gifts.value = res.data
})
</script>

<template>
	<div class="page-gifts">
		<div class="page-gifts-filters">
			<div class="subtitle">Срок действия</div>
			<div class="page-gifts-filters-btns">
				<div
					:class="[activeFilter == 1 ? 'filter active' : 'filter']"
					@click="activeFilter = 1"
				>
					Все
				</div>
				<div
					:class="[activeFilter == 2 ? 'filter active' : 'filter']"
					@click="activeFilter = 2"
				>
					Актуальные
				</div>
				<div
					:class="[activeFilter == 3 ? 'filter active' : 'filter']"
					@click="activeFilter = 3"
				>
					Прошедшие
				</div>
			</div>
		</div>
		<div class="page-gifts-content">
			<div class="title">Подарки</div>
			<div class="page-gifts-content-cards" @touchmove.stop>
				<TransitionGroup name="card">
					<CardGifts v-for="card in gifts" :props="card" :key="card.ulid" />
				</TransitionGroup>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.page-gifts {
	border-radius: var(--rounded-l);
	padding: 40px;
	width: 2000px;
	height: 1999px;
	background: var(--white);
	overflow-y: scroll;

	&-filters {
		display: flex;
		align-items: center;
		gap: 20px;

		&-btns {
			display: flex;
			background: var(--bg);
			border-radius: var(--rounded);
			padding: 8px;

			.filter {
				font-size: 40px;
				color: var(--gray);
				border-radius: var(--rounded-s);
				padding: 28px 56px;
				transition: all var(--transition-time) ease;
			}

			.active {
				background: var(--yellow);
				color: var(--white);
				font-weight: 700;
			}
		}
	}

	&-content {
		margin-top: 40px;
		border-radius: var(--rounded);
		padding: 40px;
		background: var(--bg);
		min-height: 1759px;

		&-cards {
			display: flex;
			flex-wrap: wrap;
			margin-top: 40px;
		}
	}
}
</style>
