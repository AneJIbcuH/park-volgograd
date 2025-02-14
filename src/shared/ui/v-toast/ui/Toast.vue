<script setup lang="ts">
import { type IToast, useToastStore } from '../'

const { description, id, title, type = 'default' } = defineProps<IToast>()
const toastStore = useToastStore()
</script>

<template>
	<div
		@click="toastStore.removeToast(id)"
		:class="['toast', `toast-${type}`]"
		:id="`toast-${id}`"
	>
		<div v-html="title" class="toast-title" />
		<div v-if="description" v-html="description" class="toast-description" />
	</div>
</template>

<style scoped lang="scss">
.toast {
	padding: 10px 20px;
	border-radius: var(--rounded-xs);
	max-width: 360px;
	min-width: 240px;
	cursor: pointer;
	transition: all 0.1s;

	&-title {
		font-weight: 600;
		font-size: 18px;
	}

	&-description {
		margin: 8px 0 0;
	}

	&-default {
		background: var(--blue-light);
		color: var(--white);
	}

	&-error {
		background: var(--red);
		color: var(--white);
	}
}
</style>
