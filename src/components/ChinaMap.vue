<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import chinaJson from '@/assets/map.geo.json'
import { getProvinces, type Province } from '@/api/province'

const props = defineProps<{ mapView: 'map' | 'bar' }>()

echarts.registerMap('China', chinaJson as never, {})

const data = ref([] as Province[])

onMounted(async () => {
  data.value = await getProvinces()
  data.value.sort((a, b) => a.value - b.value)
  updateOptions()
})

const mapOption = ref({})
const barOption = ref({})

const updateOptions = () => {
  mapOption.value = {
    visualMap: {
      left: 'right',
      min: data.value[0].value,
      max: data.value[data.value.length - 1].value,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026',
        ],
      },
      text: ['High', 'Low'],
      calculable: true,
    },
    series: [
      {
        id: 'population',
        type: 'map',
        roam: true,
        map: 'China',
        animationDurationUpdate: 1000,
        universalTransition: true,
        data: data.value,
      },
    ],
  }

  barOption.value = {
    xAxis: {
      type: 'value',
      axisLabel: {},
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        rotate: 30,
      },
      data: data.value.map((item) => item.name),
    },
    animationDurationUpdate: 1000,
    series: {
      type: 'bar',
      id: 'population',
      data: data.value.map((item) => item.value),
      universalTransition: true,
    },
  }
}
</script>

<template>
  <v-chart
    :option="props.mapView === 'map' ? mapOption : barOption"
    class="w-full h-full"
  ></v-chart>
</template>

<style scoped></style>
