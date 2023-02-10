<template>
  <HoverContainer class="w-40 h-full" tooltip-content="全屏" @click="toggle()">
    <n-icon size="24">
      <IconParkOffScreenOne v-if="isFullscreen" />
      <IconParkFullScreenOne v-else />
    </n-icon>
  </HoverContainer>
</template>

<script lang="ts" setup>
defineOptions({ name: 'FullScreen' })

const { isFullscreen, toggle } = useFullscreen()
</script>
