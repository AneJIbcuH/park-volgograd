<script setup lang="ts"></script>

<template>
	<div class="content">
		<h2>1. Что такое переменные, и какие способы их объявления ты знаешь?</h2>
		<ul>
			<li>Рассказать про var, let, const и различия</li>
			<li>Пример использования</li>
		</ul>

		<h2>2. Какие типы данных существубт в js?</h2>
		<ul>
			<li>
				Рассказать про string, number, boolean, null, object, undefined, symbol,
				bigint. Последние 2 не критично
			</li>
			<li>Какие типа передаются по ссылке и что это значит</li>
			<li>Как определить тип обьекта(typeof)</li>
		</ul>

		<h2>3. Что такое условия в js, как работают (if, if else, else)?</h2>
		<ul>
			<li>Рассказать про работу условий</li>
			<li>Логические операторы (&&, ||, !), тернарное выражение ? :</li>
		</ul>

		<h2>4. Оператор равенства и строго равенства == \ ===</h2>
		<ul>
			<li>Примеры использования, что возвращает</li>
			<li>Различие между строгим и не строгим</li>
		</ul>
		<h2>5. Функции в js</h2>
		<ul>
			<li>
				Что такое expression/declaration и различие (упомянуть область выозова,
				контекст)
			</li>
		</ul>

		<h2>5. Что такое массивы?</h2>
		<ul>
			<li>Рассказать про массивы и испольнование</li>
			<li>
				Упоминание базовых методов: push, pop, shift, unshift, splice или др
			</li>
			<li>Знание методов итерации: forEach, map, filter, reduce</li>
		</ul>
		<h2>6. Что такое объекты в JavaScript ?</h2>
		<ul>
			<li>Рассказать про обьекты и испольнование</li>
			<li>Доступ к свойствам/ключам обьекта</li>
		</ul>
		<h2>7. Как работают асинхронные операции в JavaScript?</h2>
		<ul>
			<li>Рассказать про promise, async/await</li>
			<li>Что такое setTimeout/setInterval</li>
			<li>Примеры использования</li>
		</ul>

		<h2>8. Что такое DOM(document object model)?</h2>
		<ul>
			<li>Расскать про dom, что это дерево документа</li>
			<li>
				Как получить элементы для работы с ним? document.getElementById,
				querySelector, querySelectorAll
			</li>
			<li>
				Как работать с классами/аттрибутами элементов? classList, getAttribute,
				setAttribute
			</li>
			<li>Крастко про работу с событиями элементов</li>
		</ul>
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
