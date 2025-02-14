<script setup lang="ts">
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const hidden = ref(true)
const router = useRouter()

setTimeout(() => {
	hidden.value = !hidden.value
}, 100)
</script>

<template>
	<div class="home" @click="router.push('/ui')">
		<div class="home-bg"></div>
		<div :class="['home-logo', { 'hidden-logo': hidden }]">
			<img src="/logo.png" alt="" />
		</div>
		<div :class="['home-info', { hidden: hidden }]">
			<div class="home-info-title">
				Навигация по парку аттракционов <br />
				в г. Волгограде
			</div>
			<div class="home-info-text">
				Управление приложением осуществляется через навигацию, расположенную
				слева. Актуальную информацию о скидках, акциях, новостях и анонсах
				мероприятий вы найдёте <br />
				на сайте и в социальных сетях «Мой парк» ВКонтакте и Телеграм.
			</div>
		</div>
		<div :class="['home-qr', { hidden: hidden }]">
			<div class="home-qr-code">
				<VIcon name="qr-code" size="290" />
				<div>Вконтакте</div>
			</div>
			<div class="home-qr-code">
				<VIcon name="qr-code" size="290" />
				<div>Телеграмм</div>
			</div>
			<div class="home-qr-code">
				<VIcon name="qr-code" size="290" />
				<div>Официальный сайт</div>
			</div>
		</div>
		<div :class="['subtitle', { hidden: hidden }]">Нажмите для продолжения</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	gap: 80px;

	&-logo {
		width: 910px;
		height: 597px;
		transition: all var(--transition-time-home) ease;

		img {
			width: 100%;
		}
	}

	&-info {
		transition: all var(--transition-time-home) ease 0.5s;

		&-title {
			font-weight: 700;
			font-size: 96px;
			text-align: center;
			color: var(--white);
		}

		&-text {
			margin-top: 40px;
			font-size: 48px;
			text-align: center;
			color: rgba(255, 255, 255, 0.8);
		}
	}

	&-qr {
		border-radius: var(--rounded-s);
		background: var(--white);
		transition: all var(--transition-time-home) ease 1s;
		width: 1030px;
		height: 412px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		&-code {
			:deep(svg) {
				color: #006022;
			}

			div {
				margin-top: 15px;
				text-align: center;
				font-size: 24px;
				color: var(--gray);
			}
		}
	}

	&-bg {
		position: absolute;
		z-index: -1;
		inset: 0;
		width: 105%;
		height: 105%;
		background-image: url('/bg-home.png');
		background-size: cover;
		filter: blur(50px) brightness(0.9);
		animation: moveCircle 5s linear infinite;
	}

	.subtitle {
		position: absolute;
		color: var(--white);
		bottom: 160px;
		cursor: pointer;
		transition: all var(--transition-time-home) ease 1.5s;
		animation: shaking 2s linear infinite;
		will-change: font-size;

		&:active {
			color: var(--gray-secondary);
		}
	}
}

.hidden {
	opacity: 0;

	&-logo {
		filter: blur(50px);
		width: 0;
		height: 0;
	}
}

@keyframes moveCircle {
	0% {
		left: -50px;
	}
	12% {
		left: -25px;
		top: -25px;
	}
	25% {
		top: -50px;
	}
	37% {
		top: -25px;
		right: -25px;
	}

	50% {
		right: -50px;
	}

	62% {
		right: -25px;
		bottom: -25px;
	}
	75% {
		bottom: -50px;
	}

	87% {
		bottom: -25px;
		left: -25px;
	}

	100% {
		left: -50px;
	}
}

@keyframes shaking {
	0%,
	100% {
		font-size: 40px;
	}
	25%,
	75% {
		font-size: 50px;
	}
	50% {
		font-size: 60px;
	}
}
</style>
