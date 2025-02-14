import type { Component } from 'vue'

export type Tab = {
	id: number
	title: string
	component: Component
	prependIcon?: Component
	appendIcon?: Component
}
