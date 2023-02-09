<template>
  <div class="fixed-center flex-col">
    <IconCustomVue class="w-24 h-24" />
    <div class="w-56px h-56px relative animate-spin my-36px">
      <span
        v-for="(cls, idx) in loadingClasses"
        :key="idx"
        :class="cls"
        class="absolute w-16px h-16px bg-#1890ff rounded-8px animate-pulse"
      />
    </div>
    <h2 class="text-28px font-500 text-#1890ff">Admin Pro</h2>
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
