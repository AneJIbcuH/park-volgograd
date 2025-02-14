<script setup lang="ts">
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
</script>
<template>
	<main class="main" ref="app">
		<Header />
		<div class="page">
			<slot name="default" />
		</div>
		<Footer />
	</main>
</template>

<style scoped>
.main {
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
}

.page {
	flex: 1 1 auto;
}
</style>
