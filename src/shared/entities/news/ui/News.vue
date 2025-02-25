<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import CardNews, { type TypeCardNews } from '../../card-news/ui/CardNews.vue'
import { axiosInstance } from '@/shared/api'

const { currentLanguage } = storeToRefs(useStore())
const activeFilter = ref(1)
const news = ref<TypeCardNews[]>([])

axiosInstance.get(`/api/${currentLanguage}/news`).then((res) => (news.value = res.data))
</script>

<template>
	<div class="news">
		<div class="news-filters">
			<div class="subtitle">Дата публикации</div>
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
			<div class="title">Новости</div>
			<div class="news-content-cards" @touchmove.stop>
				<TransitionGroup name="card">
					<CardNews v-for="card in news" :props="card" :key="card.ulid" />
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
