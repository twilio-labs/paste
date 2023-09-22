import { matches } from './reakit-matches';

const selector =
  "input:not([type='hidden']):not([disabled]), select:not([disabled]), " +
  'textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], ' +
  'iframe, object, embed, area[href], audio[controls], video[controls], ' +
  "[contenteditable]:not([contenteditable='false'])";

/*
 * CHANGED: This function doesn't work in our environment, disabling it for now.
 * If we need it, it will be easy to add.
 */
/*
 *function isVisible(element: Element): boolean {
 *  const htmlElement = element as HTMLElement;
 *  return htmlElement.offsetWidth > 0 || htmlElement.offsetHeight > 0 || element.getClientRects().length > 0;
 *}
 */

/**
 * Checks whether `element` is focusable or not.
 *
 * @memberof tabbable
 *
 * @example
 * import { isFocusable } from "reakit-utils";
 *
 * isFocusable(document.querySelector("input")); // true
 * isFocusable(document.querySelector("input[tabindex='-1']")); // true
 * isFocusable(document.querySelector("input[hidden]")); // false
 * isFocusable(document.querySelector("input:disabled")); // false
 */
export function isFocusable(element: Element): boolean {
  // CHANGED: commented out the isVisible function
  return matches(element, selector); // && isVisible(element);
}

/**
 * Returns all the focusable elements in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element[]}
 */
export function getAllFocusableIn<T extends Element>(container: T): T[] {
  // eslint-disable-next-line unicorn/prefer-spread
  const allFocusable = Array.from(container.querySelectorAll<T>(selector));
  /*
   * CHANGED: we don't want the container in the result list
   * allFocusable.unshift(container);
   */
  return allFocusable.filter(isFocusable);
}

/**
 * Returns the first focusable element in `container`.
 *
 * @memberof tabbable
 *
 * @param {Element} container
 *
 * @returns {Element|null}
 */
export function getFirstFocusableIn<T extends Element>(container: T): T | null {
  const [first] = getAllFocusableIn(container);
  return first || null;
}
