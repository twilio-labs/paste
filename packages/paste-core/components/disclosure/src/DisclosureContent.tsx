import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { DisclosurePrimitiveContent } from "@twilio-paste/disclosure-primitive";
import type { DisclosurePrimitiveContentProps } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

import { DisclosureContext } from "./DisclosureContext";

export const AnimatedDisclosureContent = animated(Box);

const baseContainedStyles: BoxStyleProps = {
  borderWidth: "borderWidth10",
  borderStyle: "solid",
  borderBottomLeftRadius: "borderRadius40",
  borderBottomRightRadius: "borderRadius40",
  borderTop: "none",
  transition: "border-color 100ms ease-out",
};

const containedStyles: BoxStyleProps = {
  ...baseContainedStyles,
  borderColor: "colorBorderWeaker",
};

const containedHoverStyles: BoxStyleProps = {
  ...baseContainedStyles,
  borderColor: "colorBorderWeak",
};

export interface DisclosureContentProps extends Omit<DisclosurePrimitiveContentProps, keyof BoxStyleProps> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DISCLOSURE_CONTENT'
   * @type {BoxProps['element']}
   * @memberof DisclosureContentProps
   */
  element?: BoxProps["element"];
  children: NonNullable<React.ReactNode>;
}

const DisclosureContent = React.forwardRef<HTMLDivElement, DisclosureContentProps>(
  ({ children, element = "DISCLOSURE_CONTENT", visible, ...props }, ref) => {
    const { disclosure, variant, isHeadingHovered, isDisabled } = React.useContext(DisclosureContext);
    const { opacity } = useSpring({
      opacity: disclosure.visible ? 1 : 0,
      onRest: disclosure.stopAnimation,
      config: {
        mass: 1,
        tension: 150,
        friction: 20,
        duration: 100,
      },
    });

    let variantStyles: BoxStyleProps = {};
    if (variant === "contained") {
      variantStyles = containedStyles;
      if (isHeadingHovered && !isDisabled) {
        variantStyles = containedHoverStyles;
      }
    }

    return (
      <DisclosurePrimitiveContent
        {...disclosure}
        {...safelySpreadBoxProps(props)}
        as={AnimatedDisclosureContent}
        element={element}
        backgroundColor="colorBackgroundBody"
        padding="space50"
        ref={ref}
        style={{
          opacity,
        }}
        {...variantStyles}
      >
        {children}
      </DisclosurePrimitiveContent>
    );
  },
);

DisclosureContent.displayName = "DisclosureContent";

export { DisclosureContent };
