<script setup lang="ts"></script>
<template>
	<main class="main" ref="app">
		<div class="page">
			<slot name="default" />
		</div>
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
