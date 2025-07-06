<script setup lang="ts">
import { inject, onBeforeUnmount, getCurrentInstance } from 'vue';
import { HotTable } from '@handsontable/vue3';
import { tableInjectionKey } from './constants';
import RendersPortalManager from './renders-portal-manager';
import type Handsontable from 'handsontable/base';

type BeforeViewRender = Handsontable.GridSettings['beforeViewRender'];
type AfterViewRender = Handsontable.GridSettings['afterViewRender'];

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  beforeViewRender?: BeforeViewRender,
  afterViewRender?: AfterViewRender,
}>()

const vm = getCurrentInstance();

const tableContext = inject(tableInjectionKey);

const beforeViewRender: BeforeViewRender = (...args) => {
  props.beforeViewRender?.(...args);
  tableContext.clearPortalCache();
  tableContext.clearRenderedCellCache();
}

const afterViewRender: AfterViewRender = (...args) => {
  tableContext.pushCellPortalsIntoPortalManager();
  props.afterViewRender?.(...args);
}

onBeforeUnmount(() => {
  tableContext.clearPortalCache();
  tableContext.clearRenderedCellCache();
})

let isExposed = false
const exposeTableRef = (inst: any) => {
  if (inst == null) {
    vm.exposed = {}
  } else {
    if (!isExposed) {
      isExposed = true
      vm.exposed = inst
    }
  }
}
</script>

<template>
  <HotTable
    :ref="exposeTableRef"
    v-bind="$attrs"
    :before-view-render="beforeViewRender"
    :after-view-render="afterViewRender"
  >
    <slot />
  </HotTable>
  <RendersPortalManager :ref="tableContext.setRenderersPortalManagerRef" />
</template>
