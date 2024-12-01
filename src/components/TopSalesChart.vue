<template>
  <v-chart :option="chartOption" class="w-full h-full"></v-chart>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import * as echarts from 'echarts'
import { getTop20PopularItemsByBehavior, type PopularItem } from '@/api/popularTop20'

const data = ref<PopularItem[]>([])

onMounted(async () => {
  data.value = await getTop20PopularItemsByBehavior()
})

const chartOption = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'category',
    data: data.value.map((item) => item.itemId.toString()),
    axisLabel: {},
  },
  yAxis: {
    type: 'value',
    axisLabel: {},
  },
  series: [
    {
      name: '流行度',
      type: 'bar',
      data: data.value.map((item) => item.popularity),
    },
  ],
})

watch(
  () => data.value,
  (newData) => {
    chartOption.value.xAxis.data = newData.map((item) => item.itemId.toString())
    chartOption.value.series[0].data = newData.map((item) => item.popularity)
  },
  { deep: true },
)
</script>

<style scoped></style>
