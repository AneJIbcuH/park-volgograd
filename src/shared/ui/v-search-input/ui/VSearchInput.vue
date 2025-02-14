<script setup lang="ts">
// import { useStore } from '@/shared/stores/store'
// import { storeToRefs } from 'pinia'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import { ref } from 'vue';


// const { myinput } = storeToRefs(useStore())

interface Props {
	active: boolean,
	// linkInput?: any
}

const { active } = defineProps<Props>()

const model = defineModel({ required: true })

defineOptions({
	inheritAttrs: false,
})

const linkInput = ref(null)
defineExpose({
	linkInput
})
</script>

<template>
	<div :class="['input', { active: active }]">
		<input v-model="model" class="input-field" v-bind="$attrs" ref="linkInput"/>
		<VIcon class="input-icon" name="search" size="48" />
		<VIcon v-if="active" name="close" size="48" class="input-close" @click="model = ''"/>
	</div>
</template>

<style scoped lang="scss">
.input {
	width: 100%;
	position: relative;
	color: var(--gray-secondary);

	button {
		position: absolute;
		bottom: -60px;
		left: 0;
		background: #c4ffb8;
		border-radius: 15px;
		padding: 5px 20px;

		&:active {
			background: #ffeea1;
		}

		&:hover {
			color: rgb(255, 152, 152);
		}
	}

	&-icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 40px;
		width: 48px;
		height: 48px;
		transition: var(--transition-time) all ease-in-out;
	}

	&-close {
		position: absolute;
		right: 40px;
		top: 50%;
		transform: translateY(-50%);
	}

	&-field {
		font-weight: 500;
		font-size: 40px;
		height: 128px;
		width: 100%;
		padding: 40px 100px 40px 128px;
		border-radius: var(--rounded-l);
		border: 1px solid transparent;
		background-color: var(--white);
		transition: var(--transition-time) all ease-in-out;
		caret-color: var(--yellow);

		&::placeholder {
			color: var(--gray-secondary);
		}
	}
}

.input.active {
	.input-icon {
		color: var(--gray);
		left: 0;
	}

	.input-field {
		width: calc(100% - 88px);
		padding-left: 40px;
		margin-left: 88px;
	}
}
</style>
