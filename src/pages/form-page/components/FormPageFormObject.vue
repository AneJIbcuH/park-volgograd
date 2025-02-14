<script setup lang="ts">
import { reactive } from 'vue'
import { VInput } from '@/shared/ui/v-input'
import {
	type GenericObject,
	type InvalidSubmissionContext,
	useForm,
} from 'vee-validate'
import { useToastStore } from '@/shared/ui/v-toast'
import { VButton } from '@/shared/ui/v-button'
import * as yup from 'yup'

const { addToast } = useToastStore()
const data = reactive({
	name: '',
	age: '13',
})

const { handleSubmit } = useForm({
	validationSchema: {
		name: yup.string().required('Заполните имя').min(10, 'Минимум 10 символов'),
		age: yup.string().required('Заполните возраст'),
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
		<h1>Обьект</h1>
		<VInput
			v-for="(val, key) in data"
			v-model="data[key]"
			:key="key"
			:name="key"
			:default-value="data[key]"
		/>
		<VButton>Отправить!</VButton>
		<div>
			{{ data }}
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
