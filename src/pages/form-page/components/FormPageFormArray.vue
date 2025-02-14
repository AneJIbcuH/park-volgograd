<script setup lang="ts">
import { VInput } from '@/shared/ui/v-input'
import { ref } from 'vue'
import {
	type GenericObject,
	type InvalidSubmissionContext,
	useForm,
} from 'vee-validate'
import * as yup from 'yup'
import { useToastStore } from '@/shared/ui/v-toast'
import { VButton } from '@/shared/ui/v-button'

const { addToast } = useToastStore()

const products = ref([
	{
		id: 1,
		name: 'phone',
		value: '',
		label: 'Телефон',
		maska: '+7-###-###-##-##',
	},
	{
		id: 2,
		name: 'numbers',
		value: '',
		label: 'Просто цифры в тыщах',
		defaultValue: '123123',
		maskaNumbers: {
			locale: 'ru',
		},
	},
])

const { handleSubmit, values } = useForm({
	validationSchema: {
		phone: yup.string().required('Телефон обязательно').min(16, 'Минимум 16'),
		numbers: yup.string().required('Тыщи обязательно'),
	},
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
	<form @submit="onSubmit" class="form">
		<h1>Массив</h1>
		<VInput
			v-for="product in products"
			v-model="product.value"
			v-bind="product"
			:key="product.id"
		/>
		<VButton>Отправить!</VButton>

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
