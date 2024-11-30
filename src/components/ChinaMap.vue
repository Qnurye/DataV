<script setup lang="ts">
import * as echarts from 'echarts'
import chinaJson from '@/assets/map.geo.json'

echarts.registerMap('China', chinaJson as never, {})

const data = [
  { name: '北京市', value: 4822023 },
  { name: '天津市', value: 1540000 },
  { name: '河北省', value: 10600000 },
  { name: '山西省', value: 3770000 },
  { name: '内蒙古自治区', value: 2470000 },
  { name: '辽宁省', value: 4370000 },
  { name: '吉林省', value: 2740000 },
  { name: '黑龙江省', value: 3830000 },
  { name: '上海市', value: 5320000 },
  { name: '江苏省', value: 11500000 },
  { name: '浙江省', value: 11400000 },
  { name: '安徽省', value: 10500000 },
  { name: '福建省', value: 7120000 },
  { name: '江西省', value: 6620000 },
  { name: '山东省', value: 15700000 },
  { name: '河南省', value: 9400000 },
  { name: '湖北省', value: 5980000 },
  { name: '湖南省', value: 6890000 },
  { name: '广东省', value: 14400000 },
  { name: '广西壮族自治区', value: 4830000 },
  { name: '海南省', value: 108000 },
  { name: '重庆市', value: 3100000 },
  { name: '四川省', value: 11600000 },
  { name: '贵州省', value: 3470000 },
  { name: '云南省', value: 4590000 },
  { name: '西藏自治区', value: 300000 },
  { name: '陕西省', value: 5370000 },
  { name: '甘肃省', value: 2590000 },
  { name: '青海省', value: 562000 },
  { name: '宁夏回族自治区', value: 630000 },
  { name: '新疆维吾尔自治区', value: 3470000 },
  { name: '台湾省', value: 630000 },
  { name: '香港特别行政区', value: 630000 },
  { name: '澳门特别行政区', value: 630000 }
]
data.sort(function(a, b) {
  return a.value - b.value
})

const mapOption = {
  visualMap: {
    left: 'right',
    min: data[0].value,
    max: data[data.length - 1].value,
    inRange: {
      // prettier-ignore
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    text: ['High', 'Low'],
    calculable: true
  },
  series: [
    {
      id: 'population',
      type: 'map',
      roam: true,
      map: 'China',
      animationDurationUpdate: 1000,
      universalTransition: true,
      data: data
    }
  ]
}

const chartOptions = mapOption
</script>

<template>
  <v-chart :option="chartOptions" style="width: 100%; height: 100%"></v-chart>
</template>

<style scoped></style>
