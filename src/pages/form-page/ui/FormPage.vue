<script setup lang="ts">
import FormPageFormObject from '../components/FormPageFormObject.vue'
import FormPageFormArray from '../components/FormPageFormArray.vue'
import FormPageSoloInput from '../components/FormPageSoloInput.vue'
import { type FormField, VAutoForm } from '@/shared/ui/v-auto-form'
import * as yup from 'yup'
import { VButton } from '@/shared/ui/v-button'
import { useToastStore } from '@/shared/ui/v-toast'
import type { GenericObject, InvalidSubmissionContext } from 'vee-validate'

const { addToast } = useToastStore()

const formSchema: { fields: FormField[] } = {
	fields: [
		{
			label: 'Имя',
			name: 'name',
			defaultValue: 'Вовка Петровка',
			validator: yup.string().required('Обязательно'),
		},
		{
			label: 'Почта',
			name: 'email',
			defaultValue: '123@asd.ru',
			validator: yup.string().email('Как email').required('Обязательно'),
		},
		{
			label: 'Пароль',
			name: 'password',
			type: 'password',
			validator: yup.string().min(6, 'Минимум 6').required('Обязательно'),
		},
		{
			name: 'policy',
			as: 'checkbox',
			label: 'Соглы с условиями',
			defaultValue: 'true',
			defaultChecked: true,
			validator: yup.boolean().required(),
		},
		{
			name: 'banana',
			as: 'checkbox',
			label: 'Красный банан',
			defaultValue: 'red',
			defaultChecked: true,
			validator: yup.array().min(1).required(),
		},
		{
			name: 'banana',
			as: 'checkbox',
			label: 'Желтый банан',
			defaultValue: 'yellow',
			defaultChecked: true,
			// validator: yup.array().min(1).required(),
		},
		{
			name: 'banana',
			as: 'checkbox',
			label: 'Голубой банан',
			defaultValue: 'blue',
			// defaultChecked: true,
			// validator: yup.array().min(1).required(),
		},
	],
}

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
</script>

<template>
	<div class="container">
		<h1 style="margin-bottom: 50px">Формы управляемые</h1>
		<div class="row">
			<div class="col">
				<h1 style="margin-bottom: 20px">Автоформа</h1>
				<VAutoForm @submit="onSubmitSuccess" @error="onSubmitError" :formSchema>
					<template #action>
						<VButton variant="white">Submit</VButton>
					</template>
				</VAutoForm>
			</div>
			<div class="col">
				<FormPageFormObject />
			</div>
			<div class="col">
				<FormPageFormArray />
			</div>
			<div class="col">
				<FormPageSoloInput />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.row {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 32px;
}
</style>
