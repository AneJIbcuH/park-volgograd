<script setup lang="ts">
import { VInput } from '@/shared/ui/v-input'
import { VButton } from '@/shared/ui/v-button'
import type { FormField } from '@/shared/ui/v-auto-form'
import {
	type GenericObject,
	type InvalidSubmissionContext,
	useForm,
} from 'vee-validate'
import { VCheckbox } from '@/shared/ui/v-checkbox'
import * as yup from 'yup'

interface Props {
	formSchema: {
		fields: FormField[]
	}
}

const { formSchema } = defineProps<Props>()
const emit = defineEmits<{
	submit: [values: GenericObject]
	error: [ctx: InvalidSubmissionContext]
}>()

const createSchema = () => {
	return formSchema.fields
		.map(({ name, validator }) => ({ name, validator }))
		.reduce((acc: Record<string, any>, item) => {
			if (acc[item.name]) return acc

			acc[item.name] = item.validator || ''
			return acc
		}, {})
}

const createInitialValues = () =>
	formSchema.fields
		.map(({ name, value, defaultChecked, defaultValue }) => ({
			name,
			value,
			defaultChecked,
			defaultValue,
		}))
		.reduce((acc: Record<string, any>, item) => {
			if (!item.defaultChecked) return acc
			if (acc[item.name]) {
				acc[item.name] = Array.from([acc[item.name], item.defaultValue]).flat()
				return acc
			}

			acc[item.name] = item.defaultValue || ''
			return acc
		}, {})

const { handleSubmit, values } = useForm({
	validationSchema: yup.object(createSchema()),
	initialValues: createInitialValues(),
})

const onSubmitSuccess = (values: GenericObject) => {
	emit('submit', values)
}
const onSubmitError = (ctx: InvalidSubmissionContext) => {
	emit('error', ctx)
}

const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError)
</script>

<template>
	<form @submit="onSubmit" class="form">
		<div
			v-for="{ as = 'input', name, ...attrs } in formSchema.fields"
			:key="name"
			class="form-control"
		>
			<VInput v-if="as === 'input'" :name v-bind="attrs" />
			<VCheckbox v-else-if="as === 'checkbox'" :name v-bind="attrs" />
		</div>

		<slot />
		<slot name="action">
			<VButton>Отправить!</VButton>
		</slot>

		<div>
			{{ values }}
		</div>
	</form>
</template>

<style scoped lang="scss">
.form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
