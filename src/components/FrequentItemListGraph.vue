<template>
  <v-chart :option="chartOption" class="w-full h-full"></v-chart>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFrequentItemList, type FrequentItemList } from '@/api/frequentItemList'

const data = ref<FrequentItemList[]>([])

onMounted(async () => {
  data.value = await getFrequentItemList()
  updateChartOption()
})

const chartOption = ref({})

const updateChartOption = () => {
  if (data.value.length > 0) {
    const nodes = Array.from(new Set(data.value.flatMap((item) => item.itemList))).map((name) => ({
      name,
    }))
    const links = data.value.flatMap((item) =>
      item.itemList
        .map((source, index) =>
          item.itemList.slice(index + 1).map((target) => ({ source, target, value: item.count })),
        )
        .flat(),
    )

    chartOption.value = {
      tooltip: {},
      series: [
        {
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 100,
          },
          roam: true,
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          label: {
            show: true,
          },
          data: nodes,
          links: links,
        },
      ],
    }
  }
}
</script>

<style scoped></style>
