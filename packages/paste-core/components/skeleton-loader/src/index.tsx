import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { BorderRadiusProps, LayoutProps } from "@twilio-paste/style-props";
import { styled, themeGet } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { SkeletonLoaderKeyframes } from "./keyframes";

const SkeletonLoaderInner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${themeGet("backgroundColors.colorBackground")} 40%,
    ${themeGet("backgroundColors.colorBackground")} 60%,
    transparent
  );
  transform: translateX(-100%) skew(155deg);
  animation-timing-function: cubic-bezier(0.06, 0.42, 0.57, 0.89);
  animation-name: ${SkeletonLoaderKeyframes};
  animation-duration: 4.5s;
  animation-iteration-count: infinite;
`;

export interface SkeletonLoaderProps
  extends HTMLPasteProps<"div">,
    Pick<BoxElementProps, "element">,
    Omit<LayoutProps, "verticalAlign">,
    BorderRadiusProps {}

const SkeletonLoader = React.forwardRef<HTMLDivElement, SkeletonLoaderProps>(
  (
    {
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderRadius = "borderRadius20",
      borderTopLeftRadius,
      borderTopRightRadius,
      element = "SKELETON_LOADER",
      display,
      height = "sizeIcon20",
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      size = null,
      width = null,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        aria-busy="true"
        backgroundColor="colorBackgroundStrong"
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderRadius={borderRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        display={display}
        element={element}
        height={height}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        overflow="hidden"
        pointerEvents="none"
        position="relative"
        userSelect="none"
        size={size}
        width={width}
        ref={ref}
      >
        <SkeletonLoaderInner />
      </Box>
    );
  },
);

SkeletonLoader.displayName = "SkeletonLoader";

export { SkeletonLoader };
