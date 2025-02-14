<script setup lang="ts">
import { ref } from 'vue'
import VButton from '@/shared/ui/v-button/VButton.vue'
import VModal from '@/shared/ui/v-modal/ui/VModal.vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import { url } from '@/shared/api/axiosInstance'

export type TypeCardNews = {
	title: string
	description: string
	image: string
	ulid: string
	createdAt: string
	updatedAt: string
}

defineProps<{
	props: TypeCardNews
}>()

const show = ref(false)
</script>

<template>
	<div class="card-news">
		<div class="card-news-img">
			<img :src="url + props.image" alt="" />
		</div>
		<div class="card-news-text">
			<div class="subtitle">
				{{ props.title }}
			</div>
			<div class="text text-xs" v-html="props.description"></div>
		</div>
		<VButton outline radius="xxs" @click="show = !show">Подробнее</VButton>
		<VModal :model-value="show">
			<div class="card-news-modal">
				<VIcon name="close" size="48" class="icon" @click="show = !show" />
				<div class="subtitle subtitle-l">
					{{ props.title }}
				</div>
				<div class="card-news-modal-img">
					<img :src="url + props.image" alt="" />
				</div>
				<div class="text" v-html="props.description"></div>
			</div>
		</VModal>
	</div>
</template>

<style scoped lang="scss">
.card-news {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	padding: 32px;
	width: 878px;
	height: 993px;
	border-radius: var(--rounded);
	background: var(--white);

	&-img {
		width: 100%;
		height: 458px;

		img {
			width: 100%;
		}
	}

	&-text {
		height: 296px;

		.text {
			margin-top: 16px;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 6;
			-webkit-box-orient: vertical;
			text-overflow: ellipsis;
		}
	}

	&-modal {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 40px;
		position: relative;

		&-img {
			border-radius: var(--rounded);
			width: 1650px;
			height: 928px;

			img {
				width: 100%;
			}
		}

		.text {
			width: 1650px;
		}

		.icon {
			position: absolute;
			right: 20px;
			top: 20px;
			color: var(--gray-secondary);
		}
	}
}
</style>
