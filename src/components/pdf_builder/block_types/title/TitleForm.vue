<template>
    <div>
        <div class="toolbar__title-form">
            <ContentInput v-model="props.itemData.value" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ContentInput from '../ContentInput.vue';

interface ItemData {
    order: number,
    value: string
}
const props = defineProps<{ itemData: ItemData }>()
</script>

<style lang="scss">
.toolbar__title-form {
    @apply p-2 m-5 border border-gray-400
}
</style>