<template>
  <n-scrollbar class="flex-1-hidden">
    <n-menu
      :collapsed="app.sideCollapse"
      :collapsed-icon-size="24"
      :collapsed-width="64"
      :options="menus"
      :value="activeKey"
      @update:value="handleUpdateMenu"
    />
  </n-scrollbar>
</template>

<script lang="ts" setup>
import { useAppStore } from '/@/stores'
import { MenuOption, NIcon } from 'naive-ui'
import { Component } from 'vue'
import { RouterLink } from 'vue-router'
import IconParkHome from '~icons/icon-park-outline/home'

defineOptions({ name: 'SideMenu' })

const route = useRoute()
const router = useRouter()

const app = useAppStore()

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menus: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: { name: 'home' } }, { default: () => '回家' }),
    key: '/home',
    icon: renderIcon(IconParkHome)
  },
  {
    label: () => h(RouterLink, { to: { name: '404' } }, { default: () => '404' }),
    key: '/404',
    icon: renderIcon(IconParkHome)
  }
]

const activeKey = computed(() => `/${route.name as string}`)

function handleUpdateMenu(_key: string) {
  router.push(_key)
}
</script>
