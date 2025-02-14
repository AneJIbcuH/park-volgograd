<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '@/shared/utils/formatDate'
import { url } from '@/shared/api/axiosInstance'
import VButton from '@/shared/ui/v-button/VButton.vue'
import VModal from '@/shared/ui/v-modal/ui/VModal.vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'

export type TypeCardEvents = {
	title: string
	description: string
	image: string
	ulid: string
	createdAt: string
	updatedAt: string
	date: string
}

defineProps<{
	props: TypeCardEvents
}>()

const show = ref(false)
const actual = ref(true)
</script>

<template>
	<div class="events">
		<div class="events-img">
			<img :src="url + props.image" alt="" />
		</div>
		<div :class="['events-status', actual ? 'status-green' : 'status-red']">
			{{ formatDate(props.date) }}
		</div>
		<div class="events-text">
			<div class="subtitle">
				{{ props.title }}
			</div>
			<div class="text text-xs" v-html="props.description"></div>
		</div>
		<VButton outline radius="xxs" @click="show = !show">Подробнее</VButton>
		<VModal :model-value="show">
			<div class="events-modal">
				<VIcon name="close" size="48" class="icon" @click="show = !show" />
				<div class="subtitle subtitle-l">
					{{ props.title }}
				</div>
				<div class="events-modal-img">
					<img :src="url + props.image" alt="" />
				</div>
				<div
					:class="[
						'events-modal-status',
						actual ? 'status-green' : 'status-red',
					]"
				>
					{{ formatDate(props.date) }}
				</div>
				<div class="text" v-html="props.description"></div>
			</div>
		</VModal>
	</div>
</template>

<style scoped lang="scss">
.events {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	padding: 32px;
	width: 878px;
	height: 1062px;
	border-radius: var(--rounded);
	background: var(--white);

	&-img {
		width: 100%;
		height: 458px;

		img {
			width: 100%;
		}
	}

	&-status {
		border-radius: var(--rounded-xxs);
		padding: 8px 32px;
		font-weight: 500;
		font-size: 18px;
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

		&-status {
			border-radius: var(--rounded-xxs);
			padding: 8px 32px;
			font-weight: 500;
			font-size: 20px;
			width: max-content;
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

.status-green {
	color: #63850d;
	background: rgba(189, 223, 103, 0.25);
}

.status-red {
	color: var(--red);
	background: var(--red-alpha-25);
}
</style>
