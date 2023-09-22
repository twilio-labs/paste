import { getDocument } from './reakit-getDocument';

/**
 * Returns `element.ownerDocument.activeElement`.
 */
// CHANGED: added return type
export function getActiveElement(element?: Element | Document | null): Element | null {
  const { activeElement } = getDocument(element);
  if (!activeElement?.nodeName) {
    /*
     * In IE11, activeElement might be an empty object if we're interacting
     * with elements inside of an iframe.
     */
    return null;
  }
  return activeElement;
}
