<script setup lang="ts">
import { ref } from 'vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import VButton from '@/shared/ui/v-button/VButton.vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/shared/stores/store'

export type Link = {
	icon: string
	name: string
	link: string
}

const { widget } = storeToRefs(useStore())
const links = ref<Link[]>([
	{ icon: 'attractions', name: 'Аттракционы', link: '' },
	{ icon: 'eat', name: 'Кафе', link: '' },
	{ icon: 'wc', name: 'Туалет', link: '' },
	{ icon: 'alpak', name: 'Альпаки', link: '' },
	{ icon: 'dinosaur', name: 'Динозавры', link: '' },
	{ icon: 'shatl', name: 'Шатл', link: '' },
	{ icon: 'afisha', name: 'Афиша', link: '' },
	{ icon: 'sale', name: 'Скидки и льготы', link: '' },
])

function search(link: Link) {
	console.log(link.name)
}
</script>

<template>
	<div class="links">
		<div class="links-block">
			<div
				v-for="link in links"
				:key="link.name"
				@click="search(link)"
				class="links-block-link"
			>
				<div class="link">
					<VIcon :name="link.icon" size="48" />
				</div>
				<div class="text-xs">{{ link.name }}</div>
			</div>
		</div>
		<VButton @click="widget = 'objects'" class="links-btn" radius="l"
			>Все объекты</VButton
		>
	</div>
</template>

<style scoped lang="scss">
.links {
	display: flex;
	border-radius: var(--rounded-l);
	padding: 20px;
	background: var(--white);

	&-block {
		display: flex;
		gap: 40px;
		padding: 0 40px;

		&-link {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			width: 153px;
			gap: 10px;

			.link {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 80px;
				height: 80px;
				color: var(--gray);
				background: var(--bg);
				border-radius: var(--rounded-full);
			}
		}
	}

	&-btn {
		height: 146px;
		margin-left: auto;
	}
}
</style>
