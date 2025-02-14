<script setup lang="ts">
import IconChecked from '@/shared/icons/IconChecked.vue'
import { useField } from 'vee-validate'
import type { AnyObject, AnySchema } from 'yup'
import { useId } from 'vue'

interface Props {
	name: string
	defaultValue?: string
	id?: string
	validator?: AnySchema<any | any[], AnyObject, undefined, ''> | undefined
	label?: string
	defaultChecked?: boolean
}

const {
	name,
	defaultValue,
	id = useId(),
	validator = undefined,
	label = null,
} = defineProps<Props>()

const { value, checked, errors, handleChange } = useField(
	() => name,
	validator,
	{
		type: 'checkbox',
		checkedValue: defaultValue,
	},
)
</script>

<template>
	<div :class="['checkbox', { checked: checked, error: errors.length }]">
		<button
			@click="handleChange(value)"
			type="button"
			:id
			:class="['checkbox-field', { error: errors.length }]"
		>
			<span v-if="checked">
				<IconChecked class="checkbox-icon" />
			</span>
		</button>
		<label
			v-if="label"
			:for="id"
			:class="['checkbox-label', { error: errors.length }]"
		>
			{{ label }}
		</label>
	</div>
</template>

<style scoped lang="scss">
.checkbox {
	display: flex;
	align-items: center;
	gap: 16px;
	border-radius: var(--rounded);
	padding: 32px;
	font-size: 40px;
	line-height: 120%;
	background: var(--bg);
	color: var(--gray);
	transition: all var(--transition-time) linear;

	&-field {
		width: 48px;
		height: 48px;
		cursor: pointer;
		border: 2.25px solid var(--yellow);
		border-radius: var(--rounded-full);
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		transition: all var(--transition-time) linear;
		flex-shrink: 0;

		svg {
			width: 48px;
			height: 48px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	&-icon {
		color: var(--yellow);
	}

	&.error {
		.checkbox-field {
			border-color: var(--red);
		}

		.checkbox-label {
			color: var(--red);
		}
	}

	&.checked {
		color: var(--white);
		background: var(--yellow);
		font-weight: 700;

		.checkbox-field {
			background: var(--white);
		}
	}
}
</style>
