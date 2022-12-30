<script setup lang="ts">

defineProps<{
  header?: string
  text?: string
  buttonOne?: string
  buttonTwo?: string
  image?: string
}>()

</script>
<template>
  <div
    class="transform duration-300 hover:(scale-105) min-h-130 min-w-130 shadow bg-white flex flex-col gap-2.5 p-6 items-center justify-between rounded-2xl">
    <div>
      <h2 class="text-36px">{{ header }}</h2>
      <p class="text-20px text-primary pt-2.5 uppercase">{{ text }}</p>
    </div>
    <div class="rounded-4xl overflow-hidden">
      <img :src="image" />
    </div>
    <div class="flex gap-13 justify-center">
      <NuxtLink :to="buttonOne" target="_blank"
        class="transform duration-500 hover:(scale-115 !bg-blue-500) uppercase block font-text cursor-pointer text-20px min-w-50 min-h-15 !bg-purple-600 !text-white flex items-center justify-center growTransitionTwo rounded-2xl">
        Source Code
      </NuxtLink>
      <NuxtLink :to="buttonTwo" target="_blank"
        class="transform duration-500 hover:(scale-115 !bg-blue-500) uppercase block font-text cursor-pointer text-20px min-w-50 min-h-15 !bg-purple-600 !text-white flex items-center justify-center growTransitionTwo rounded-2xl">
        Website
      </NuxtLink>
    </div>
  </div>
</template>