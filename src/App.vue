<script lang="ts">
import ChinaMap from '@/components/ChinaMap.vue'
import CardWrapper from '@/components/CardWrapper.vue'

export default {
  components: {
    ChinaMap,
    CardWrapper
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <div
    class="size-full flex flex-col gap-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-2"
  >
    <header>
      <h1 class="text-4xl font-bold text-center">Big Data Tech</h1>
    </header>

    <main class="grow grid grid-cols-11">

      <div class="col-span-3"></div>
      <div class="col-span-5">
        <CardWrapper class="size-full">
          <ChinaMap />
        </CardWrapper>
      </div>
      <div class="col-span-3"></div>

    </main>

    <footer class="p-4">
      <p class="text-center">Footer</p>
    </footer>
  </div>
</template>

<style scoped></style>
