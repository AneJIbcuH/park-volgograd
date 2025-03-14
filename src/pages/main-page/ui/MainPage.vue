<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import VSwitcher from '@/shared/ui/v-switcher/VSwitcher.vue'
import ParkMap from '@/shared/entities/map/ui/ParkMap.vue'
import AboutAttraction from '@/shared/entities/about-attraction/ui/AboutAttraction.vue'
import Info from '@/shared/entities/info/ui/Info.vue'
import Events from '@/shared/entities/events/ui/Events.vue'
import News from '@/shared/entities/news/ui/News.vue'
import Gifts from '@/shared/entities/gifts/ui/Gifts.vue'
import Objects from '@/shared/entities/objects/ui/Objects.vue'
import Notifications from '@/shared/entities/notifications/ui/Notifications.vue'
import Links from '@/shared/entities/links/ui/Links.vue'
import Zoom from '@/shared/entities/zoom/ui/Zoom.vue'

const { widget } = storeToRefs(useStore())

const initialTouch = ref(0)
const distance = ref(0)
const transition = ref(0.3)
const indicator = ref<HTMLElement>()

function touchStart(e: TouchEvent) {
	initialTouch.value = e.changedTouches[0].clientY
}

function touchMove(e: TouchEvent) {
	if (e.changedTouches[0].clientY - initialTouch.value >= 50) {
		distance.value = 3730 - indicator.value!.offsetTop
		transition.value = 0.4 + indicator.value!.offsetHeight / 5600
	}
	if (e.changedTouches[0].clientY - initialTouch.value <= -50) {
		distance.value = 0
	}
}
</script>

<template>
	<div class="main-page">
		<ParkMap />
		<Zoom />
		<Notifications />
		<div
			@touchstart="touchStart"
			@touchmove="touchMove"
			class="main-page-drawer"
			:style="{
				transform: `translateY(${distance}px)`,
				transition: `${transition}s`,
			}"
			ref="indicator"
		>
			<div v-if="distance == 0" class="drawer-hook"></div>
			<img v-else src="/hook.png" alt="" class="drawer-hookup" />
			<div
				:class="['drawer-blur', distance != 0 ? 'blur' : '']"
				:style="{ transition: `${transition}s` }"
			>
				<TransitionGroup name="drawer" :appear="true">
					<AboutAttraction v-if="widget == 'attraction'" />
					<Links
						v-if="
							widget == 'map' || widget == 'settings' || widget == 'attraction'
						"
					/>
					<Objects v-if="widget == 'objects'" />
					<News v-if="widget == 'news'" />
					<Events v-if="widget == 'events'" />
					<Info v-if="widget == 'info'" />
					<Gifts v-if="widget == 'gifts'" />
				</TransitionGroup>
				<VSwitcher />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.main-page {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: var(--gray-secondary);

	&-drawer {
		width: 100%;
		border-radius: var(--rounded-xl) var(--rounded-xl) 0 0;
		background: var(--bg);
		padding: 88px 80px 80px;
		position: fixed;
		bottom: 0;
		transition: all ease;
		// overflow: hidden;

		.drawer-hook {
			position: absolute;
			top: 40px;
			left: 1040px;
			border-radius: 16px;
			width: 80px;
			height: 8px;
			background: var(--gray-secondary);
		}

		.drawer-hookup {
			position: absolute;
			top: 40px;
			left: 1040px;
		}

		.drawer-blur {
			display: flex;
			flex-direction: column;
			gap: 40px;
			transition: all ease;
			position: relative;
		}

		.blur {
			filter: blur(50px);
			opacity: 0;
		}
	}
}
</style>
