import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { DisclosurePrimitive } from "@twilio-paste/disclosure-primitive";
import type { DisclosurePrimitiveProps } from "@twilio-paste/disclosure-primitive";
import { Heading } from "@twilio-paste/heading";
import type { HeadingProps } from "@twilio-paste/heading";
import { ChevronDisclosureIcon } from "@twilio-paste/icons/esm/ChevronDisclosureIcon";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { DisclosureContext } from "./DisclosureContext";
import { IconSizeFromHeading } from "./constants";
import type { DisclosureVariants } from "./types";

const baseContainedStyles: BoxStyleProps = {
  borderWidth: "borderWidth10",
  borderStyle: "solid",
  borderRadius: "borderRadius20",
};

const containedStyles: BoxStyleProps = {
  ...baseContainedStyles,
  borderColor: "colorBorderWeaker",
};

const containedHoverStyles: BoxStyleProps = {
  ...baseContainedStyles,
  borderColor: "colorBorderWeak",
};

export interface StyledDisclosureHeadingProps extends Omit<DisclosureHeadingProps, "as"> {
  renderAs: HeadingProps["as"];
  disclosureVariant: DisclosureVariants;
  element: BoxProps["element"];
  isHovered: boolean;
  isDisabled: boolean;
  setIsHovered: (value: boolean) => void;
  setIsDisabled: (value: boolean) => void;
}

const StyledDisclosureHeading = React.forwardRef<HTMLDivElement, StyledDisclosureHeadingProps>(
  (
    {
      children,
      element,
      renderAs,
      disclosureVariant,
      variant,
      isHovered,
      isDisabled,
      setIsDisabled,
      setIsHovered,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const disabledProp = props["aria-disabled"];
    const isExpanded = props["aria-expanded"];
    const iconSize = IconSizeFromHeading[variant] || "sizeIcon20";
    const shouldIconMove = isHovered && !isDisabled;
    const buttonRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setIsDisabled(disabledProp ? true : false);
    }, [disabledProp, setIsDisabled]);

    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
      const handleMouseOver = (): void => setIsHovered(true);
      const handleMouseOut = (): void => setIsHovered(false);

      const node = buttonRef.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    }, [buttonRef, setIsHovered]);

    let variantStyles: BoxStyleProps = {};
    if (disclosureVariant === "contained") {
      variantStyles = containedStyles;
      if (isHovered && !isDisabled) {
        variantStyles = containedHoverStyles;
      }

      if (isExpanded) {
        variantStyles = {
          ...variantStyles,
          borderBottomLeftRadius: "borderRadius0",
          borderBottomRightRadius: "borderRadius0",
          borderBottom: "none",
        };
      }
    }

    return (
      <Heading as={renderAs} marginBottom="space0" variant={variant} ref={ref}>
        <Box
          {...safelySpreadBoxProps(props)}
          as="div"
          backgroundColor={isExpanded ? "colorBackgroundWeak" : "colorBackgroundBody"}
          borderRadius="borderRadius20"
          cursor="pointer"
          display="flex"
          element={element}
          outline="none"
          padding="space30"
          position="relative"
          ref={buttonRef}
          role="button"
          zIndex="zIndex10"
          transition="background-color, border-color, border-radius 100ms ease"
          _hover={{
            backgroundColor: "colorBackground",
          }}
          _focus={{
            boxShadow: "shadowFocus",
          }}
          _disabled={{
            backgroundColor: "colorBackgroundStrong",
            color: "colorTextWeaker",
            cursor: "not-allowed",
          }}
          {...variantStyles}
        >
          <Box
            as="span"
            element={`${element}_ICON`}
            display="flex"
            color={isDisabled ? "colorTextWeaker" : "colorTextIcon"}
            transition="transform 170ms ease"
            height={iconSize}
            width={iconSize}
            transform={`
             ${shouldIconMove ? `translateX(${theme.space.space10})` : "translateX(0)"}
             ${isExpanded ? `rotate(90deg)` : "rotate(0deg)"}`}
          >
            <ChevronDisclosureIcon color="inherit" decorative size={iconSize} />
          </Box>
          {children}
        </Box>
      </Heading>
    );
  },
);

StyledDisclosureHeading.displayName = "StyledDisclosureHeading";

export interface DisclosureHeadingProps
  extends Omit<DisclosurePrimitiveProps, "baseId" | "toggle" | keyof BoxStyleProps> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DISCLOSURE_HEADING'
   * @type {BoxProps['element']}
   * @memberof DisclosureHeadingProps
   */
  element?: BoxProps["element"];
  as: HeadingProps["as"];
  marginBottom?: HeadingProps["marginBottom"];
  variant: HeadingProps["variant"];
}

const DisclosureHeading: React.FC<React.PropsWithChildren<DisclosureHeadingProps>> = ({
  children,
  as,
  element = "DISCLOSURE_HEADING",
  disabled,
  focusable,
  ...props
}) => {
  const { disclosure, variant, setIsDisabled, setIsHeadingHovered, isHeadingHovered, isDisabled } =
    React.useContext(DisclosureContext);
  return (
    <DisclosurePrimitive
      {...disclosure}
      {...props}
      as={StyledDisclosureHeading}
      disabled={disabled}
      disclosureVariant={variant}
      element={element}
      focusable={focusable}
      renderAs={as}
      isHovered={isHeadingHovered}
      setIsDisabled={setIsDisabled}
      setIsHovered={setIsHeadingHovered}
      isDisabled={isDisabled}
    >
      {children}
    </DisclosurePrimitive>
  );
};

DisclosureHeading.displayName = "DisclosureHeading";

export { DisclosureHeading };
