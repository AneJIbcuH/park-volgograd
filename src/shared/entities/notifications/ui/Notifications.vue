<script setup lang="ts">
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
	<div :class="[active ? 'notifications open' : 'notifications']">
		<div v-if="!active" class="notifications-small">
			<VIcon
				@click="active = !active"
				name="notification"
				size="128"
				class="notifications-small-icon"
			/>
			<div class="notifications-small-dot"></div>
		</div>
		<div v-else class="notifications-big">
			<div class="title">Уведомления</div>
			<VIcon
				name="close"
				size="48"
				class="notifications-big-icon"
				@click="active = !active"
			/>
			<div class="notifications-big-content">
				<div class="notification">
					<div class="notification-icon">
						<VIcon name="swim" size="48" />
					</div>
					<div class="notification-text">
						<div class="subtitle subtitle-s">
							Погружение в подводный мир начинается!
						</div>
						<div class="text text-s">
							Через 5 минут откроется новый аттракцион — погружение в подводный
							мир! Не пропустите уникальное шоу!
						</div>
						<div class="notification-text-time">8 мин назад</div>
					</div>
				</div>
				<div class="notification">
					<div class="notification-icon">
						<VIcon name="eat" size="48" />
					</div>
					<div class="notification-text">
						<div class="subtitle subtitle-s">
							Вкусные угощения уже ждут вас!
						</div>
						<div class="text text-s">
							На территории парка открылись новые точки с вкусными угощениями!
							Скорее попробуйте наши эксклюзивные десерты и напитки!
						</div>
						<div class="notification-text-time">15 мин назад</div>
					</div>
				</div>
				<div class="notification">
					<div class="notification-icon">
						<VIcon name="car" size="48" />
					</div>
					<div class="notification-text">
						<div class="subtitle subtitle-s">
							Захватывающие гонки начинаются!
						</div>
						<div class="text text-s">
							Приглашаем всех любителей скорости на захватывающие гоночные
							аттракционы! Приходите и испытайте незабываемые эмоции!
						</div>
						<div class="notification-text-time">1 ч назад</div>
					</div>
				</div>
				<div class="notification">
					<div class="notification-icon">
						<VIcon name="car" size="48" />
					</div>
					<div class="notification-text">
						<div class="subtitle subtitle-s">
							Захватывающие гонки начинаются!
						</div>
						<div class="text text-s">
							Приглашаем всех любителей скорости на захватывающие гоночные
							аттракционы! Приходите и испытайте незабываемые эмоции!
						</div>
						<div class="notification-text-time">1 ч назад</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.notifications {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 20px;
	right: 20px;
	width: 256px;
	height: 256px;
	background: var(--white);
	border-radius: var(--rounded-full);
	transition: all 0.5s ease-out;
	overflow: hidden;
	scale: 0.5;

	&-small {
		&-icon {
			color: var(--gray-secondary);
		}

		&-dot {
			position: absolute;
			background: #ff7940;
			width: 24px;
			height: 24px;
			border-radius: var(--rounded-full);
			right: 52px;
			top: 52px;
		}
	}

	&-big {
		display: flex;
		flex-direction: column;
		gap: 40px;

		&-icon {
			position: absolute;
			right: 42px;
			top: 56px;
			color: var(--gray-secondary);
		}

		&-content {
			width: 1110px;
			height: 552px;
			display: flex;
			flex-direction: column;
			gap: 40px;
			overflow-x: scroll;

			.notification {
				display: flex;
				gap: 20px;
				height: 164px;
				border-bottom: 2px solid var(--gray-secondary);
				padding: 20px 0;

				&-text {
					display: flex;
					flex-direction: column;
					gap: 20px;
					position: relative;

					&-time {
						position: absolute;
						top: 10px;
						right: 0;
						font-size: 20px;
						color: var(--gray);
					}
				}

				&-icon {
					display: flex;
					flex-shrink: 0;
					justify-content: center;
					align-items: center;
					background: var(--yellow);
					border-radius: var(--rounded-full);
					width: 96px;
					height: 96px;
					color: var(--black);
				}

				&:last-child {
					border: none;
				}
			}
		}
	}
}

.open {
	border-radius: var(--rounded-l);
	padding: 40px;
	top: 80px;
	right: 80px;
	width: 1190px;
	height: 748px;
	align-items: flex-start;
	justify-content: flex-start;
	scale: 1;
}
</style>
