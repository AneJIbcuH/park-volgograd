<script lang="ts" setup></script>

<template>
	<div class="skeleton" />
</template>

<style scoped>
.skeleton {
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	border-radius: var(--rounded);
	background: var(--skeleton-bg);
	width: 100%;
	height: 100%;
}

@keyframes pulse {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
}
</style>
