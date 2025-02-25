<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'

const { scaleMap, ratio } = storeToRefs(useStore())

function enlarge() {
	scaleMap.value += ratio.value
}

function diminish() {
	if (scaleMap.value == 2.3) {
		return
	} else {
		scaleMap.value -= ratio.value
	}
}
</script>

<template>
	<div class="zoom">
		<div class="zoom-scale">
			<VIcon @click="enlarge" name="plus" size="36" class="" />
			<VIcon @click="diminish" name="minus" size="36" class="" />
		</div>
		<div class="zoom-geo">
			<VIcon name="geo" size="42" class="" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.zoom {
	position: fixed;
	right: 80px;
	top: 1744px;
	border-radius: var(--rounded-l);
	padding: 16px;
	width: 128px;
	height: 352px;
	background: var(--white);
	color: var(--white);

	&-scale {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background: var(--yellow);
		width: 96px;
		height: 192px;
		border-radius: var(--rounded-m);
		padding: 24px;
	}

	&-geo {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--yellow);
		width: 96px;
		height: 96px;
		margin-top: 32px;
		border-radius: var(--rounded-m);
	}
}
</style>
