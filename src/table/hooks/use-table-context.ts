import Handsontable from 'handsontable/base';
import type { ComponentInstance, VNode, VNodeChild } from 'vue';
import { provide, reactive } from 'vue';
import { tableInjectionKey } from '../constants';
import { createPortal } from '../helpers';

type BaseRendererType = typeof Handsontable.renderers.BaseRenderer;

export const useTableProvider = () => {
  const renderedCellCache = new Map<string, HTMLTableCellElement>();
  const clearRenderedCellCache = () => renderedCellCache.clear();

  const portalCache = new Map<string, VNode>();
  const clearPortalCache = () => portalCache.clear();

  const portalContainerCache = new Map<string, HTMLElement>();

  /**
   * Implementation consistent with `@handsontable/react-wrapper`
   * @see https://github.dev/handsontable/handsontable/blob/b72f7f111864db864e6c3b189ccb0285428a53cb/wrappers/react-wrapper/src/hotTableContext.tsx#L84
   */
  function getRendererWrapper(
    Renderer: (...args: Parameters<BaseRendererType>) => VNodeChild,
  ): BaseRendererType {
    return function __internalRenderer(
      instance,
      TD,
      row,
      col,
      prop,
      value,
      cellProperties,
    ) {
      const key = `${row}-${col}`;

      // Handsontable.Core type is missing guid
      const instanceGuid = (instance as unknown as { guid: string }).guid;

      const portalContainerKey = `${instanceGuid}-${key}`;

      const portalKey = `${key}-${instanceGuid}`;

      if (renderedCellCache.has(key)) {
        TD.innerHTML = renderedCellCache.get(key).innerHTML;
      }

      if (TD && !TD.getAttribute('ghost-table')) {
        const cachedPortal = portalCache.get(portalKey);

        const cachedPortalContainer =
          portalContainerCache.get(portalContainerKey);

        while (TD.firstChild) {
          TD.removeChild(TD.firstChild);
        }

        // if portal already exists, do not recreate
        if (cachedPortal && cachedPortalContainer) {
          TD.appendChild(cachedPortalContainer);
        } else {
          const rendererElement = () =>
            Renderer(instance, TD, row, col, prop, value, cellProperties);

          const { portal, portalContainer } = createPortal(
            rendererElement,
            TD.ownerDocument,
            portalKey,
            cachedPortalContainer,
          );

          portalContainerCache.set(portalContainerKey, portalContainer);
          TD.appendChild(portalContainer);

          portalCache.set(portalKey, portal);
        }
      }

      renderedCellCache.set(`${row}-${col}`, TD);

      return TD;
    };
  }

  let renderersPortalManager: ((portals: VNode[]) => void) | undefined = () =>
    undefined;

  function setRenderersPortalManagerRef(pmComponent: ComponentInstance<any>) {
    // Implementation differs from react-wrapper here because Vue only allows components to expose objects
    // pmComponent becomes null when component is unmounted
    renderersPortalManager = pmComponent?.setPortals;
  }

  /**
   * Push all portal vnodes into RendersPortalManager component for rendering
   */
  function pushCellPortalsIntoPortalManager() {
    // @ts-ignore
    renderersPortalManager([...portalCache.values()]);
  }

  provide(
    tableInjectionKey,
    reactive({
      getRendererWrapper,
      clearPortalCache,
      clearRenderedCellCache,
      setRenderersPortalManagerRef,
      pushCellPortalsIntoPortalManager,
    }),
  );
};
