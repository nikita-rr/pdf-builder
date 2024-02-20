<template>
    <div class="toolbar__title-form" v-html="title"></div>
</template>

<script setup lang="ts">
interface ItemData {
    order: number,
    value: string
}
const props = defineProps<{ itemData: ItemData }>()
let title = props.itemData.value
</script>

<style lang="scss"></style>