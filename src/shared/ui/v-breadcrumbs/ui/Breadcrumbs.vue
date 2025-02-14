<script lang="ts" setup>
interface BreadCrumb {
	path: string
	title: string
}

interface Props {
	breadcrumbs: BreadCrumb[]
}

defineProps<Props>()
</script>

<template>
	<nav id="breadcrumbs" class="breadcrumbs" aria-label="Breadcrumb">
		<ul class="breadcrumbs-list">
			<li class="breadcrumbs-link">
				<RouterLink to="/"> Главная</RouterLink>
			</li>
			<li
				v-for="(breadcrumb, index) in breadcrumbs"
				:key="index"
				class="breadcrumbs-link"
			>
				<RouterLink :to="'/' + breadcrumb.path">
					{{ breadcrumb.title }}
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.breadcrumbs {
	margin: 20px 0;

	&-list {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		flex-wrap: wrap;
	}

	&-link {
		color: var(--black);
		display: flex;
		align-items: center;
		gap: 8px;
		transition: color 0.3s;

		&:hover {
			color: var(--blue-light);
		}

		&:not(:last-child):after {
			content: '/';
			display: block;
			color: var(--black);
		}

		&:last-child {
			color: var(--gray-light);
			pointer-events: none;
		}
	}
}
</style>
