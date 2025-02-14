<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { url } from '@/shared/api/axiosInstance'
import { formatTime } from '@/shared/utils/formatDate'
import VButton from '@/shared/ui/v-button/VButton.vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import VModal from '@/shared/ui/v-modal/ui/VModal.vue'

const show = ref(false)
const { widget, cardAttraction } = storeToRefs(useStore())
</script>

<template>
	<div class="about-attraction">
		<div class="about-attraction-img">
			<img :src="url + cardAttraction?.image" alt="" />
		</div>
		<div class="about-attraction-info">
			<div class="title">
				{{ cardAttraction?.title
				}}<VIcon name="close" size="48" class="icon" @click="widget = 'map'" />
			</div>
			<div class="info-tickets">
				<div v-for="tag in cardAttraction?.tags" :key="tag.ulid" class="text">
					{{ tag.title }}
				</div>
			</div>
			<div class="info-time">
				<div class="subtitle">
					Режим работы
					<div class="subtitle-close">Закрыто до завтра</div>
				</div>
				<div class="info-time-chip">
					<div class="text text-s">Будни</div>
					<div class="chip-time">
						{{ formatTime(cardAttraction!.workingHoursFrom) }}-{{
							formatTime(cardAttraction!.workingHoursTo)
						}}
					</div>
				</div>
				<div class="info-time-chip">
					<div class="text text-s">Выходные</div>
					<div class="chip-time">
						{{ formatTime(cardAttraction!.weekendWorkingHoursFrom) }}-{{
							formatTime(cardAttraction!.weekendWorkingHoursTo)
						}}
					</div>
				</div>
			</div>
			<div class="info-number">
				<div class="subtitle">Номер телефона</div>
				<div class="text">{{ cardAttraction?.phone }}</div>
			</div>
		</div>
		<div class="about-attraction-rate">
			<div class="subtitle">*Примечание</div>
			<div class="rate-common rate">
				<div class="subtitle-s subtitle">Тариф общий</div>
				<div class="text">
					До 3 лет бесплатно . С животными проходить запрещено. Сопровождение
					обязательно до 14 лет (на сопровождающего приобретается билет).
				</div>
			</div>
			<div class="rate-vip rate">
				<div class="subtitle-s subtitle">Тариф VIP</div>
				<div class="text">
					До 4 человек<br />
					2 круга
				</div>
			</div>
		</div>
		<div class="about-attraction-pricing">
			<div class="pricing-price">
				<div class="text">Цена</div>
				<div class="subtitle">от {{ cardAttraction?.price }} &#8381;</div>
			</div>
			<VButton outline><VIcon name="way" size="48" />Построить маршрут</VButton>
			<VButton @click="show = !show"
				><VIcon name="cart" size="48" />Купить</VButton
			>
		</div>
		<VModal :model-value="show">
			<div class="about-attraction-modal">
				<div class="title">Купить билет</div>
				<div class="text">
					Отсканируйте QR-код для совершения покупки на официальном сайте
				</div>
				<VIcon name="qr-code" size="300" class="icon" />
				<VButton @click="show = !show">Закрыть</VButton>
			</div>
		</VModal>
	</div>
</template>

<style scoped lang="scss">
.about-attraction {
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	border-radius: var(--rounded-l);
	background: var(--white);
	padding: 40px;
	width: 100%;

	&-img {
		width: 940px;
		height: 626px;
		background: var(--bg);
		background-size: cover;

		img {
			width: 100%;
			border-radius: var(--rounded);
		}
	}

	&-info {
		display: flex;
		flex-direction: column;
		gap: 41px;
		width: 940px;

		.title {
			width: 100%;
			height: 76px;
			position: relative;

			.icon {
				position: absolute;
				top: 0;
				right: 0;
				color: var(--gray-secondary);
			}
		}

		.info-tickets {
			display: flex;
			width: 100%;
			gap: 10px;
			overflow-x: scroll;

			.text {
				background: var(--bg);
				border-radius: var(--rounded);
				padding: 16px 32px;
			}
		}

		.info-time {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;

			.subtitle {
				height: 85px;
				position: relative;
				width: 100%;

				.subtitle-close {
					position: absolute;
					left: 0;
					bottom: 0;
					font-size: 24px;
					color: var(--red);
				}
			}

			&-chip {
				border-radius: var(--rounded);
				background: var(--bg);
				padding: 24px 32px;
				width: 460px;

				.chip-time {
					font-size: 36px;
					margin-top: 24px;
				}
			}
		}

		.info-number {
			.text {
				margin-top: 20px;
			}
		}
	}

	&-rate {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		.subtitle {
			width: 100%;
			margin-bottom: 20px;
		}

		.rate {
			width: 955px;

			.subtitle {
				margin-bottom: 10px;
			}
		}
	}

	&-pricing {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		gap: 20px;

		.pricing-price {
			margin-right: auto;

			.subtitle {
				margin-top: 10px;
			}
		}
	}

	&-modal {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 20px;
		gap: 20px;

		.text {
			width: 900px;
		}

		.icon {
			margin: 20px;
		}
	}
}
</style>
