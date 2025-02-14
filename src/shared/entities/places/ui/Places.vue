<script setup lang="ts">
import { ref } from 'vue'
import CardAttraction, {
	type TypeCardAttraction,
} from '../../card-attraction/ui/CardAttraction.vue'
import { axiosInstance } from '@/shared/api'

const activeFilter = ref(1)
const places = ref<TypeCardAttraction[]>([])

axiosInstance.get('/api/attractions').then((res) => {
	places.value = res.data
	console.log(res.data)
})
</script>

<template>
	<div class="news">
		<div class="news-filters">
			<div class="subtitle">Места</div>
			<div class="news-filters-btns">
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
					Новые
				</div>
				<div
					:class="[activeFilter == 3 ? 'filter active' : 'filter']"
					@click="activeFilter = 3"
				>
					Старые
				</div>
			</div>
		</div>
		<div class="news-content">
			<div class="title">Водные развлечения</div>
			<div class="news-content-cards" @touchmove.stop>
				<TransitionGroup name="card">
					<CardAttraction
						v-for="card in places"
						:props="card"
						:key="card.ulid"
					/>
				</TransitionGroup>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.news {
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
