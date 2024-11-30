<script lang="ts">
import { ref } from 'vue'
import ChinaMap from '@/components/ChinaMap.vue'
import CardWrapper from '@/components/CardWrapper.vue'
import RecordCard from '@/components/RecordCard.vue'
import ItemAnalysisChart from '@/components/ItemAnalysisChart.vue'
import TopSalesChart from '@/components/TopSalesChart.vue'
import AssociationNetworkChart from '@/components/AssociationNetworkChart.vue'
import TimeSeriesChart from '@/components/TimeSeriesChart.vue'
import SankeyChart from '@/components/SankeyChart.vue'

export default {
  components: {
    ChinaMap,
    CardWrapper,
    RecordCard,
    ItemAnalysisChart,
    TopSalesChart,
    AssociationNetworkChart,
    TimeSeriesChart,
    SankeyChart,
  },
  setup() {
    const mapView = ref<'map' | 'bar'>('map')
    const toggleMapView = () => {
      mapView.value = mapView.value === 'map' ? 'bar' : 'map'
    }

    const mostPopItemsData = ref([
      {
        name: '商品A',
        visit_count: Math.floor(Math.random() * 2000),
        purchase_count: Math.floor(Math.random() * 500),
        view_count: Math.floor(Math.random() * 3000),
        add_to_cart_count: Math.floor(Math.random() * 600),
      },
      {
        name: '商品B',
        visit_count: Math.floor(Math.random() * 2000),
        purchase_count: Math.floor(Math.random() * 500),
        view_count: Math.floor(Math.random() * 3000),
        add_to_cart_count: Math.floor(Math.random() * 600),
      },
      {
        name: '商品C',
        visit_count: Math.floor(Math.random() * 2000),
        purchase_count: Math.floor(Math.random() * 500),
        view_count: Math.floor(Math.random() * 3000),
        add_to_cart_count: Math.floor(Math.random() * 600),
      },
      {
        name: '商品D',
        visit_count: Math.floor(Math.random() * 2000),
        purchase_count: Math.floor(Math.random() * 500),
        view_count: Math.floor(Math.random() * 3000),
        add_to_cart_count: Math.floor(Math.random() * 600),
      },
      {
        name: '商品E',
        visit_count: Math.floor(Math.random() * 2000),
        purchase_count: Math.floor(Math.random() * 500),
        view_count: Math.floor(Math.random() * 3000),
        add_to_cart_count: Math.floor(Math.random() * 600),
      },
    ])

    const topSalesData = ref([
      { name: '商品A', sales: Math.floor(Math.random() * 2000) },
      { name: '商品B', sales: Math.floor(Math.random() * 2000) },
      { name: '商品C', sales: Math.floor(Math.random() * 2000) },
      { name: '商品D', sales: Math.floor(Math.random() * 2000) },
      { name: '商品E', sales: Math.floor(Math.random() * 2000) },
      { name: '商品F', sales: Math.floor(Math.random() * 2000) },
      { name: '商品G', sales: Math.floor(Math.random() * 2000) },
      { name: '商品H', sales: Math.floor(Math.random() * 2000) },
      { name: '商品I', sales: Math.floor(Math.random() * 2000) },
      { name: '商品J', sales: Math.floor(Math.random() * 2000) },
      { name: '商品K', sales: Math.floor(Math.random() * 2000) },
      { name: '商品L', sales: Math.floor(Math.random() * 2000) },
      { name: '商品M', sales: Math.floor(Math.random() * 2000) },
      { name: '商品N', sales: Math.floor(Math.random() * 2000) },
      { name: '商品O', sales: Math.floor(Math.random() * 2000) },
      { name: '商品P', sales: Math.floor(Math.random() * 2000) },
      { name: '商品Q', sales: Math.floor(Math.random() * 2000) },
      { name: '商品R', sales: Math.floor(Math.random() * 2000) },
      { name: '商品S', sales: Math.floor(Math.random() * 2000) },
      { name: '商品T', sales: Math.floor(Math.random() * 2000) },
    ])

    const associationData = ref([
      { source: '商品A', target: '商品B', value: Math.floor(Math.random() * 100) },
      { source: '商品A', target: '商品C', value: Math.floor(Math.random() * 100) },
      { source: '商品B', target: '商品C', value: Math.floor(Math.random() * 100) },
      { source: '商品D', target: '商品E', value: Math.floor(Math.random() * 100) },
      { source: '商品F', target: '商品G', value: Math.floor(Math.random() * 100) },
      { source: '商品H', target: '商品I', value: Math.floor(Math.random() * 100) },
      { source: '商品J', target: '商品K', value: Math.floor(Math.random() * 100) },
      { source: '商品L', target: '商品M', value: Math.floor(Math.random() * 100) },
      { source: '商品N', target: '商品O', value: Math.floor(Math.random() * 100) },
      { source: '商品P', target: '商品Q', value: Math.floor(Math.random() * 100) },
      { source: '商品R', target: '商品S', value: Math.floor(Math.random() * 100) },
      { source: '商品T', target: '商品A', value: Math.floor(Math.random() * 100) },
      { source: '商品B', target: '商品D', value: Math.floor(Math.random() * 100) },
      { source: '商品C', target: '商品F', value: Math.floor(Math.random() * 100) },
      { source: '商品E', target: '商品H', value: Math.floor(Math.random() * 100) },
      { source: '商品G', target: '商品J', value: Math.floor(Math.random() * 100) },
      { source: '商品I', target: '商品L', value: Math.floor(Math.random() * 100) },
      { source: '商品K', target: '商品N', value: Math.floor(Math.random() * 100) },
      { source: '商品M', target: '商品P', value: Math.floor(Math.random() * 100) },
      { source: '商品O', target: '商品R', value: Math.floor(Math.random() * 100) },
    ])

    const generateRandomData = (days: number) => {
      const data = []
      for (let i = 0; i < days; i++) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        data.push({
          date: date.toISOString().split('T')[0],
          purchase_count: Math.floor(Math.random() * 200),
          visit_count: Math.floor(Math.random() * 400),
          add_to_cart_count: Math.floor(Math.random() * 100),
        })
      }
      return data
    }

    const timeSeriesData = ref(generateRandomData(30))

    const sankeyData = ref([
      { source: '浏览', target: '加购', value: Math.floor(Math.random() * 1000) },
      { source: '加购', target: '购买', value: Math.floor(Math.random() * 500) },
      { source: '浏览', target: '购买', value: Math.floor(Math.random() * 200) },
      { source: '浏览', target: '收藏', value: Math.floor(Math.random() * 300) },
      { source: '收藏', target: '加购', value: Math.floor(Math.random() * 400) },
      { source: '收藏', target: '购买', value: Math.floor(Math.random() * 100) },
      { source: '浏览', target: '分享', value: Math.floor(Math.random() * 150) },
      { source: '分享', target: '加购', value: Math.floor(Math.random() * 250) },
      { source: '分享', target: '购买', value: Math.floor(Math.random() * 50) },
    ])

    return {
      mapView,
      toggleView: toggleMapView,
      mostPopItemsData,
      topSalesData,
      associationData,
      timeSeriesData,
      sankeyData,
    }
  },
}
</script>

<template>
  <header class="pb-4">
    <h1 class="text-4xl font-bold text-center">数据洞察平台</h1>
  </header>

  <main class="grow grid grid-cols-11 gap-4">
    <div class="col-span-3 flex flex-col gap-4" id="leftPanel">
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold">最受欢迎的商品</h2>
        <ItemAnalysisChart :data="mostPopItemsData" class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold">销量前 20 项商品</h2>
        <TopSalesChart
          :data="topSalesData.sort((b, a) => a.sales - b.sales)"
          class="w-full h-64 md:h-80 lg:h-96"
        />
      </CardWrapper>
    </div>

    <div class="col-span-5 flex flex-col gap-4" id="midPanel">
      <div class="flex flex-row gap-4">
        <RecordCard :value="Math.floor(Math.random() * 20000)" :title="'购买记录'" class="flex-1" />
        <RecordCard :value="Math.floor(Math.random() * 20000)" :title="'总用户'" class="flex-1" />
        <RecordCard :value="Math.floor(Math.random() * 20000)" :title="'总商品'" class="flex-1" />
      </div>

      <CardWrapper class="size-full p-4 rounded-lg shadow-lg">
        <div class="flex flex-row justify-end pb-4">
          <button
            @click="toggleView"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            {{ mapView == 'map' ? '柱状图' : '地理热力图' }}
          </button>
        </div>
        <ChinaMap :mapView="mapView" class="rounded-lg overflow-hidden" />
      </CardWrapper>

      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold">用户购买行为时间序列图</h2>
        <TimeSeriesChart :data="timeSeriesData" class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
    </div>
    <div class="col-span-3 flex flex-col gap-4" id="rightPanel">
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2">
        <h2 class="text-xl font-semibold">商品购买关联网络图</h2>
        <AssociationNetworkChart :data="associationData" class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
      <CardWrapper class="size-full p-4 rounded-lg shadow-lg space-y-2 bg-opacity-90">
        <h2 class="text-xl font-semibold">用户行为路径桑基图</h2>
        <SankeyChart :data="sankeyData" class="w-full h-64 md:h-80 lg:h-96" />
      </CardWrapper>
    </div>
  </main>

  <footer class="p-4 mt-4 bg-gray-800 rounded-lg">
    <p class="text-center text-gray-400">Footer</p>
  </footer>
</template>

<style scoped></style>
