<template>
    <div class="pdf-builder__content-input" contenteditable="true" @click="setInputTarget" v-html="props.modelValue"
        @input="updateModel">
    </div>
</template>

<script setup lang="ts">
import { useBuilderStore } from "@/store/builder";

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])
const builderStore = useBuilderStore();


function updateModel(e: Event) {
    if(typeof e !== 'object') {
        emit('update:modelValue', e)
    }
}

const setInputTarget = (e: any) => {
    const selection = getSelection()
    const target = e.target
    if (selection && target) {
        builderStore.setCaret({ selection, target })
    }
}

</script>

<style lang="scss">
.pdf-builder__content-input {
    &:focus-visible {
        outline: none;
    }
}
</style>