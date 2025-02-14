<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Tab } from './model/types'

const { tabs, activeTab = 0 } = defineProps<{
	tabs: Tab[]
	activeTab?: number
}>()

const emits = defineEmits<{
	change: [index: number]
}>()

const activeTabLocal = ref(activeTab)

const onChange = (index: number) => {
	if (index === activeTabLocal.value) return

	emits('change', index)
	activeTabLocal.value = index
}

const activeComponent = computed(
	() => tabs[activeTabLocal.value]?.component || null,
)
</script>

<template>
	<div class="tabs">
		<div class="tabs-triggers">
			<button
				v-for="(tab, index) in tabs"
				:key="tab.id"
				@click="onChange(index)"
				class="tabs-trigger"
				:class="{ 'tabs-trigger-active': index === activeTabLocal }"
			>
				<template v-if="tab.prependIcon">
					<component :is="tab.prependIcon" />
				</template>
				{{ tab.title }}
				<template v-if="tab.appendIcon">
					<component :is="tab.appendIcon" />
				</template>
			</button>
		</div>
		<div class="tabs-content">
			<transition name="tabs" mode="out-in">
				<component :is="activeComponent" />
			</transition>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.tabs {
	&-triggers {
		display: flex;
		gap: 12px;
	}

	&-trigger {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 12px;
		border-radius: var(--rounded);
		background-color: var(--white);
		transition:
			color,
			background-color,
			var(--transition-time) linear;

		&-active {
			background-color: var(--blue);
			color: var(--white);
		}

		&:hover {
			background-color: var(--gray-light);
			color: var(--white);
		}

		svg {
			width: 24px;
			height: 24px;
		}
	}

	&-content {
		margin: 32px 0 0;
	}
}

.tabs-enter-active,
.tabs-leave-active {
	transition: all 0.2s ease;
}

.tabs-enter-from {
	opacity: 0;
	transform: translateX(-30px);
}

.tabs-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
