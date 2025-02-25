<script setup lang="ts">
import { useStore, type Lang, type Widget } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import VModal from '../v-modal/ui/VModal.vue'
import VButton from '../v-button/VButton.vue'

type Point = {
	id: number
	name: Widget
	active: boolean
}

type Language = {
	name: Lang
	translate: string
	active: boolean
	img: string
}

const firstOpen = ref(true)
setTimeout(() => {
	firstOpen.value = !firstOpen.value
}, 100)

const { widget, currentLanguage } = storeToRefs(useStore())

const elements = ref<Point[]>([
	{ id: 1, name: 'map', active: true },
	{ id: 2, name: 'news', active: false },
	{ id: 3, name: 'events', active: false },
	{ id: 4, name: 'gifts', active: false },
	{ id: 5, name: 'info', active: false },
	{ id: 6, name: 'settings', active: false },
])
const languages = ref<Language[]>([
	{ name: 'Russian', translate: 'Русский', active: true, img: 'russia' },
	{ name: 'English', translate: 'Английский', active: false, img: 'english' },
	{ name: 'China', translate: 'Китайский', active: false, img: 'china' },
])
const show = ref(false)

function switchPoint(point: Point) {
	elements.value = elements.value.map((el) => {
		if (el.id == point.id) {
			return {
				...el,
				active: true,
			}
		}
		return { ...el, active: false }
	})

	if (point.name == 'settings') {
		show.value = !show.value
	}
	widget.value = point.name
}

function switchLanguage(language: Language) {
	languages.value = languages.value.map((el) => {
		if (el.name == language.name) {
			return {
				...el,
				active: true,
			}
		}
		return { ...el, active: false }
	})
	currentLanguage.value = language.name
}
</script>

<template>
	<div class="switcher" :class="[{ firstOpen: firstOpen }]">
		<div
			v-for="el in elements"
			:key="el.id"
			@click="switchPoint(el)"
			:class="['point', { active: el.active }]"
		>
			<VIcon :name="el.name" size="48" />
		</div>
		<div class="indicator"></div>
		<div class="switcher-logo">
			<img src="/logo.png" alt="" />
		</div>
		<VModal :model-value="show">
			<div class="switcher-modal">
				<div class="title">Настройки</div>
				<div class="switcher-modal-interface">
					<div class="subtitle subtitle-l">Язык интерфейса</div>
					<div class="interface-btns">
						<div
							v-for="language in languages"
							@click="switchLanguage(language)"
							:class="['interface-btns-language', { active: language.active }]"
						>
							<img :src="`/flags/${language.img}.png`" alt="" />
							<div class="subtitle">{{ language.name }}</div>
							<div class="text-xs">{{ language.translate }}</div>
						</div>
					</div>
				</div>
				<VButton class="switcher-modal-btn" @click="show = !show"
					>Сохранить</VButton
				>
				<VIcon name="close" size="48" class="icon" @click="show = !show" />
			</div>
		</VModal>
	</div>
</template>

<style lang="scss" scoped>
.switcher {
	height: 224px;
	width: 2000px;
	padding: 40px;
	border-radius: var(--rounded-l);
	background: var(--white);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	position: relative;
	transition: all 0.4s ease-out;
	z-index: 12;

	&-logo {
		position: absolute;
		left: 40px;
		width: 220px;
		height: 144px;

		img {
			width: 100%;
		}
	}

	&-modal {
		display: flex;
		flex-direction: column;
		gap: 80px;
		padding: 20px;
		position: relative;

		&-interface {
			.interface-btns {
				display: flex;
				margin-top: 40px;
				background: var(--bg);
				padding: 8px;
				border-radius: var(--rounded);

				&-language {
					display: flex;
					flex-direction: column;
					border-radius: var(--rounded-s);
					padding: 28px 56px 28px 124px;
					width: 408px;
					height: 133px;
					position: relative;
					color: var(--gray);
					transition: all 0.7s ease;

					img {
						position: absolute;
						left: 56px;
						top: 42.5px;
						width: 48px;
					}
				}

				.active {
					background: var(--yellow);
					color: var(--white);
				}
			}
		}

		.btn {
			width: 287px;
		}

		.icon {
			position: absolute;
			top: 40px;
			right: 40px;
			color: var(--gray-secondary);
		}
	}
}

.indicator {
	position: absolute;
	top: 44px;
	width: 136px;
	height: 180.5px;
	background: var(--bg);
	border-radius: var(--rounded-l) var(--rounded-l) 0 0;
	transition: all var(--transition-time) linear;

	&::before {
		content: '';
		position: absolute;
		width: 116px;
		height: 116px;
		right: 136px;
		top: 64px;
		border-bottom-right-radius: 96px;
		box-shadow: 19px 19px 0 18px var(--bg);
		pointer-events: none;
		background: var(--white);
	}

	&::after {
		content: '';
		position: absolute;
		width: 116px;
		height: 116px;
		left: 136px;
		top: 64px;
		border-bottom-left-radius: 96px;
		box-shadow: -19px 19px 0 18px var(--bg);
		pointer-events: none;
		background: var(--white);
	}
}

.point {
	border-radius: var(--rounded-full);
	width: 96px;
	height: 96px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition:
		color var(--transition-time) linear,
		background var(--transition-time) linear 0.3s;
	z-index: 1;
	color: var(--gray-secondary);
}

.point:nth-child(6) {
	position: absolute;
	right: 333px;
}

.point.active {
	color: var(--yellow);
	background: var(--white);
}

.point:nth-child(1).active ~ .indicator {
	left: 700px;
}

.point:nth-child(2).active ~ .indicator {
	left: calc(700px + 116px * 1);
}

.point:nth-child(3).active ~ .indicator {
	left: calc(700px + 116px * 2);
}

.point:nth-child(4).active ~ .indicator {
	left: calc(700px + 116px * 3);
}

.point:nth-child(5).active ~ .indicator {
	left: calc(700px + 116px * 4);
}

.point:nth-child(6).active ~ .indicator {
	left: calc(700px + 116px * 4 + 386px);
}

.firstOpen {
	transform: translateY(500px);
	opacity: 0;
	filter: blur(50px);
}
</style>
