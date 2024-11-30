<script setup lang="ts">
import { defineProps } from 'vue'
import * as echarts from 'echarts'
import chinaJson from '@/assets/map.geo.json'

const props = defineProps<{ mapView: 'map' | 'bar' }>()

echarts.registerMap('China', chinaJson as never, {})

const data = [
  { name: '北京市', value: Math.floor(Math.random() * 20000) },
  { name: '天津市', value: Math.floor(Math.random() * 20000) },
  { name: '河北省', value: Math.floor(Math.random() * 20000) },
  { name: '山西省', value: Math.floor(Math.random() * 20000) },
  { name: '内蒙古自治区', value: Math.floor(Math.random() * 20000) },
  { name: '辽宁省', value: Math.floor(Math.random() * 20000) },
  { name: '吉林省', value: Math.floor(Math.random() * 20000) },
  { name: '黑龙江省', value: Math.floor(Math.random() * 20000) },
  { name: '上海市', value: Math.floor(Math.random() * 20000) },
  { name: '江苏省', value: Math.floor(Math.random() * 20000) },
  { name: '浙江省', value: Math.floor(Math.random() * 20000) },
  { name: '安徽省', value: Math.floor(Math.random() * 20000) },
  { name: '福建省', value: Math.floor(Math.random() * 20000) },
  { name: '江西省', value: Math.floor(Math.random() * 20000) },
  { name: '山东省', value: Math.floor(Math.random() * 20000) },
  { name: '河南省', value: Math.floor(Math.random() * 20000) },
  { name: '湖北省', value: Math.floor(Math.random() * 20000) },
  { name: '湖南省', value: Math.floor(Math.random() * 20000) },
  { name: '广东省', value: Math.floor(Math.random() * 20000) },
  { name: '广西壮族自治区', value: Math.floor(Math.random() * 20000) },
  { name: '海南省', value: Math.floor(Math.random() * 20000) },
  { name: '重庆市', value: Math.floor(Math.random() * 20000) },
  { name: '四川省', value: Math.floor(Math.random() * 20000) },
  { name: '贵州省', value: Math.floor(Math.random() * 20000) },
  { name: '云南省', value: Math.floor(Math.random() * 20000) },
  { name: '西藏自治区', value: Math.floor(Math.random() * 20000) },
  { name: '陕西省', value: Math.floor(Math.random() * 20000) },
  { name: '甘肃省', value: Math.floor(Math.random() * 20000) },
  { name: '青海省', value: Math.floor(Math.random() * 20000) },
  { name: '宁夏回族自治区', value: Math.floor(Math.random() * 20000) },
  { name: '新疆维吾尔自治区', value: Math.floor(Math.random() * 20000) },
  { name: '台湾省', value: Math.floor(Math.random() * 20000) },
  { name: '香港特别行政区', value: Math.floor(Math.random() * 20000) },
  { name: '澳门特别行政区', value: Math.floor(Math.random() * 20000) },
]
data.sort(function (a, b) {
  return a.value - b.value
})

const mapOption = {
  visualMap: {
    left: 'right',
    min: data[0].value,
    max: data[data.length - 1].value,
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
      data: data,
    },
  ],
}

const barOption = {
  xAxis: {
    type: 'value',
    axisLabel: {
      color: '#fff',
    },
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      rotate: 30,
      color: '#fff',
    },
    data: data.map(function (item) {
      return item.name
    }),
  },
  animationDurationUpdate: 1000,
  series: {
    type: 'bar',
    id: 'population',
    data: data.map(function (item) {
      return item.value
    }),
    universalTransition: true,
  },
}
</script>

<template>
  <v-chart
    :option="props.mapView === 'map' ? mapOption : barOption"
    class="w-full h-full"
  ></v-chart>
</template>

<style scoped></style>
