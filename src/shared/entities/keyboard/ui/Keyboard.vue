<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { keys, type Key } from './model'
import { gsap } from 'gsap'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
import KeyboardLinks from '../../keyboard-links/ui/KeyboardLinks.vue'

const { widget, searchString, linkInput } = storeToRefs(useStore())
const upperCase = ref(false)
const variant = ref<'valueNUM_RUS' | 'valueNUM_ENG' | 'valueRUS' | 'valueENG'>(
	'valueRUS',
)

const firstOpen = ref(true)
setTimeout(() => {
	firstOpen.value = !firstOpen.value
}, 100)

function writting(key: Key) {
	setTimeout(() => {
		if (key[variant.value] === 'backspace') {
			backSpace()
		} else if (key[variant.value] === 'shift') {
			upperCase.value = !upperCase.value
		} else if (key[variant.value] === '&123_RUS') {
			variant.value = 'valueNUM_RUS'
		} else if (key[variant.value] === '&123_ENG') {
			variant.value = 'valueNUM_ENG'
		} else if (key[variant.value] === 'АБВ____') {
			variant.value = 'valueRUS'
		} else if (key[variant.value] === 'ABC____') {
			variant.value = 'valueENG'
		} else if (key[variant.value] === 'ENG____') {
			variant.value = 'valueENG'
		} else if (key[variant.value] === 'ENG_NUM') {
			variant.value = 'valueNUM_ENG'
		} else if (key[variant.value] === 'RUS____') {
			variant.value = 'valueRUS'
		} else if (key[variant.value] === 'RUS_NUM') {
			variant.value = 'valueNUM_RUS'
		} else if (key[variant.value] === 'Enter') {
			console.log('Ввод')
		} else {
			addLetter(key)
		}
	}, 50)
}

function closeKeyboard() {
	widget.value = 'map'
	searchString.value = ''
}

function addLetter(key: Key) {
	linkInput.value.linkInput.focus()
	const startPos = linkInput.value.linkInput.selectionStart
	const endPos = linkInput.value.linkInput.selectionEnd
	const text = searchString.value
	let newText = ''
	if (upperCase.value) {
		newText =
			text.substring(0, startPos) +
			key[variant.value].toUpperCase() +
			text.substring(endPos)
	} else {
		newText =
			text.substring(0, startPos) + key[variant.value] + text.substring(endPos)
	}

	searchString.value = newText

	setTimeout(() => {
		//переставляем каретку вправо на 1 символ т.к. печатаем
		linkInput.value.linkInput.setSelectionRange(startPos + 1, startPos + 1)
	}, 0)
}

function backSpace() {
	linkInput.value.linkInput.focus()
	const startPos = linkInput.value.linkInput.selectionStart
	const text = searchString.value

	let newText = ''
	const end = text.substring(startPos)
	newText = text.slice(0, startPos - 1) + end

	searchString.value = newText
	setTimeout(() => {
		//переставляем каретку влево на 1 символ т.к. удаляем
		linkInput.value.linkInput.setSelectionRange(startPos - 1, startPos - 1)
	}, 0)
}

const left = ref()
const top = ref()
function onBeforeEnter(el: any) {
	console.log('beforte enter')
}

function onEnter(el: any, done: any) {
	console.log('enter')
}
function onLeave(el: Element, done: any) {
	console.log('leave')
	console.log('top', top.value)
	console.log('left', left.value)
	el.style.position = 'absolute'
	el.style.left = left.value + 'px'
	el.style.top = top.value + 'px'
}

function onBeforeLeave(el: Element) {
	// console.log('before leave client rect:', el.getBoundingClientRect())
	// console.log('before leave innerHTML:', el.innerHTML)
	console.log('before leave innerHTML:')
	left.value = el.offsetLeft
	top.value = el.offsetTop
}
</script>

<template>
	<div class="keyboard" :class="[{ firstOpen: firstOpen }]">
		<KeyboardLinks />
		<div class="keyboard-board">
			<TransitionGroup
				name="keys"
				:appear="true"
				@before-enter="onBeforeEnter"
				@enter="onEnter"
				@leave="onLeave"
				@before-leave="onBeforeLeave"
			>
				<div
					v-for="(key, index) in keys"
					:key="key[variant]"
					:data-index="index"
					:class="[
						key.class,
						upperCase && key[variant] != 'Enter' ? 'upperCase' : '',
					]"
					@click="writting(key)"
				>
					{{
						key.icon ? '' : key.cut ? key[variant].slice(0, -4) : key[variant]
					}}
					<VIcon
						v-if="key.icon"
						:name="key.icon"
						:size="key.size"
						class="keyboard-board-icon"
					/>
				</div>
			</TransitionGroup>
		</div>
		<div class="keyboard-close" @click="closeKeyboard">
			<VIcon name="close" size="48" class="keyboard-close-icon" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.keyboard {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	transition: all 0.4s ease-out;

	&-board {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
		border-radius: var(--rounded-l);
		padding: 64px;
		width: 1712px;
		height: 560px;
		background: var(--white);
		// position: relative;

		&-icon {
			color: transparent;
		}

		.key {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 32px;
			width: 96px;
			height: 96px;
			background: var(--bg);
			font-weight: 500;
			font-size: 32px;
			color: var(--gray);

			&-144 {
				width: 144px;
			}

			&-192 {
				width: 192px;
			}

			&-1024 {
				width: 1024px;
				color: var(--bg);
			}

			&:active {
				box-shadow: 4px 4px 10px 1px var(--yellow);
			}
		}

		.upperCase {
			text-transform: uppercase;
		}
	}

	&-close {
		border-radius: var(--rounded-l);
		padding: 32px 64px;
		width: 176px;
		height: 112px;
		background: var(--white);

		&-icon {
			color: var(--gray);
		}
	}
}

.firstOpen {
	transform: translateY(500px);
	opacity: 0;
	filter: blur(50px);
	scale: 1%;
}
</style>
