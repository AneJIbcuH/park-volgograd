<script setup lang="ts">
import { ref } from 'vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'

const hidden = ref(true)

setTimeout(() => {
	hidden.value = !hidden.value
}, 100)
</script>

<template>
	<div class="info">
		<div class="info-social">
			<div :class="['info-social-park', { hidden: hidden }]">
				<div :class="['park', { 'hidden-park': hidden }]">
					<div class="title">Центральный парк культуры и отдыха</div>
					<div class="text text-l">
						ЦПКиО Волгограда — это современное пространство для отдыха. В парке
						есть более 40 активностей для детей и взрослых, в любое время года
						вы найдете подходящее развлечение.
						<br />
						<br />
						У ЦПКиО есть собственная сеть питания «Вкуснопарк» — 4 фуд-корта в
						разных уголках парка уже ждут вас!
						<br />
						<br />
						И, конечно, заглядывайте к нам на мероприятия. За анонсами удобно
						следить в наших соцсетях.
						<br />
						<br />
						Приятного отдыха и до новых встреч!
					</div>
				</div>
				<div :class="['hotline', { 'hidden-hotline': hidden }]">
					<div class="hotline-title">Телефон горячей линии</div>
					<div class="hotline-num">+7 (937) 097-14-78</div>
				</div>
			</div>

			<div class="info-social-block tg">
				<div :class="['title', { 'hidden-text': hidden }]">
					Телеграмм <br />бот
				</div>
				<div :class="['text-l', { 'hidden-text': hidden }]">
					Хотите купить билет и не стоять в очереди? Заведите бесплатную
					платежную карту парка с помощью телеграм-бота! Там же собрали цены,
					акции и другую полезную информацию.
				</div>
				<div class="qr-code" :class="['qr-code', { 'hidden-qr': hidden }]">
					<VIcon name="qr-code-tg" size="264" class="icon" />
				</div>
			</div>

			<div class="info-social-block vk">
				<div :class="['title', { 'hidden-text': hidden }]">
					Группа Вконтакте
				</div>
				<div :class="['text-l', { 'hidden-text': hidden }]">
					Новости, анонсы мероприятий, скидки и акции — узнавайте все первыми в
					нашем сообществе ВКонтакте «Мой парк».
				</div>
				<div class="qr-code" :class="['qr-code', { 'hidden-qr': hidden }]">
					<VIcon name="qr-code-vk" size="264" class="icon" />
				</div>
			</div>
			<div class="info-social-block tg">
				<div :class="['title', { 'hidden-text': hidden }]">
					Телеграмм<br />
					Канал
				</div>
				<div :class="['text-l', { 'hidden-text': hidden }]">
					Задать вопрос, выиграть что-нибудь крутое или просто быть в курсе всех
					новостей можно с помощью телеграм-канала «Мой парк». Подписывайтесь!
				</div>
				<div class="qr-code" :class="['qr-code', { 'hidden-qr': hidden }]">
					<VIcon name="qr-code-tg" size="264" class="icon" />
				</div>
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
		display: flex;
		flex-wrap: wrap;
		gap: 40px;

		&-park {
			width: 100%;
			background-image: url('/info/park.png');
			background-size: cover;
			position: relative;
			transition: all var(--transition-time-info) ease;
			overflow: hidden;
			border-radius: var(--rounded);
			padding: 80px;

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

		&-block {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			background-size: cover;
			overflow: hidden;
			padding: 64px 32px;
			border-radius: var(--rounded);
			width: 613px;
			height: 1044px;

			.title {
				color: var(--white);
				transition: all var(--transition-time-info) ease;
			}

			.text-l {
				color: var(--white-alpha-95);
				margin-top: 24px;
				transition: all var(--transition-time-info) ease;
			}

			.qr-code {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: auto;
				width: 300px;
				height: 300px;
				border-radius: 32px;
				background: var(--white);
				transition: all var(--transition-time-info) ease;
			}
		}

		.vk {
			background-image: url('/info/vk-bg.png');
		}

		.tg {
			background-image: url('/info/tg-bg.png');
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

			&-text {
				transform: translateX(-300px);
			}

			&-qr {
				scale: 0.5;
				// transform: translateX(300px);
				opacity: 0;
			}
		}
	}
}
</style>
