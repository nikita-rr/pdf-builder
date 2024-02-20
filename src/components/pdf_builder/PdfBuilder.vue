<template>
    <div class="pdf-builder">
        <div class="pdf-builder__body">
            <Workspace />
            <Toolbar />
        </div>
    </div>
</template>

<script setup>

import Toolbar from './Toolbar.vue'
import Workspace from './Workspace.vue'

</script>

<style lang="scss">
.pdf-builder {
    @apply p-10 rounded bg-gray-200 text-black;
    &__body {
        @apply flex justify-between
    }
}
</style>