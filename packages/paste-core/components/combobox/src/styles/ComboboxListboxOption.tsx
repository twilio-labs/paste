import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { SelectedIcon } from "@twilio-paste/icons/esm/SelectedIcon";
import type { BackgroundColor, PositionOptions } from "@twilio-paste/style-props";
import { Text } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";
import type { VirtualItem } from "react-virtual";

export interface ComboboxListboxOptionProps extends HTMLPasteProps<"li"> {
  children: NonNullable<React.ReactNode>;
  /**
   *
   * @type {boolean}
   * @memberof ComboboxListboxOptionProps
   */
  highlighted?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ComboboxListboxOptionProps
   */
  selected?: boolean;
  /**
   *
   * @default false
   * @type {boolean}
   * @memberof ComboboxListboxOptionProps
   */
  disabled?: boolean;
  /**
   *
   * @default "default"
   * @type {"default" | "groupOption"}
   * @memberof ComboboxListboxOptionProps
   */
  variant: "default" | "groupOption";
  /**
   *
   * @type {VirtualItem["start"]}
   * @memberof ComboboxListboxOptionProps
   */
  startHeight?: VirtualItem["start"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "COMBOBOX"
   * @type {BoxElementProps["element"]}
   * @memberof ComboboxListboxOptionProps
   */
  element?: BoxProps["element"];
}

const VariantStyles: { [key in ComboboxListboxOptionProps["variant"]]: BoxStyleProps } = {
  groupOption: {
    paddingLeft: "space90",
    paddingRight: "space50",
  },
  default: {
    paddingLeft: "space50",
    paddingRight: "space50",
  },
};

const getVirtualStyles = (startHeight: number): Record<string, unknown> => ({
  position: "absolute" as PositionOptions,
  top: 0,
  left: 0,
  width: "fill-available",
  transform: `translateY(${startHeight}px)`,
});

function getBackgroundColor(highlightedProp?: boolean, selectedProp?: boolean): BackgroundColor {
  if (highlightedProp && selectedProp) {
    return "colorBackgroundWeak";
  }
  if (highlightedProp || selectedProp) {
    return "colorBackgroundBodyElevationPrimary";
  }
  return "colorBackgroundWeaker";
}

const ComboboxListboxOption = React.forwardRef<HTMLLIElement, ComboboxListboxOptionProps>(
  (
    {
      children,
      element = "COMBOBOX",
      highlighted,
      selected,
      disabled = false,
      variant = "default",
      startHeight,
      ...props
    },
    ref,
  ) => {
    const virtualItemStyles = startHeight != null ? getVirtualStyles(startHeight) : {};

    return (
      <Box
        role="option"
        {...safelySpreadBoxProps(props)}
        /*
         * FIX: Manually control aria-selected state to be true when an item has been selected.
         * Downshift sets aria-selected to true when an item is highlighted, which we don"t want.
         */
        aria-selected={selected}
        aria-disabled={disabled}
        as="li"
        position="relative"
        element={`${element}_LIST_ITEM`}
        color={highlighted ? "colorTextPrimary" : "colorText"}
        cursor={disabled ? "not-allowed" : "pointer"}
        ref={ref}
        opacity={disabled ? 0.3 : 1}
        {...virtualItemStyles}
      >
        {/* extra box to add proper margin since li is based on absolute positioning */}
        <Box
          as="span"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginY="space10"
          marginX="space20"
          borderRadius="borderRadius30"
          backgroundColor={getBackgroundColor(highlighted, selected)}
          paddingY="space40"
          transition="background-color 150ms ease, color 150ms ease"
          {...VariantStyles[variant]}
        >
          <Box as="span">
            <Text as="span" color="inherit" element={`${element}_LIST_ITEM_TEXT`}>
              {children}
            </Text>
          </Box>

          <Box as="span" hidden={!selected}>
            <SelectedIcon decorative color={highlighted && selected ? "colorTextIcon" : "colorTextPrimary"} />
          </Box>
        </Box>
      </Box>
    );
  },
);
ComboboxListboxOption.displayName = "ComboboxListboxOption";

export { ComboboxListboxOption };
