<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	size?: 'default' | 'large'
	radius?: 'xxs' | 'xs' | 's' | 'l'
	variant?: 'yellow' | 'white'
	outline?: boolean
	disabled?: boolean
}

const {
	size = 'default',
	variant = 'yellow',
	radius,
	outline,
	disabled,
} = defineProps<Props>()

const classes = computed(() => [
	'btn',
	`btn-${variant}`,
	`btn-${size}`,
	{ 'btn-outline': outline, [`btn-${radius}`]: radius },
])
</script>

<template>
	<button :class="classes" :disabled>
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
.btn {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	padding: 0 40px;
	border: 4px solid transparent;
	font-weight: 700;
	font-size: 40px;
	border-radius: var(--rounded);
	transition:
		color,
		background,
		var(--transition-time) linear;

	&:disabled {
		background: var(--gray);
		color: var(--white);
		pointer-events: none;
	}

	:deep(svg) {
		width: 48px;
		height: 48px;
	}
}

.btn-yellow {
	color: var(--white);
	background: var(--yellow);

	&.btn-outline {
		color: var(--yellow);
		background: transparent;
		border: 4px solid var(--yellow);
	}
}

.btn-white {
	background: var(--white);
}

.btn-default {
	height: 112px;
}

.btn-large {
	height: 128px;
}

.btn-xxs {
	border-radius: var(--rounded-xxs);
}

.btn-xs {
	border-radius: var(--rounded-xs);
}

.btn-s {
	border-radius: var(--rounded-s);
}

.btn-l {
	border-radius: var(--rounded-l);
}
</style>
