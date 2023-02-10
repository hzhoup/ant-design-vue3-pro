<template>
  <n-layout-content content-style="padding: 24px;">
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" :appear="true" name="fade-slide">
        <keep-alive :include="routeStore.cache">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </n-layout-content>
</template>

<script lang="ts" setup>
import { useRouteStore } from '/@/stores/modules/route'

defineOptions({ name: 'ContentLayout' })

const routeStore = useRouteStore()
</script>
