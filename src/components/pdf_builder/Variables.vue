<template>
    <div class="toolbar__variables">
        <button @click="addVariable(item)" class="toolbar__variables-item" v-for="item in variables" :key="item.path">
            {{ item.display }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { useBuilderStore, TemplateItemType } from "@/store/builder";

const builderStore = useBuilderStore();
const variables = [
    {
        path: "{{ENTITY_PUBLIC_NAME}}",
        subDisplay: "Проверка: ",
        display: "Название обьекта"
    }
]

function addVariable(vardata: any) {
    builderStore.insertVariable(vardata.path)
}

</script>

<style lang="scss">
.toolbar__variables {
    &-item {
        @apply w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
    }
}
</style>