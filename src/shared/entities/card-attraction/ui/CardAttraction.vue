<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { url } from '@/shared/api/axiosInstance'
import { formatTime } from '@/shared/utils/formatDate'
import VButton from '@/shared/ui/v-button/VButton.vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'

export type TypeCardAttraction = {
	ulid: string
	title: string
	phone: string
	price: number
	workingHoursFrom: string
	workingHoursTo: string
	weekendWorkingHoursFrom: string
	weekendWorkingHoursTo: string
	image: string
	popularity: number
	areaId: number
	tags: Tag[]
	notes: Note[]
	createdAt: string
	updatedAt: string
}

export type Tag = {
	ulid: string
	title: string
}
export type Note = {
	title: string
	note: string
}

defineProps<{
	props: TypeCardAttraction
}>()

const { widget, cardAttraction } = storeToRefs(useStore())

function toAttraction(data: TypeCardAttraction) {
	cardAttraction.value = data
	widget.value = 'attraction'
}
</script>

<template>
	<div class="attraction">
		<div class="attraction-img" @click="toAttraction(props)">
			<img :src="url + props.image" alt="" />
		</div>
		<div class="attraction-name">
			<div class="subtitle">{{ props.title }}</div>
			<div class="attraction-name-chips">
				<div v-for="chip in props.tags" :key="chip.ulid" class="text text-xs">
					{{ chip.title }}
				</div>
			</div>
		</div>
		<div class="attraction-time">
			<div class="subtitle">
				Режим работы
				<div class="close">Закрыто до завтра</div>
			</div>
			<div class="attraction-time-chip">
				<div class="text text-xs">Будни</div>
				<div class="text black">
					{{ formatTime(props.workingHoursFrom) }}-{{
						formatTime(props.workingHoursTo)
					}}
				</div>
			</div>
			<div class="attraction-time-chip">
				<div class="text text-xs">Выходные</div>
				<div class="text black">
					{{ formatTime(props.weekendWorkingHoursFrom) }}-{{
						formatTime(props.weekendWorkingHoursTo)
					}}
				</div>
			</div>
		</div>
		<VButton outline radius="xxs"
			><VIcon name="search" size="48" />Найти на карте</VButton
		>
	</div>
</template>

<style scoped lang="scss">
.attraction {
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 878px;
	height: 1082px;
	border-radius: var(--rounded);
	padding: 32px;
	background: var(--white);

	&-img {
		width: 100%;
		height: 458px;

		img {
			width: 100%;
			border-radius: var(--rounded-xxs);
		}
	}

	&-name {
		&-chips {
			display: flex;
			gap: 8px;
			margin-top: 16px;
			overflow-x: scroll;

			.text {
				border-radius: var(--rounded-xxs);
				padding: 12px 24px;
				background: var(--bg);
			}
		}
	}

	&-time {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;

		.subtitle {
			width: 100%;
			height: 83px;
			position: relative;

			.close {
				position: absolute;
				left: 0;
				bottom: 0;
				color: var(--red);
				font-weight: 700;
				font-size: 24px;
			}
		}

		&-chip {
			border-radius: var(--rounded-xxs);
			padding: 24px 32px;
			background: var(--bg);
			width: 399px;

			.black {
				color: var(--black);
				margin-top: 24px;
			}
		}
	}
}
</style>
