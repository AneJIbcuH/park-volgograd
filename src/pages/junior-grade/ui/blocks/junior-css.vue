<script setup lang="ts"></script>

<template>
	<div class="content">
		<h2>
			1. Способы написания стилей - подключаемые(файлом), в разметке в теге
			style, инлайн
		</h2>
		<ul>
			<li>
				Обьяснить про каждый способ использования, какой в приоритетный и почему
			</li>
		</ul>

		<h2>2. Каскадность и приоритет стилей</h2>
		<ul>
			<li>
				Рассказать что такое каскадность(или наложение стилей) стилей и как это
				работает
			</li>
			<li>!important - для чего и хорошо ли его использовать(нет)</li>
		</ul>

		<h2>3. Какие виды позиционирования элементов существуют в CSS?</h2>
		<ul>
			<li>
				static, relative, absolute(относительно родителя), fixed(относительно
				окна браузера), sticky.
			</li>
			<li>кратко обьяснить каждый</li>
			<li>
				left, right, top, bottom, z-index - когда сработает и как сработает
			</li>
		</ul>

		<h2>4. Что такое Flexbox и каковы его основные свойства</h2>
		<ul>
			<li>
				Основные свойства контейнера: display: flex, justify-content,
				align-items, flex-wrap.
			</li>
			<li>Свойства для элементов: flex-grow, flex-shrink, flex-basis.</li>
		</ul>

		<h2>5. Что такое медиазапросы в CSS, и для чего они используются?</h2>
		<ul>
			<li>
				Объяснение, что медиазапросы адаптируют стили под разные устройства
			</li>
			<li>Пример использования - @media() min-width, max-width</li>
		</ul>

		<h2>6. Что такое БЭМ?</h2>
		<ul>
			<li>Кратко о БЭМ и для чего он</li>
			<li>Пример реализации карточки товара структуры:</li>
		</ul>

		<pre>
карточка
	картинка
	наименование товара
	описание товара
	кнопка перехода на страницу товара
		</pre
		>

		<pre>
.card
	.card-img
		img
	.card-title
	.card-description
	.btn.btn-primary
		</pre
		>
	</div>
</template>

<style scoped>
*:not(:first-child) {
	margin-top: 20px;
}
ul {
	padding-left: 20px;
}
</style>
