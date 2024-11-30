<template>
  <v-chart :option="chartOption" class="w-full h-full"></v-chart>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  data: Array<{
    date: string
    purchase_count: number
    visit_count: number
    add_to_cart_count: number
  }>
}>()

const chartOption = ref({
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['购买量', '访问量', '加购量'],
    textStyle: {
    },
  },
  xAxis: {
    type: 'category',
    data: props.data.map((item) => item.date),
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
      name: '购买量',
      type: 'line',
      data: props.data.map((item) => item.purchase_count),
    },
    {
      name: '访问量',
      type: 'line',
      data: props.data.map((item) => item.visit_count),
    },
    {
      name: '加购量',
      type: 'line',
      data: props.data.map((item) => item.add_to_cart_count),
    },
  ],
})

watch(
  () => props.data,
  (newData) => {
    chartOption.value.xAxis.data = newData.map((item) => item.date)
    chartOption.value.series[0].data = newData.map((item) => item.purchase_count)
    chartOption.value.series[1].data = newData.map((item) => item.visit_count)
    chartOption.value.series[2].data = newData.map((item) => item.add_to_cart_count)
  },
  { deep: true },
)
</script>

<style scoped></style>
