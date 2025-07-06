import { defineComponent, shallowRef, type VNode } from 'vue';

export default defineComponent({
  name: 'RendersPortalManager',
  inheritAttrs: false,

  setup(props, { expose }) {
    const portals = shallowRef<VNode[]>([]);

    const setPortals = (newPortals: VNode[]) => {
      portals.value = newPortals;
    };

    expose({
      setPortals,
    });

    return () => portals.value;
  },
});
