<template>
  <n-dropdown :options="options" trigger="hover" @select="handleSelect">
    <HoverContainer class="w-40 h-full">
      <n-icon size="24">
        <IconParkTranslate />
      </n-icon>
    </HoverContainer>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { i18n } from '/@/locales'
import { useAppStore } from '/@/stores'

defineOptions({ name: 'Translate' })

const app = useAppStore()

const options = [
  { label: '中文', key: 'zh' },
  { label: 'English', key: 'en' }
]

function handleSelect(key: string) {
  app.changeLocale(key)
  i18n.global.locale = key
}
</script>
