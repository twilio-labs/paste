import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { ChevronLeftIcon } from "@twilio-paste/icons/esm/ChevronLeftIcon";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { css, styled } from "@twilio-paste/styling-library";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import type { ThemeShape } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { set } from "lodash";
import { TabsContext } from "./TabsContext";
import type { Variants } from "./types";
import { getElementName } from "./utils";

/**
 * This wrapper applies styles that customize the scrollbar and its track.
 */
const StyledTabList = styled.div(({ theme }: { theme: ThemeShape }) => {
  const { colorBackgroundStronger, colorBackgroundInverseStronger } = theme.backgroundColors;

  return css({
    paddingBottom: "4px",
    marginBottom: "4px",
    overflowX: "auto",
    overflowY: "hidden",
    overflowScrolling: "touch",
    /* Firefox scrollbar */
    "@supports (-moz-appearance:none)": {
      paddingBottom: "0px",
      scrollbarColor: `${colorBackgroundStronger} transparent`,
      scrollbarWidth: "none",
    },
    /* Chrome + Safari scrollbar */
    "::-webkit-scrollbar": {
      height: 0,
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: colorBackgroundStronger,
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: colorBackgroundInverseStronger,
    },
  });
});

export interface TabListProps extends HTMLPasteProps<"div"> {
  /**
   * Required label for this Tabs component. Titles the entire Tabbing context for screen readers.
   *
   * @type {string}
   * @memberof TabListProps
   */
  "aria-label": string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "HORIZONTAL_TAB_LIST" or "VERTICAL_TAB_LIST"
   * @type {BoxProps["element"]}
   * @memberof TabListProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
  /**
   * Changes each Tab to either equally fit the width of the containing element or hug the contents of its label.
   *
   * @type {Variants}
   * @memberof TabListProps
   */
  variant?: Variants;
}

const HorizontalTabList: React.FC<React.PropsWithChildren<{ variant?: Variants; element?: BoxProps["element"] }>> = ({
  children,
  variant,
  element,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const isInverse = variant === "inverse" || variant === "inverse_fitted";

  const [elementOutOBoundsLeft, setElementOutOfBoundsLeft] = React.useState<HTMLDivElement | null>();
  const [elementOutOBoundsRight, setElementOutOfBoundsRight] = React.useState<HTMLDivElement | null>();
  const [shouldRenderScrollButtons, setShouldRenderScrollButtons] = React.useState(false);

  const setElementsToTrack = React.useCallback(() => {
    if (ref.current) {
      const scrollWidth = ref.current.getBoundingClientRect().width;
      const containerWidth = ref.current.parentNode?.parentElement?.getBoundingClientRect().width;

      if (scrollWidth && containerWidth && scrollWidth > containerWidth) {
        setShouldRenderScrollButtons(true);
      } else {
        setShouldRenderScrollButtons(false);
      }

      const currentScrollContainerRightPosition = (
        ref.current?.parentNode?.parentElement as HTMLDivElement
      )?.getBoundingClientRect().right;

      let leftOutOfBounds: HTMLDivElement | null = null;
      let rightOutOfBounds: HTMLDivElement | null = null;

      (ref.current.childNodes as NodeListOf<HTMLDivElement>).forEach((tab) => {
        const { x, right } = tab.getBoundingClientRect();
        if (x < 0) {
          leftOutOfBounds = tab;
        } else if (right > currentScrollContainerRightPosition + 10 && !rightOutOfBounds) {
          rightOutOfBounds = tab;
        }
      });

      setElementOutOfBoundsLeft(leftOutOfBounds);
      setElementOutOfBoundsRight(rightOutOfBounds);
    }
  }, [ref.current]);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.parentNode?.parentElement?.addEventListener("scroll", setElementsToTrack);
      setElementsToTrack();
    }
  }, [ref.current]);

  const handleScrollDirection = React.useCallback(
    (direction: "left" | "right") => {
      if (ref.current) {
        const currentParentOffset = ref.current.parentNode?.parentElement?.getBoundingClientRect().x || 0;
        const currentParentWidth = ref.current.parentNode?.parentElement?.getBoundingClientRect().width || 0;

        console.log({
          elementOutOBoundsLeft,
          bounds: elementOutOBoundsLeft?.getBoundingClientRect(),
          elementOutOBoundsRight,
          boundsRight: elementOutOBoundsRight?.getBoundingClientRect(),
        });
        if (direction === "left" && elementOutOBoundsLeft) {
          ref.current.parentNode?.parentElement?.scrollBy({
            left: elementOutOBoundsLeft.getBoundingClientRect().right - (currentParentWidth + currentParentOffset),
            behavior: "smooth",
          });
          return;
        }
        if (direction === "right" && elementOutOBoundsRight) {
          ref.current.parentNode?.parentElement?.scrollBy({
            left: elementOutOBoundsRight.getBoundingClientRect().left - (currentParentOffset || 0),
            behavior: "smooth",
          });
          return;
        }
      }

      if (ref.current) {
        const scrollAmount = direction === "left" ? -ref.current.offsetWidth : ref.current.offsetWidth;
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    [ref.current, elementOutOBoundsLeft, elementOutOBoundsRight],
  );

  return (
    <Box display="flex">
      {shouldRenderScrollButtons && elementOutOBoundsLeft && (
        <Box
          onClick={() => {
            elementOutOBoundsLeft && handleScrollDirection("left");
          }}
          aria-hidden={true}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="30px"
        >
          <Box size="space30">
            {elementOutOBoundsLeft && <ChevronLeftIcon color="colorTextIcon" decorative={true} />}
          </Box>
        </Box>
      )}
      <Box as={StyledTabList as any} element={`${element}_SCROLL_WRAPPER`}>
        <Box
          element={`${element}_CONTAINER`}
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
          width={ref?.current?.scrollWidth}
        >
          <Box ref={ref} whiteSpace="nowrap" element={element} display="flex">
            {children}
          </Box>
        </Box>
      </Box>
      {shouldRenderScrollButtons && elementOutOBoundsRight && (
        <Box
          onClick={() => {
            elementOutOBoundsRight && handleScrollDirection("right");
          }}
          aria-hidden={true}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="30px"
        >
          <Box size="space30">
            {elementOutOBoundsRight && <ChevronRightIcon color="colorTextIcon" decorative={true} />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

HorizontalTabList.displayName = "HorizontalTabList";

const VerticalTabList: React.FC<React.PropsWithChildren<{ variant?: Variants; element?: BoxProps["element"] }>> = ({
  children,
  element,
  variant,
}) => {
  const isInverse = variant === "inverse" || variant === "inverse_fitted";
  return (
    <Box
      element={element}
      marginRight="space110"
      minWidth="size20"
      maxWidth="size40"
      borderRightStyle="solid"
      borderRightWidth="borderWidth10"
      borderRightColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
    >
      {children}
    </Box>
  );
};

VerticalTabList.displayName = "VerticalTabList";

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({ children, element, variant, ...props }, ref) => {
  const tab = React.useContext(TabsContext);
  const { orientation } = tab;
  const elementName = getElementName(orientation, "TAB_LIST", element);
  const TabListWrapper = orientation === "vertical" ? VerticalTabList : HorizontalTabList;

  return (
    <TabPrimitiveList {...(tab as any)} as={Box} {...props} element={elementName} ref={ref}>
      <TabListWrapper variant={variant || tab.variant} element={`${elementName}_CHILD`}>
        {children}
      </TabListWrapper>
    </TabPrimitiveList>
  );
});

TabList.displayName = "TabList";
export { TabList };
