<template>
  <n-layout-content content-style="padding: 24px;">
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" :appear="true" name="fade-slide">
        <keep-alive :include="[]">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </n-layout-content>
</template>

<script lang="ts" setup>
defineOptions({ name: 'ContentLayout' })
</script>
