<template>
    <div class="pdf-builder__template-form">
        <div v-for="(item, key) in builderStore.body" :key="key">
            <TitleForm v-if="item.type === TemplateItemType.TITLE" :item-data="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBuilderStore, TemplateItemType } from "@/store/builder";
import TitleForm from "./block_types/title/TitleForm.vue";
const builderStore = useBuilderStore();

</script>

<style lang="scss">
.pdf-builder__template-form {
    @apply border border-gray-500 shadow-lg mr-2 w-[878px] min-h-[1240px]
}
</style>