<template>
  <div class="fixed-center flex-col">
    <IconCustomVue class="wh-128" />
    <div class="w-56 h-56 relative animate-spin my-36">
      <span
        v-for="(cls, idx) in loadingClasses"
        :key="idx"
        :class="cls"
        class="absolute wh-16 bg-#1890FF rounded-8 animate-pulse"
      />
    </div>
    <h2 class="text-28 font-500 text-#1890FF">Admin Pro</h2>
  </div>
</template>

<script lang="ts" setup>
const loadingClasses = [
  'left-0 top-0',
  'left-0 bottom-0 animate-delay-500',
  'right-0 top-0 animate-delay-1000',
  'right-0 bottom-0 animate-delay-1500'
]
</script>
