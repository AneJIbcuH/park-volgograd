export {}

declare global {
	interface Window {
		API: string
		MODE: 'DEV' | 'PROD'
	}
}
