<script setup lang="ts">
import type { AccordionItem } from '@/shared/ui/v-accordion'
import IconArrowDown from '@/shared/icons/IconArrowDown.vue'
import { nextTick, onMounted, ref, useTemplateRef } from 'vue'

const {
	accordions,
	type = 'single',
	hasIcon = true,
} = defineProps<{
	accordions: AccordionItem[]
	type?: 'single' | 'multiple'
	hasIcon?: boolean
}>()

const accordion = useTemplateRef('accordion')
const contentHeights = ref<number[]>([])
const activeItems = ref<string[]>([])

const onClick = (acc: AccordionItem) => {
	const value = acc.value
	if (activeItems.value.includes(value)) {
		activeItems.value = activeItems.value.filter((item) => item !== value)
		return
	}
	if (type === 'single') {
		activeItems.value = [value]
	} else if (type === 'multiple') {
		activeItems.value = [...activeItems.value, value]
	}
}

onMounted(async () => {
	await nextTick()
	contentHeights.value = accordions.map((_, index) => {
		const element = accordion.value?.querySelectorAll('.accordion-content')[
			index
		] as HTMLElement
		return element?.scrollHeight || 0
	})
})
</script>

<template>
	<div ref="accordion" class="accordion-list">
		<div
			v-for="(acc, index) in accordions"
			:key="acc.id"
			@click="onClick(acc)"
			:class="[
				'accordion',
				{ 'accordion-active': activeItems.includes(acc.value) },
			]"
		>
			<div class="accordion-trigger">
				<div class="accordion-title">{{ acc.title }}</div>
				<div v-if="hasIcon" class="accordion-icon">
					<IconArrowDown />
				</div>
			</div>
			<div
				ref="acc"
				class="accordion-content"
				:style="{
					'--accordion-content-height': `${contentHeights[index] + 20}px`,
				}"
			>
				<component :is="acc.component" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.accordion-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.accordion {
	&-trigger {
		display: flex;
		align-items: center;
		gap: 24px;
		justify-content: space-between;
		cursor: pointer;
		padding: 10px 20px;
		background: var(--gray-light);
		color: var(--white);
		border-radius: var(--rounded);
		transition: all 0.3s;

		&:hover {
			background: var(--gray);
			color: var(--blue-light);
		}
	}

	&-title {
		font-size: 18px;
		font-weight: 500;
	}

	&-icon {
		flex-shrink: 0;

		svg {
			width: 32px;
			height: 32px;
		}
	}

	&-content {
		height: 0;
		overflow: hidden;
		transition: all 0.3s;
	}

	&-active {
		.accordion-trigger {
			background: var(--gray);
		}

		.accordion-content {
			padding-top: 20px;
			height: var(--accordion-content-height);
		}

		.accordion-icon {
			transform: rotate(180deg);
		}
	}
}
</style>
