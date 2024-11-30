<template>
  <v-chart :option="chartOption" class="w-full h-full"></v-chart>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  data: Array<{
    name: string
    sales: number
  }>
}>()

const chartOption = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'category',
    data: props.data.map((item) => item.name),
    axisLabel: {
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
    },
  },
  series: [
    {
      name: '销量',
      type: 'bar',
      data: props.data.map((item) => item.sales),
    },
  ],
})

watch(
  () => props.data,
  (newData) => {
    chartOption.value.xAxis.data = newData.map((item) => item.name)
    chartOption.value.series[0].data = newData.map((item) => item.sales)
  },
  { deep: true },
)
</script>

<style scoped></style>
