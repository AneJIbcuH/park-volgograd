<script setup lang="ts">
import { ref } from 'vue'
import VButton from '@/shared/ui/v-button/VButton.vue'
import VModal from '@/shared/ui/v-modal/ui/VModal.vue'
import VIcon from '@/shared/ui/v-icon/VIcon.vue'
</script>

<template>
	<div class="park-map"></div>
</template>

<style scoped lang="scss">
    .park-map {
        width: 100vw;
        height: 100vh;
        background-image: url('/map.png');
        background-size: contain;
    }
</style>
