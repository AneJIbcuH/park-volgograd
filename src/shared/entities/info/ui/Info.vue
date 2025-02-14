<script setup lang="ts">
import { ref } from 'vue'
import VButton from '@/shared/ui/v-button/VButton.vue'
import VModal from '@/shared/ui/v-modal/ui/VModal.vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'

const hidden = ref(true)
const openModal = ref(false)
const modalName = ref<'tg' | 'vk'>()

function openVk() {
	modalName.value = 'vk'
	openModal.value = !openModal.value
}

function openTg() {
	modalName.value = 'tg'
	openModal.value = !openModal.value
}

setTimeout(() => {
	hidden.value = !hidden.value
}, 100)
</script>

<template>
	<div class="info">
		<VModal :model-value="openModal">
			<div class="modal" v-if="modalName == 'vk'">
				<div class="modal-info">
					<div class="title">Группа в контакте</div>
					<div class="text">
						Отсканируйте QR-код для вступление в сообщество в социальной сети
						Вконтакте
					</div>
				</div>
				<VIcon name="qr-code-vk" size="300" />
				<VButton @click="openModal = !openModal">Закрыть</VButton>
			</div>
			<div class="modal" v-if="modalName == 'tg'">
				<div class="modal-info">
					<div class="title">Канал в телеграмм</div>
					<div class="text">
						Отсканируйте QR-код для вступление в канал в Телеграмм
					</div>
				</div>
				<VIcon name="qr-code-vk" size="300" />
				<VButton @click="openModal = !openModal">Закрыть</VButton>
			</div>
		</VModal>
		<div class="info-social">
			<div :class="['info-social-park', 'block', { hidden: hidden }]">
				<div :class="['park', { 'hidden-park': hidden }]">
					<div class="title">Центральный парк культуры и отдыха</div>
					<div class="text text-l">
						Центральный парк культуры и отдыха — это современное пространство с
						зонами отдыха, аттракционами и развлечениями для детей и взрослых. В
						парке есть более 40 аттракционов, в числе которых колесо обозрения,
						двухэтажная свадебная карусель, самый большой в России крытый
						автодром.<br />
						<br />
						В теплое время года в парке работает более 30 различных активностей:
						колесо обозрения, свадебная карусель, крытый автодром, спортивная
						зона и множество других аттракционов. Весной и осенью можно
						покататься на катамаранах в озере «Лагуна». Летом работает большой
						детский водоем, а зимой он превращается в открытый каток.<br />
						<br />
						Также в парке работает фуд-корт: можно купить кофе, чай, хот-доги,
						бургеры. Каждые выходные мы проводим мероприятия для детей и
						взрослых. Фестивали национальных культур, семейные праздники, квесты
						и многое другое.
					</div>
				</div>
				<div :class="['hotline', { 'hidden-hotline': hidden }]">
					<div class="hotline-title">Телефон горячей линии</div>
					<div class="hotline-num">+7 (937) 097-14-78</div>
				</div>
			</div>
			<div class="info-social-vk block">
				<div :class="['title', { 'hidden-vk': hidden }]">Группа Вконтакте</div>
				<div :class="['text-l', { 'hidden-vk': hidden }]">
					Подписывайтесь, чтобы не упустить акции, розыгрыши, новости и
					интересные события в Волгограде!
				</div>
				<VButton
					@click="openVk"
					variant="white"
					radius="xs"
					:class="['vk-btn', { 'hidden-vk': hidden }]"
				>
					Вступить в группу
				</VButton>
				<img
					src="/info/vk-i.png"
					alt=""
					:class="['vk-iphone', { 'hidden-vk-iphone': hidden }]"
				/>
			</div>
			<div class="info-social-tg block">
				<div :class="['title', { 'hidden-tg': hidden }]">Телеграмм Канал</div>
				<div :class="['text-l', { 'hidden-tg': hidden }]">
					Задать любой вопрос, поделиться идеями или мнением о посещении парка
					можно в телеграм-канале директора ЦПКиО Андрея Еркина
				</div>
				<VButton
					@click="openTg"
					variant="white"
					radius="xs"
					:class="['tg-btn', { 'hidden-tg': hidden }]"
				>
					Подписаться на канал
				</VButton>
				<img
					src="/info/tg-i.png"
					alt=""
					:class="['tg-iphone', { 'hidden-tg-iphone': hidden }]"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.info {
	width: 100%;
	border-radius: var(--rounded-xl) var(--rounded-xl) 0 0;
	background: var(--bg);

	&-social {
		padding: 40px;
		background: var(--white);
		border-radius: var(--rounded-l);

		.block {
			border-radius: var(--rounded);
			padding: 80px;
		}

		&-park {
			background-image: url('/info/park.png');
			background-size: cover;
			height: 1277px;
			position: relative;
			transition: all var(--transition-time-info) ease;
			overflow: hidden;

			.park {
				transition: all var(--transition-time-info) ease;

				.text-l {
					margin-top: 24px;
					width: 1036px;
				}
			}

			.hotline {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: end;
				background-image: url('/info/green.png');
				background-size: contain;
				position: absolute;
				padding: 32px;
				width: 774px;
				height: 246px;
				bottom: 0;
				right: 0;
				color: var(--white);
				transition: all var(--transition-time-info) ease;

				&-title {
					font-size: 48px;
				}

				&-num {
					font-weight: 700;
					font-size: 80px;
				}
			}
		}

		&-vk {
			display: flex;
			flex-direction: column;
			align-items: start;
			background-image: url('/info/vk-bg.png');
			background-size: cover;
			margin: 40px 0;
			height: 794px;
			position: relative;
			overflow: hidden;

			.title {
				color: var(--white);
				transition: all var(--transition-time-info) ease;
			}

			.text-l {
				color: var(--white-alpha-95);
				margin-top: 24px;
				width: 802px;
				transition: all var(--transition-time-info) ease;
			}

			.vk-btn {
				margin-top: auto;
				color: #2787f5;
				transition: all var(--transition-time-info) ease;
			}

			.vk-iphone {
				width: 686px;
				position: absolute;
				top: 80px;
				right: 80px;
				transition: all var(--transition-time-info) ease;
			}
		}

		&-tg {
			display: flex;
			flex-direction: column;
			align-items: start;
			background-image: url('/info/tg-bg.png');
			background-size: cover;
			height: 794px;
			position: relative;
			overflow: hidden;

			.title {
				color: var(--white);
				transition: all var(--transition-time-info) ease;
			}

			.text-l {
				color: var(--white-alpha-95);
				margin-top: 24px;
				width: 802px;
				transition: all var(--transition-time-info) ease;
			}

			.tg-btn {
				margin-top: auto;
				color: #18a3e6;
				transition: all var(--transition-time-info) ease;
			}

			.tg-iphone {
				width: 686px;
				position: absolute;
				top: 80px;
				right: 80px;
				transition: all var(--transition-time-info) ease;
			}
		}

		.hidden {
			background-image: url('/info/park1.png');

			&-park {
				transform: translateX(-300px);
			}

			&-hotline {
				opacity: 0;
				right: -300px;
			}

			&-vk {
				transform: translateX(-300px);

				&-iphone {
					transform: rotateY(90deg);
				}
			}

			&-tg {
				transform: translateX(-300px);

				&-iphone {
					transform: rotateY(90deg);
				}
			}
		}
	}
}

.modal {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	gap: 40px;
	padding: 20px;

	.text {
		width: 900px;
		margin-top: 20px;
	}
}
</style>
