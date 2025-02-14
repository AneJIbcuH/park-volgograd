<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import VSwitcher from '@/shared/ui/v-switcher/VSwitcher.vue'
import ParkMap from '@/shared/entities/map/ui/ParkMap.vue'
import Search from '@/shared/entities/search/ui/Search.vue'
import AboutAttraction from '@/shared/entities/about-attraction/ui/AboutAttraction.vue'
import Info from '@/shared/entities/info/ui/Info.vue'
import Events from '@/shared/entities/events/ui/Events.vue'
import News from '@/shared/entities/news/ui/News.vue'
import Gifts from '@/shared/entities/gifts/ui/Gifts.vue'
import Places from '@/shared/entities/places/ui/Places.vue'
import Keyboard from '@/shared/entities/keyboard/ui/Keyboard.vue'
import Notifications from '@/shared/entities/notifications/ui/Notifications.vue'

const { widget } = storeToRefs(useStore())

const initialTouch = ref(0)
const distance = ref(0)
const transition = ref(0.3)

function touchStart(e: TouchEvent) {
	initialTouch.value = e.changedTouches[0].clientY
}

function touchMove(e: TouchEvent) {
	if (e.changedTouches[0].clientY - initialTouch.value >= 50) {
		if (widget.value == 'map' || widget.value == 'settings') {
			distance.value = 440
			transition.value = 0.5
		} else if (widget.value == 'info') {
			distance.value = 3345
			transition.value = 1
		} else if (
			widget.value == 'events' ||
			widget.value == 'news' ||
			widget.value == 'gifts' ||
			widget.value == 'places'
		) {
			distance.value = 2330
			transition.value = 0.8
		} else if (widget.value == 'attraction') {
			distance.value = 1630
			transition.value = 0.7
		} else if (widget.value == 'keyboard') {
			distance.value = 1080
			transition.value = 0.65
		}
	}
	if (e.changedTouches[0].clientY - initialTouch.value <= -50) {
		distance.value = 0
	}
}
</script>

<template>
	<div class="main-page">
		<ParkMap />
		<Notifications />
		<div
			@touchstart="touchStart"
			@touchmove="touchMove"
			class="main-page-drawer"
			:style="{
				transform: `translateY(${distance}px)`,
				transition: `${transition}s`,
			}"
		>
			<div v-if="distance == 0" class="drawer-hook"></div>
			<img v-else src="/hook.png" alt="" class="drawer-hookup" />
			<div
				:class="['drawer-blur', distance != 0 ? 'blur' : '']"
				:style="{ transition: `${transition}s` }"
			>
				<TransitionGroup name="drawer">
					<AboutAttraction v-if="widget == 'attraction'" />
					<Search
						v-if="
							widget == 'map' ||
							widget == 'settings' ||
							widget == 'attraction' ||
							widget == 'keyboard'
						"
					/>
					<Places v-if="widget == 'places'" />
					<News v-if="widget == 'news'" />
					<Events v-if="widget == 'events'" />
					<Info v-if="widget == 'info'" />
					<Gifts v-if="widget == 'gifts'" />
				</TransitionGroup>
				<Keyboard v-if="widget == 'keyboard'" />
				<VSwitcher v-if="widget != 'keyboard'" />
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

	&-drawer {
		width: 100%;
		border-radius: var(--rounded-xl) var(--rounded-xl) 0 0;
		background: var(--bg);
		padding: 88px 80px 80px;
		position: absolute;
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
