import { ref } from 'vue'
import { defineStore } from 'pinia'

const TOAST_LIMIT = 2
const TOAST_REMOVE_DELAY = 5000

export interface IToast {
	id: string
	type?: 'default' | 'error' | 'success' | 'warning'
	title: HTMLElement | string
	description?: HTMLElement | string
}

let count = 0

function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER
	return count.toString()
}

export const useToastStore = defineStore('toastsStore', () => {
	const toasts = ref<IToast[]>([])

	const addToast = (toast: Omit<IToast, 'id'>) => {
		const id = genId()
		toasts.value.push({
			...toast,
			id,
		})
		if (toasts.value.length > TOAST_LIMIT) {
			toasts.value.shift()
		}
		scheduleToastRemoval(id)
	}
	const removeToast = (id: string) => {
		toasts.value = toasts.value.filter((item) => item.id !== id)
		clearToastTimeout(id)
	}

	const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

	const scheduleToastRemoval = (toastId: string) => {
		if (toastTimeouts.has(toastId)) return

		const timeout = setTimeout(() => {
			removeToast(toastId)
		}, TOAST_REMOVE_DELAY)

		toastTimeouts.set(toastId, timeout)
	}

	const clearToastTimeout = (toastId: string) => {
		const timeout = toastTimeouts.get(toastId)
		if (timeout) {
			clearTimeout(timeout)
			toastTimeouts.delete(toastId)
		}
	}

	return { toasts, addToast, removeToast }
})
