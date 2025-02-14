<script setup lang="ts">
import { headerLinks } from '../model'
</script>

<template>
	<header class="header">
		<div class="container">
			<div class="header-nav">
				<router-link
					v-for="link in headerLinks"
					:key="link.id"
					:to="link.to"
					class="header-link"
					active-class="header-link-active"
				>
					{{ link.title }}
				</router-link>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding: 20px 0;

	&-nav {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	&-link {
		&:hover {
			color: var(--gray-light);
		}

		&-active {
			color: var(--blue);
		}
	}
}
</style>
