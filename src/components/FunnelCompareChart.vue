<template>
  <div class="w-full h-full relative">
    <v-chart v-if="!loading" :option="chartOption" class="w-full h-full"></v-chart>
    <div v-else class="absolute inset-0 flex items-center justify-center">
      <loader-circle class="animate-spin text-blue-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProductAnalysis, type ProductAnalysis } from '@/api/productAnalysis'
import { LoaderCircle } from 'lucide-vue-next'

const data = ref<ProductAnalysis | null>(null)
const loading = ref(true)

onMounted(async () => {
  data.value = await getProductAnalysis()
  loading.value = false
  updateChartOption()
})

const chartOption = ref({})

const updateChartOption = () => {
  if (data.value) {
    chartOption.value = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        data: ['浏览量', '点赞量', '加购量', '购买量'],
      },
      series: [
        {
          name: '产品分析',
          type: 'funnel',
          left: '10%',
          top: 60,
          bottom: 60,
          width: '80%',
          min: 0,
          max: data.value.browseCount,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside',
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid',
            },
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
          },
          emphasis: {
            label: {
              fontSize: 20,
            },
          },
          data: [
            { value: data.value.browseCount, name: '浏览量' },
            { value: data.value.likeCount, name: '点赞量' },
            { value: data.value.addCartCount, name: '加购量' },
            { value: data.value.purchaseCount, name: '购买量' },
          ],
        },
      ],
    }
  }
}
</script>

<style scoped></style>
