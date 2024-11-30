<template>
  <v-chart :option="chartOption" class="w-full h-full"></v-chart>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  data: Array<{
    source: string
    target: string
    value: number
  }>
}>()

const chartOption = ref({
  tooltip: {},
  series: [
    {
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 100,
      },
      roam: true,
      label: {
        show: true,
      },
      data: Array.from(new Set(props.data.flatMap((d) => [d.source, d.target]))).map((name) => ({
        name,
      })),
      links: props.data,
    },
  ],
})

watch(
  () => props.data,
  (newData) => {
    chartOption.value.series[0].data = Array.from(
      new Set(newData.flatMap((d) => [d.source, d.target])),
    ).map((name) => ({ name }))
    chartOption.value.series[0].links = newData
  },
  { deep: true },
)
</script>

<style scoped></style>
