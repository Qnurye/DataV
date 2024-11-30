<template>
  <CardWrapper
    class="size-full flex justify-between items-center p-4 rounded-lg shadow-md"
  >
    <span class="text-xl font-semibold text-yellow-300">{{ title }}</span>
    <span class="font-mono text-3xl text-green-300">{{ value }}</span>
  </CardWrapper>
</template>

<script lang="ts">
import CardWrapper from '@/components/CardWrapper.vue'

export default {
  components: {
    CardWrapper,
  },
  props: {
    value: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: 'Record',
    }
  },
}
</script>

<style scoped></style>
