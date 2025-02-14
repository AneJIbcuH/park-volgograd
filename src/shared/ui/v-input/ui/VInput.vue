<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useField } from 'vee-validate'
import type { AnyObject, AnySchema } from 'yup'
import type { MaskType, MaskInputOptions } from 'maska'

interface Props {
	label?: string | null
	name: string
	defaultValue?: string
	validator?: AnySchema<any | any[], AnyObject, undefined, ''> | undefined
	maska?: MaskType
	maskaNumbers?: {
		locale?: string
		fraction?: number
		unsigned?: boolean
	} | null
}

defineOptions({
	inheritAttrs: false,
})

const {
	name,
	validator = undefined,
	label = null,
	maska = null,
	maskaNumbers = null,
	defaultValue = undefined,
} = defineProps<Props>()

const { value, errorMessage, validate, errors } = useField(
	() => name,
	validator,
	{
		validateOnValueUpdate: false,
		initialValue: defaultValue,
	},
)

const onBlur = async () => {
	await validate()
}

const maskOption = reactive<MaskInputOptions>({
	mask: maska,
	eager: true,
})
onMounted(() => {
	if (maskaNumbers) {
		maskOption.number = maskaNumbers
	}
})
</script>

<template>
	<div class="input">
		<div v-if="label" :class="['input-label', { error: errors.length }]">
			{{ label }}
		</div>
		<input
			v-model="value"
			v-maska="maskOption"
			:class="['input-field', { error: errors.length }]"
			:name
			v-bind="$attrs"
			@blur="onBlur"
		/>
		<div v-if="errorMessage" class="input-error">
			{{ errorMessage }}
		</div>
	</div>
</template>

<style scoped lang="scss">
.input-field {
	padding: 10px 20px;
	border-radius: var(--rounded);
	border: 1px solid transparent;
	background-color: var(--white);
	transition: var(--transition-time) all ease-in-out;

	&.error {
		color: var(--red);
		border-color: var(--red);
	}

	&::placeholder {
		color: var(--gray-light);
	}

	&:focus,
	&:active {
		border-color: var(--blue-light);
	}

	&:hover {
		cursor: text;
		border-color: var(--blue);
	}

	&:disabled {
		background: var(--gray-light);
		color: var(--white);
		pointer-events: none;

		&::placeholder {
			color: var(--white);
		}
	}
}

.input-error {
	font-size: 14px;
	color: var(--red);
	margin: 8px 0 0 4px;
}

.input-label {
	margin: 0 0 8px;
	font-weight: 500;

	&.error {
		color: var(--red);
	}
}
</style>
