<template>
  <n-layout-header bordered class="h-64">
    <DarkModeContainer class="flex-y-center h-full">
      <div class="flex-1-hidden"></div>
      <div class="flex justify-end h-full">
        <Translate />
        <ThemeMode />
        <FullScreen />
      </div>
    </DarkModeContainer>
  </n-layout-header>
</template>

<script lang="ts" setup>
import FullScreen from '/@/layouts/common/HeaderLayout/components/FullScreen.vue'
import ThemeMode from '/@/layouts/common/HeaderLayout/components/ThemeMode.vue'
import Translate from '/@/layouts/common/HeaderLayout/components/Translate.vue'

defineOptions({ name: 'HeaderLayout' })
</script>
