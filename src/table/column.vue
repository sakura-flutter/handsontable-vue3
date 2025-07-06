<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue';
import Handsontable from 'handsontable/base';
import { HotColumn } from '@handsontable/vue3';
import { tableInjectionKey } from './constants';
import type { VNodeChild } from 'vue';

defineOptions({
  name: 'HTableColumn',
  inheritAttrs: false,
});

const props = defineProps<{
  renderer?: ((...args: Parameters<typeof Handsontable.renderers.BaseRenderer>) => VNodeChild) | Handsontable.RendererType | string;
}>();

const attrs = useAttrs();

const tableContext = inject(tableInjectionKey);

const hotColumnProps = computed(() => {
  const result = { ...attrs }
  const { renderer } = props;

  if (renderer) {
    result.renderer = typeof renderer === 'function' ? tableContext.getRendererWrapper(renderer) : renderer;
  }

  return result;
});
</script>

<template>
  <HotColumn v-bind="hotColumnProps" />
</template>
