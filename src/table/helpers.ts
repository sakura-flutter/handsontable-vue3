import { h, Teleport, type VNodeChild } from 'vue';

let bulkComponentContainer: DocumentFragment | null = null;

/**
 * Render a cell component to an external DOM node.
 *
 * @see https://github.dev/handsontable/handsontable/blob/fca21c9c56d2bf3b65c11ac454c5de3635d846d1/wrappers/react-wrapper/src/helpers.tsx#L168
 */
export function createPortal(
  vSlot: () => VNodeChild,
  ownerDocument: Document | null = document,
  portalKey: string,
  cachedContainer?: HTMLElement,
) {
  if (!ownerDocument) {
    ownerDocument = document;
  }

  if (!bulkComponentContainer) {
    bulkComponentContainer = ownerDocument.createDocumentFragment();
  }

  const portalContainer = cachedContainer ?? ownerDocument.createElement('div');

  bulkComponentContainer.appendChild(portalContainer);

  return {
    portal: h(
      Teleport,
      { to: portalContainer, key: portalKey },
      vSlot() as any,
    ),
    portalContainer,
  };
}
