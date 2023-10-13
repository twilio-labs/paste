import { getActiveElement, getAllFocusableIn } from "./reakit";

/**
 * Sets the correct tabindex for elements based on whether actionable
 * mode is on or off.
 *
 * @param {HTMLElement} cellElement - the wrapping cell element
 * @param {boolean} actionable - are we turning actionable on or off
 */
export const updateTabIndexForActionable = (cellElement: HTMLElement, actionable: boolean): void => {
  getAllFocusableIn(cellElement).forEach((element: HTMLElement) => {
    // eslint-disable-next-line no-param-reassign
    element.tabIndex = actionable ? 0 : -1;
  });
};

/**
 * Sets the tabindex to 0 after a delay
 *
 * @example
 * delayedSetFocusable(document.querySelector('#my-div'))
 */
export const delayedSetFocusable = (element?: HTMLElement): void => {
  setTimeout(() => {
    // in case the component is unmounted
    if (element != null) {
      // eslint-disable-next-line no-param-reassign
      element.tabIndex = 0;
    }
  }, 150);
};

/**
 * Determines if the element provided is a data grid cell.
 *
 * @example
 * if (isCell(el)) { ... }
 *
 * @returns {boolean}.
 */
export const isCell = (element: Element): element is HTMLTableCellElement => {
  return element.tagName === "TD" || element.tagName === "TH";
};

/**
 * Returns the closest parent cell (th or td element) within the data grid from a given element.
 *
 * @example
 * const element = document.querySelector("my-data-grid-input");
 * const closestCell = getClosestCellFrom(element, 'grid-10'); // returns the td element
 * ensureFocus(closestCell); // focuses the td element
 *
 * @returns {HTMLELEMENT|null} cell element.
 */
export const getClosestCellFrom = (element: Element, dataGridId: string): HTMLElement | null => {
  if (element == null) return null;
  if (!dataGridId) return null;
  return element.closest(`[id="${dataGridId}"] th, [id="${dataGridId}"] td`);
};

/**
 * Returns the closest parent cell (th or td element) within the data grid from the current focused element.
 *
 * @example
 * const closestCell = getClosestGridCellFromCurrentFocus('grid-10'); // returns the td element
 * ensureFocus(closestCell); // focuses the td element
 *
 * @returns {HTMLELEMENT|null} cell element.
 */
export const getClosestGridCellFromCurrentFocus = (dataGridId: string): HTMLElement | null => {
  const focusedElement = getActiveElement();
  if (!focusedElement) {
    return null;
  }
  if (isCell(focusedElement)) {
    return focusedElement;
  }
  return getClosestCellFrom(focusedElement, dataGridId);
};
