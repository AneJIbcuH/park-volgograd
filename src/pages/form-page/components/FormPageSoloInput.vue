<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'
import {
	type GenericObject,
	type InvalidSubmissionContext,
	useForm,
} from 'vee-validate'
import { VButton } from '@/shared/ui/v-button'
import { useToastStore } from '@/shared/ui/v-toast'
import { VInput } from '@/shared/ui/v-input'
import { VCheckbox } from '@/shared/ui/v-checkbox'

const { addToast } = useToastStore()
const { handleSubmit, values } = useForm({
	initialValues: {
		policy: 'true',
	},
})

const model = ref({
	title: '',
	policy: 'true',
})

const onSubmitSuccess = (values: GenericObject) => {
	addToast({
		title: 'Форма отправлена',
		description: JSON.stringify(values, null, 2),
	})
}
const onSubmitError = (ctx: InvalidSubmissionContext) => {
	addToast({
		title: 'При отправке произошла ошибка',
		type: 'error',
		description: JSON.stringify(ctx.errors, null, 2),
	})
}

const onSubmit = handleSubmit(onSubmitSuccess, onSubmitError)
</script>

<template>
	<form @submit="onSubmit">
		<h1>Ref с валидацией</h1>
		<VInput
			v-model="model.title"
			:validator="
				yup
					.string()
					.required('Заполнить обязательно')
					.email('Как email')
					.min(3, '3 минимум')
			"
			name="email"
			placeholder="Ваш email"
			label="Email плз"
		/>
		<VCheckbox
			name="policy"
			default-value="true"
			:default-checked="true"
			label="Согласен с политикой конфиденциальности"
			:validator="yup.boolean().required()"
		/>
		<div>{{ values }}</div>
		<VButton>Отправить!</VButton>
	</form>
</template>

<style scoped lang="scss">
form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
