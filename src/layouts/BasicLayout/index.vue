<template>
  <n-layout class="wh-full" has-sider>
    <SideLayout />
    <n-layout>
      <HeaderLayout />
      <ContentLayout />
      <FooterLayout />
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import ContentLayout from '/@/layouts/common/ContentLayout/index.vue'
import FooterLayout from '/@/layouts/common/FooterLayout/index.vue'
import HeaderLayout from '/@/layouts/common/HeaderLayout/index.vue'
import SideLayout from '/@/layouts/common/SideLayout/index.vue'

defineOptions({ name: 'BasicLayout' })
</script>
