<template>
    <button
        class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="appendTitleItem">
        Заголовок
    </button>
</template>

<script setup lang="ts">
import { useBuilderStore, TemplateItemType } from "@/store/builder";
const builderStore = useBuilderStore();
function appendTitleItem() {
    builderStore.appendItem({
        id: 123123,
        value: "<h1>123</h1>",
        type: TemplateItemType.TITLE,
        order: 1
    })
}
</script>