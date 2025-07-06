<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { useTableProvider } from './hooks'
import TableInner from './table-inner.vue';

defineOptions({
  name: 'HTable',
  inheritAttrs: false,
});

const vm = getCurrentInstance();

useTableProvider();

let isExposed = false
/**
 * Implementing `forwardRef` in Vue is tricky,
 * So here we choose not to nest multiple component layers, but use hooks instead.
 */
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
  <TableInner
    :ref="exposeTableRef"
    v-bind="$attrs"
  >
    <slot />
  </TableInner>
</template>
