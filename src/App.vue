<template>
  <PdfBuilder />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PdfBuilder from './components/pdf_builder/PdfBuilder.vue';

export default defineComponent({
  name: 'App',
  components: {
    PdfBuilder
  }
});
</script>

<style lang="scss">

</style>
