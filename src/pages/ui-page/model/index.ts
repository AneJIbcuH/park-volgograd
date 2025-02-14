import { h, markRaw, ref } from 'vue'
import type { Tab } from '@/shared/ui/v-tabs'
import Test from '@/pages/junior-grade/ui/test.vue'
import IconMusic from '@/shared/icons/IconMusic.vue'
import Test2 from '@/pages/junior-grade/ui/test2.vue'

interface Mock {
	id: string
	title: string
	content: string
}

const mock: Mock[] = [
	{
		id: '1',
		title: 'test title',
		content: '<div>lorem 10</div> <br> <br> <h1>Some title!</h1>',
	},
]

export const tabs = ref<Tab[]>([
	{
		id: 1,
		title: 'Первый таб',
		component: markRaw(Test),
		prependIcon: markRaw(IconMusic),
	},
	{
		id: 2,
		title: 'Второй таб',
		component: markRaw(Test2),
		appendIcon: markRaw(IconMusic),
	},
	{
		id: 1,
		title: 'Рендер функция h()',
		component: h('div', { class: 'h-render-tab', innerHTML: mock[0].content }),
	},
])
