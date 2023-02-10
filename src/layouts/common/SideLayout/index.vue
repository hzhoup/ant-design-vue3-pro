<template>
  <n-layout-sider
    :collapsed="app.sideCollapse"
    :collapsed-width="64"
    :width="240"
    bordered
    collapse-mode="width"
    show-trigger="arrow-circle"
    @update-collapsed="app.toggleSideCollapse"
  >
    <DarkModeContainer class="flex-col-stretch h-full">
      <SystemLogo :show-title="showTitle" class="h-64" />
      <SideMenu />
    </DarkModeContainer>
  </n-layout-sider>
</template>

<script lang="ts" setup>
import SideMenu from '/@/layouts/common/SideLayout/components/SideMenu.vue'
import { useAppStore } from '/@/stores'

defineOptions({ name: 'SideLayout' })

const app = useAppStore()

const showTitle = computed(() => !app.sideCollapse)
</script>
