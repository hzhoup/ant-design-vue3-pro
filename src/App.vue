<template>
  <n-config-provider :theme="theme.naiveTheme" :theme-overrides="theme.naiveThemeOverrides" class="wh-full">
    <AppProvider>
      <router-view />
    </AppProvider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { subscribe, useThemeStore } from '/@/stores'

const theme = useThemeStore()

subscribe()
</script>
