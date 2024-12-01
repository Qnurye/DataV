<script lang="ts">
import { ref } from 'vue'
import ChinaMap from '@/components/ChinaMap.vue'
import CardWrapper from '@/components/CardWrapper.vue'
import RecordCard from '@/components/RecordCard.vue'
import ItemAnalysisChart from '@/components/ItemAnalysisChart.vue'
import TopSalesChart from '@/components/TopSalesChart.vue'
import TimeSeriesChart from '@/components/TimeSeriesChart.vue'
import FunnelCompareChart from '@/components/FunnelCompareChart.vue' // Import the new component
import FrequentItemListGraph from '@/components/FrequentItemListGraph.vue' // Import the new component
import AiAsk from '@/components/AiAsk.vue' // Import the new component

export default {
  components: {
    ChinaMap,
    CardWrapper,
    RecordCard,
    ItemAnalysisChart,
    TopSalesChart,
    TimeSeriesChart,
    FunnelCompareChart, // Register the new component
    FrequentItemListGraph, // Register the new component
    AiAsk // Register the new component
  },
  setup() {
    const mapView = ref<'map' | 'bar'>('map')
    const toggleMapView = () => {
      mapView.value = mapView.value === 'map' ? 'bar' : 'map'
    }

    return {
      mapView,
      toggleMapView
    }
  }
}
</script>

<template>
  <header class="pb-4">
    <h1
      class="text-4xl font-bold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
    >
      Tremendous Company Data Insight Platform
    </h1>
  </header>

  <main class="grow grid grid-cols-1 md:grid-cols-11 gap-4">
    <div class="col-span-1 md:col-span-3 flex flex-col gap-4" id="leftPanel">
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold"> 最受欢迎的商品 </h2>
        <ItemAnalysisChart class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold"> 销量前 20 项商品 </h2>
        <TopSalesChart class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
    </div>

    <div class="col-span-1 md:col-span-5 flex flex-col gap-4" id="midPanel">
      <div class="flex flex-col md:flex-row gap-4">
        <RecordCard :value="Math.floor(Math.random() * 20000)" :title="'购买记录'" class="flex-1" />
        <RecordCard :value="Math.floor(Math.random() * 20000)" :title="'总用户'" class="flex-1" />
        <RecordCard :value="Math.floor(Math.random() * 20000)" :title="'总商品'" class="flex-1" />
      </div>

      <CardWrapper class="size-full p-4 rounded-lg shadow-lg">
        <div class="flex flex-row justify-end pb-4">
          <button
            @click="toggleMapView"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            {{ mapView == 'map' ? '柱状图' : '地理热力图' }}
          </button>
        </div>
        <ChinaMap :mapView="mapView" class="rounded-lg overflow-hidden" />
      </CardWrapper>

      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold"> 用户购买行为时间序列图 </h2>
        <TimeSeriesChart class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
    </div>
    <div class="col-span-1 md:col-span-3 flex flex-col gap-4" id="rightPanel">
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold"> 商品购买关联网络图 </h2>
        <FrequentItemListGraph class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
      <!--      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">-->
      <!--        <h2 class="text-xl font-semibold"> 商品购买关联网络图 </h2>-->
      <!--        <AssociationNetworkChart :data="associationData" class="w-full h-64 md:h-80 lg:h-96" />-->
      <!--      </CardWrapper>-->
      <!--      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">-->
      <!--        <h2 class="text-xl font-semibold"> 用户行为路径桑基图 </h2>-->
      <!--        <SankeyChart :data="sankeyData" class="w-full h-64 md:h-80 lg:h-96" />-->
      <!--      </CardWrapper>-->
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold"> 产品分析漏斗图 </h2>
        <FunnelCompareChart class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
    </div>
    <AiAsk />
  </main>
</template>

<style scoped></style>
