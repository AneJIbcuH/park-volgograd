<script setup lang="ts">
import IconLogo from '@/shared/icons/IconLogo.vue'
</script>

<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-logo">
				<IconLogo />
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	padding: 20px 0;

	&-logo {
		padding: 14px;
		background: var(--blue);
		width: 250px;
		border-radius: 10px;
		margin: 0 auto;
	}
}
</style>
