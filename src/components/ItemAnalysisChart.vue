<template>
  <div class="w-full h-full relative">
    <v-chart v-if="!loading" :option="chartOption" class="w-full h-full"></v-chart>
    <div v-else class="absolute inset-0 flex items-center justify-center">
      <loader-circle class="animate-spin text-blue-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { getTop5PopularItems, type PopularItem } from '@/api/popularTop5'
import { LoaderCircle } from 'lucide-vue-next';

const data = ref<PopularItem[]>([])
const loading = ref(true)

onMounted(async () => {
  data.value = await getTop5PopularItems()
  loading.value = false
})

const chartOption = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['浏览量', '点赞量', '购买量', '流行度'],
    textStyle: {},
  },
  xAxis: {
    type: 'category',
    data: data.value.map((item) => item.id.toString()),
    axisLabel: {},
  },
  yAxis: {
    type: 'value',
    axisLabel: {},
  },
  series: [
    {
      name: '浏览量',
      type: 'bar',
      data: data.value.map((item) => item.browseCount),
    },
    {
      name: '点赞量',
      type: 'bar',
      data: data.value.map((item) => item.likeCount),
    },
    {
      name: '购买量',
      type: 'bar',
      data: data.value.map((item) => item.purchaseCount),
    },
    {
      name: '流行度',
      type: 'bar',
      data: data.value.map((item) => item.popularityScore),
    },
  ],
})

watch(
  () => data.value,
  (newData) => {
    chartOption.value.xAxis.data = newData.map((item) => item.id.toString())
    chartOption.value.series[0].data = newData.map((item) => item.browseCount)
    chartOption.value.series[1].data = newData.map((item) => item.likeCount)
    chartOption.value.series[2].data = newData.map((item) => item.purchaseCount)
    chartOption.value.series[3].data = newData.map((item) => item.popularityScore)
  },
  { deep: true },
)
</script>

<style scoped></style>
