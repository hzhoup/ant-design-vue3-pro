<template>
  <div v-if="showTooltip">
    <n-tooltip :placement="placement" trigger="hover">
      <template #trigger>
        <div class="flex-center h-full cursor-pointer hover:bg-[#f6f6f6] dark:hover:bg-[#333]">
          <slot></slot>
        </div>
      </template>
      {{ tooltipContent }}
    </n-tooltip>
  </div>
  <div v-else class="flex-center cursor-pointer hover:bg-[#f6f6f6] dark:hover:bg-[#333]">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { PopoverPlacement } from 'naive-ui'

defineOptions({ name: 'HoverContainer' })

interface Props {
  /** tooltip显示文本 */
  tooltipContent?: string
  /** tooltip的位置 */
  placement?: PopoverPlacement
}

const props = defineProps<Props>()

const showTooltip = computed(() => Boolean(props.tooltipContent))
</script>
