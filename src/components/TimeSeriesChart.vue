<template>
  <v-chart :option="chartOption" class="w-full h-full"></v-chart>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { getDayPurchase, type DayPurchase } from '@/api/dayPurchase'

const data = ref<DayPurchase[]>([])

onMounted(async () => {
  data.value = await getDayPurchase()
})

const chartOption = ref({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(50, 50, 50, 0.7)',
    borderColor: '#333',
    borderWidth: 1,
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    data: ['销量'],
    textStyle: {
      color: '#333',
      fontSize: 14,
    },
  },
  xAxis: {
    type: 'category',
    data: data.value.map((item) => item.date),
    axisLabel: {
      color: '#333',
      fontSize: 12,
    },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#333',
      fontSize: 12,
    },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    splitLine: {
      lineStyle: {
        color: '#eee',
      },
    },
  },
  series: [
    {
      name: '销量',
      type: 'line',
      data: data.value.map((item) => item.purchaseCount),
      itemStyle: {
        color: '#5470c6',
      },
      lineStyle: {
        width: 2,
      },
      areaStyle: {
        color: 'rgba(84, 112, 198, 0.2)',
      },
      smooth: true,
    },
  ],
})

watch(
  () => data.value,
  (newData) => {
    chartOption.value.xAxis.data = newData.map((item) => item.date)
    chartOption.value.series[0].data = newData.map((item) => item.purchaseCount)
  },
  { deep: true },
)
</script>

<style scoped></style>
