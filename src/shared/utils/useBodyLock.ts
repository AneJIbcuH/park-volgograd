import { ref } from 'vue'

const body = document.querySelector('body')
const modals: NodeListOf<HTMLElement> = document.querySelectorAll('.modal')
const isLock = ref(false)
export const useBodyLock = () => {
	const lock = (): void => {
		const paddingOffset = window.innerWidth - body!.offsetWidth + 'px'
		body!.style.paddingRight = paddingOffset

		modals?.forEach((item: HTMLElement) => {
			item.style.paddingRight = paddingOffset
		})

		body?.classList.add('lock')
		isLock.value = true
	}
	const unlock = (): void => {
		body?.classList.remove('lock')

		modals?.forEach((item: HTMLElement) => {
			item.style.paddingRight = '0px'
		})
		body!.style.paddingRight = '0px'
		isLock.value = false
	}

	return { lock, unlock, isLock }
}
