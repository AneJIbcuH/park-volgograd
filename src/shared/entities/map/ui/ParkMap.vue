<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const { scaleMap } = storeToRefs(useStore())

const canvasRef = ref<HTMLCanvasElement | null>(null)
const canvasWidth = 3840
const canvasHeight = 1663

const drawMap = (ctx: CanvasRenderingContext2D) => {
	const img = new Image()
	img.src = 'map.png' // Укажите URL к вашему изображению карты

	img.onload = () => {
		// Нарисуйте изображение на холсте
		ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)

		// Нарисуйте пунктирный маршрут
		drawDottedLine(ctx, [
			{ x: 100, y: 150 },
			{ x: 300, y: 400 },
			{ x: 500, y: 200 },
			{ x: 700, y: 450 },
		])
	}
}

const drawDottedLine = (
	ctx: CanvasRenderingContext2D,
	points: { x: number; y: number }[],
) => {
	ctx.strokeStyle = '#fec820' // Цвет линии
	ctx.lineWidth = 10 // Толщина линии
	ctx.setLineDash([15, 15]) // Установка пунктирного стиля

	ctx.beginPath()
	ctx.moveTo(points[0].x, points[0].y)

	points.forEach((point) => {
		ctx.lineTo(point.x, point.y)
	})

	ctx.stroke()
	ctx.setLineDash([]) // Сбросить стиль линий на сплошной
}

onMounted(() => {
	if (canvasRef.value) {
		const ctx = canvasRef.value.getContext('2d')
		if (ctx) {
			drawMap(ctx)
		}
	}
})
</script>

<template>
	<div class="park-map">
		<canvas
			ref="canvasRef"
			:width="canvasWidth"
			:height="canvasHeight"
			:style="{ transform: `scale(${scaleMap})` }"
		></canvas>
	</div>
</template>

<style scoped lang="scss">
.park-map {
	background: coral;
	width: 100vw;
	height: 100vh;
	overflow: scroll;

	canvas {
		transition: all ease 0.2s;
		transform-origin: left top;
	}
}
</style>
