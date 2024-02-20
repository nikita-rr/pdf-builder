<template>
    <div class="toolbar__title-form">
        <ContentInput v-model="title" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, ref } from 'vue';
import ContentInput from '../ContentInput.vue';

interface ItemData {
    order: number,
    value: string
}
const props = defineProps<{ itemData: ItemData }>()
const title = ref<string>("")

onMounted(() => {
    console.log(props.itemData.value);
    title.value = props.itemData.value
})

</script>

<style lang="scss">
.toolbar__title-form {
    @apply p-2 m-5 border border-gray-400
}

</style>