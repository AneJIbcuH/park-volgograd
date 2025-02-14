import type { AnyObject, AnySchema } from 'yup'

export interface FormField {
	name: string
	id?: string
	defaultChecked?: boolean
	value?: string
	defaultValue?: string
	label?: string
	as?: 'input' | 'select' | 'checkbox' | 'radio' | 'switch'
	validator?: AnySchema<any | any[], AnyObject, undefined, ''> | undefined

	[key: string]: any
}
