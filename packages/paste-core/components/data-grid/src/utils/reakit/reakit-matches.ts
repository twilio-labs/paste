/**
 * Ponyfill for `Element.prototype.matches`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
export function matches(element: Element, selectors: string): boolean {
  if ("matches" in element) {
    return element.matches(selectors);
  }
  if ("msMatchesSelector" in element) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return (element as any).msMatchesSelector(selectors);
  }
  return (element as any).webkitMatchesSelector(selectors);
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
