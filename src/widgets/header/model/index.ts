import { AppRoutes } from '@/app/providers'
import type { MenuItem } from './types.ts'

let headerLinks: MenuItem[] = [
	{
		id: 1,
		title: 'Home',
		to: AppRoutes.HOME,
	},
]

const devLinks: MenuItem[] = [
	{
		id: 2,
		title: 'UI page',
		to: AppRoutes.UI,
	},
	{
		id: 3,
		title: 'Form page',
		to: AppRoutes.FORM,
	},
	{
		id: 4,
		title: 'Info page',
		to: AppRoutes.INFO,
	},
	{
		id: 5,
		title: 'Main page',
		to: AppRoutes.MAIN,
	},
]

if (window.MODE === 'DEV') {
	headerLinks = [...headerLinks, ...devLinks]
}

export { headerLinks }
