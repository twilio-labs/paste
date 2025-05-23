import React from "react";

export const useElementsOutOfBounds = (): {
  elementOutOBoundsLeft: HTMLDivElement | null;
  elementOutOBoundsRight: HTMLDivElement | null;
  determineElementsOutOfBounds: (scrollContainer: HTMLDivElement | null, listContainer: HTMLElement | null) => void;
} => {
  // Keep track of first elements that are paritally or completely out of view in either direction
  const [elementOutOBoundsLeft, setElementOutOfBoundsLeft] = React.useState<HTMLDivElement | null>(null);
  const [elementOutOBoundsRight, setElementOutOfBoundsRight] = React.useState<HTMLDivElement | null>(null);

  // called on load and resize and on scroll to set the elements that are out of view
  const determineElementsOutOfBounds = (
    scrollContainer: HTMLDivElement | null,
    listContainer: HTMLElement | null,
  ): void => {
    if (scrollContainer && listContainer) {
      const currentScrollContainerRightPosition = (scrollContainer as HTMLDivElement)?.getBoundingClientRect().right;
      const currentScrollContainerXOffset = (scrollContainer as HTMLDivElement)?.getBoundingClientRect().x;
      let leftOutOfBounds: HTMLDivElement | null = null;
      let rightOutOfBounds: HTMLDivElement | null = null;

      (listContainer.childNodes as NodeListOf<HTMLDivElement>).forEach((tab) => {
        const { x, right } = tab.getBoundingClientRect();
        // Check if the tab is spanning the view if text is really long on smaller devices, wont skip to next element
        const isSpanningView = x < currentScrollContainerXOffset && right > currentScrollContainerRightPosition;
        if (!isSpanningView) {
          /**
           * Compares the left side of the tab with the left side of the scrollable container position
           * as the x value will not be 0 due to being offset in the screen.
           */
          if (Math.round(x) < Math.round(currentScrollContainerXOffset - 28)) {
            leftOutOfBounds = tab;
          }
          /**
           * Compares the right side to the end of container and button width. Also ensure there are
           * no value set as it loops through the array we don't want it to override the first value out of bounds.
           */
          if (Math.round(right) > Math.round(currentScrollContainerRightPosition + 28) && !rightOutOfBounds) {
            rightOutOfBounds = tab;
          }
        }

        setElementOutOfBoundsLeft(leftOutOfBounds);
        setElementOutOfBoundsRight(rightOutOfBounds);
      });
    }
  };

  return { elementOutOBoundsLeft, elementOutOBoundsRight, determineElementsOutOfBounds };
};

export const useShowShadow = (): { showShadow: boolean; handleShadow: () => void } => {
  const [showShadow, setShowShadow] = React.useState(false);
  let showShadowTimer: number;

  const handleShadow = (): void => {
    if (showShadowTimer) {
      window.clearTimeout(showShadowTimer);
    }
    setShowShadow(true);
    showShadowTimer = window.setTimeout(() => {
      setShowShadow(false);
    }, 500);
  };

  return { showShadow, handleShadow };
};

/**
 * Scrolls to the element that is out of bounds (from React State), centering it in the scrollable container
 * Logic to handle scrolling also replicated in CodeBlock and InPageNavigation. If changing here, consider reviewing those components too.
 */
export const handleScrollDirection = (
  direction: "left" | "right",
  elementOutOBoundsLeft: HTMLDivElement | null,
  elementOutOBoundsRight: HTMLDivElement | null,
  scrollContainer: HTMLElement | null,
): void => {
  const elementToScrollTo = direction === "left" ? elementOutOBoundsLeft : elementOutOBoundsRight;

  if (scrollContainer && elementToScrollTo) {
    const elementRect = elementToScrollTo.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerScrollLeft = scrollContainer.scrollLeft;

    // Calculate the new scroll position
    const newScrollLeft =
      containerScrollLeft + (elementRect.left - containerRect.left) - containerRect.width / 2 + elementRect.width / 2;

    // Set the new scroll position
    scrollContainer.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  }
};
