import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import imagemin from 'unplugin-imagemin/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		imagemin({
			// Default mode sharp. support squoosh and sharp
			mode: 'sharp',
			beforeBundle: false,
			// Default configuration options for compressing different pictures
			compress: {
				jpg: {
					quality: 80,
				},
				jpeg: {
					quality: 80,
				},
				png: {
					quality: 80,
				},
				webp: {
					quality: 80,
				},
			},
			conversion: [
				{ from: 'jpeg', to: 'webp' },
				{ from: 'JPEG', to: 'webp' },
				{ from: 'png', to: 'webp' },
				{ from: 'PNG', to: 'webp' },
				{ from: 'JPG', to: 'webp' },
				{ from: 'jpg', to: 'webp' },
			],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/app/assets/styles/breakpoint.scss" as *;`
			}
		}
	},
})
