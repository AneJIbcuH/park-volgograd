<script setup lang="ts">
import { ref } from 'vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'

export type Link = {
	icon: string
	name: string
	link: string
}

const links = ref<Link[]>([
	{ icon: 'eat', name: 'Где поесть', link: '' },
	{ icon: 'attractions', name: 'Аттракционы', link: '' },
	{ icon: 'objects', name: 'Основные объекты', link: '' },
	{ icon: 'projects', name: 'Проектируемые аттракционы', link: '' },
	{ icon: 'logistic', name: 'Логистика', link: '' },
])

function search(link: Link) {
	console.log(link.name)
}
</script>

<template>
	<div class="keyboardLinks">
		<div v-for="link in links" class="keyboardLinks-link" @click="search(link)">
			<div class="keyboardLinks-link-icon">
				<VIcon :name="link.icon" size="48" />
			</div>
			<div class="text-xs">{{ link.name }}</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.keyboardLinks {
	display: flex;
	gap: 40px;
	margin-bottom: 20px;

	&-link {
		display: flex;
		flex-direction: column;
		align-items: center;

		&-icon {
			background: var(--white);
			color: var(--gray);
			border-radius: var(--rounded-full);
			padding: 16px;
			width: 80px;
			height: 80px;
		}
	}
}
</style>
