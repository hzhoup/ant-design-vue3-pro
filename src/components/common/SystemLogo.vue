<template>
  <router-link class="flex-center w-full nowrap-hidden" to="/">
    <IconCustomVue class="wh-32 text-primary" />
    <h2 v-show="showTitle" class="pl-8 text-16 font-bold text-primary transition duration-300 ease-in-out">
      Admin Pro
    </h2>
  </router-link>
</template>

<script lang="ts" setup>
defineOptions({ name: 'SystemLogo' })

interface Props {
  showTitle: boolean
}

defineProps<Props>()
</script>
