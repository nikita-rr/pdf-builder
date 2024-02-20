<template>
    <div class="pdf-builder__toolbar">
        <h1 class="mt-5 mb-2">Блоки</h1>
        <TitleButton />
        <!-- etc -->
        <h1 class="mt-5 mb-2">Переменные</h1>
        <Variables  />
    </div>
</template>
    
<script setup lang="ts">
import TitleButton from './block_types/title/TitleButton.vue';
import Variables from './Variables.vue';
</script>

<style lang="scss">
.pdf-builder__toolbar {
    @apply w-1/3 min-h-[200px] rounded-lg bg-gray-300 p-5
}
</style>