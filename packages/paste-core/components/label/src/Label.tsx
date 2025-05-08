import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import type { TextColor } from "@twilio-paste/style-props";
import { Text } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { RequiredDot } from "./RequiredDot";

export type LabelVariants = "default" | "inverse";
type LabelBaseProps = {
  children: NonNullable<React.ReactNode>;
  /**
   * Shows the input is disabled.
   *
   * @type {boolean}
   * @memberof LabelBaseProps
   */
  disabled?: boolean;
  /**
   * Optionally remove Label's bottom margin.
   *
   * @type {"space0"}
   * @memberof LabelBaseProps
   */
  marginBottom?: "space0";
  /**
   * Shows the input is required.
   *
   * @type {boolean}
   * @memberof LabelBaseProps
   */
  required?: boolean;
  /**
   * Shows the input is optional.
   *
   * @type {boolean}
   * @memberof LabelBaseProps
   */
  optional?: boolean;
  /**
   *
   * @type {LabelVariants}
   * @memberof LabelBaseProps
   */
  variant?: LabelVariants;
  /**
   * Label text for the required dot.
   *
   * @type {string}
   * @memberof LabelBaseProps
   */
  i18nRequiredLabel?: string;
  /**
   * Label text for the optional label.
   *
   * @type {string}
   * @memberof LabelBaseProps
   */
  i18nOptionalLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'LABEL'
   * @type {BoxProps['element']}
   * @memberof LabelBaseProps
   */
  element?: BoxProps["element"];
};
type LabelElementProps = HTMLPasteProps<"label"> & {
  as?: "label";
  /**
   * You must specify the 'htmlFor' prop to associate the label with an input.
   */
  htmlFor: string | undefined;
};
type LabelLegendElementProps = HTMLPasteProps<"legend"> & {
  as?: "legend";
  /**
   * You cannot apply htmlFor to a legend element.
   */
  htmlFor?: never;
};
type LabelDivElementProps = HTMLPasteProps<"div"> & {
  as?: "div";
  /**
   * You cannot apply htmlFor to a div element.
   */
  htmlFor?: never;
};

export type LabelProps = LabelBaseProps & (LabelElementProps | LabelLegendElementProps | LabelDivElementProps);

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      as = "label",
      marginBottom,
      required,
      optional,
      disabled,
      children,
      variant,
      element = "LABEL",
      i18nRequiredLabel = "",
      i18nOptionalLabel = "(optional)",
      ...props
    },
    ref,
  ) => {
    let textColor = "colorText" as TextColor;
    if (disabled && variant === "inverse") {
      textColor = "colorTextInverseWeaker";
    } else if (disabled) {
      textColor = "colorTextWeak";
    } else if (variant === "inverse") {
      textColor = "colorTextInverse";
    }

    let cursor = "pointer";
    if (disabled) {
      cursor = "not-allowed";
    } else if (as === "legend" || as === "div") {
      cursor = "default";
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as={as}
        /*
         * Setting a bottom border here to prevent Bootstrap's bottom border
         * on legend in Console.
         */
        borderBottomWidth="borderWidth0"
        display="block"
        marginBottom={marginBottom || "space20"}
        paddingLeft="space0"
        paddingRight="space0"
        textTransform="none"
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight30"
        color={textColor}
        cursor={cursor}
        ref={ref}
      >
        <MediaObject verticalAlign="top">
          {required && (
            <MediaFigure spacing="space20">
              <RequiredDot element={`${element}_REQUIRED_DOT`} i18nLabel={i18nRequiredLabel} />
            </MediaFigure>
          )}
          <MediaBody>
            {children}
            {optional && (
              <Text
                as="span"
                fontStyle="italic"
                color={variant === "inverse" ? "colorTextInverseWeaker" : "colorTextWeak"}
                element={`${element}_OPTIONAL_TEXT`}
                marginLeft="space20"
              >
                {i18nOptionalLabel}
              </Text>
            )}
          </MediaBody>
        </MediaObject>
      </Box>
    );
  },
);

Label.displayName = "Label";

export { Label };
