<script setup lang="ts">
import { useToastStore, Toast } from '../'

const toastStore = useToastStore()
</script>

<template>
	<teleport to="body">
		<div class="toast-provider">
			<transition-group name="toast">
				<Toast
					v-for="toast in toastStore.toasts"
					:key="toast.id"
					v-bind="toast"
				/>
			</transition-group>
		</div>
	</teleport>
</template>

<style scoped lang="scss">
.toast-provider {
	position: fixed;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
	z-index: 2;
	padding: 10px;
}

.toast-enter-active,
.toast-leave-active {
	transition: all 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
