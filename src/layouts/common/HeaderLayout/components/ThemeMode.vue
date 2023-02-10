<template>
  <HoverContainer class="w-40 h-full" tooltip-content="模式" @click="theme.toggleDark()">
    <n-icon size="24">
      <IconParkSunOne v-if="theme.darkMode" />
      <IconParkMoon v-else />
    </n-icon>
  </HoverContainer>
</template>

<script lang="ts" setup>
import { useThemeStore } from '/@/stores'

defineOptions({ name: 'ThemeMode' })

const theme = useThemeStore()
</script>
