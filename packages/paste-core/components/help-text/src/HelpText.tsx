import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import { SuccessIcon } from "@twilio-paste/icons/esm/SuccessIcon";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
import type { TextColor } from "@twilio-paste/style-props";
import type { HTMLPasteProps, ValueOf } from "@twilio-paste/types";
import * as React from "react";

export const HelpTextVariants = {
  DEFAULT: "default",
  ERROR: "error",
  ERROR_INVERSE: "error_inverse",
  INVERSE: "inverse",
  SUCCESS: "success",
  WARNING: "warning",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type HelpTextVariants = ValueOf<typeof HelpTextVariants>;

export interface HelpTextProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'HELP_TEXT'
   * @type {BoxProps['element']}
   * @memberof HelpTextProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the top margin on the div element.
   *
   * @default 'space30'
   * @type {'space0'}
   * @memberof HelpTextProps
   */
  marginTop?: "space0";
  /**
   * The style variant of the help text.
   *
   * @default 'default'
   * @type {HelpTextVariants}
   * @memberof HelpTextProps
   */
  variant?: HelpTextVariants;
}

type VariantOptionsProps = {
  [key in HelpTextVariants]: {
    textColor: TextColor;
    icon: JSX.Element | null;
  };
};
const VariantOptions: VariantOptionsProps = {
  [HelpTextVariants.DEFAULT]: {
    textColor: "colorTextWeak",
    icon: null,
  },
  [HelpTextVariants.INVERSE]: {
    textColor: "colorTextInverseWeaker",
    icon: null,
  },
  [HelpTextVariants.ERROR]: {
    textColor: "colorTextError",
    icon: (
      <Box flexShrink={0}>
        <ErrorIcon color="colorTextError" decorative size="sizeIcon20" />
      </Box>
    ),
  },
  [HelpTextVariants.ERROR_INVERSE]: {
    textColor: "colorTextErrorWeak",
    icon: (
      <Box flexShrink={0}>
        <ErrorIcon color="colorTextErrorWeak" decorative size="sizeIcon20" />
      </Box>
    ),
  },
  [HelpTextVariants.SUCCESS]: {
    textColor: "colorTextSuccess",
    icon: (
      <Box flexShrink={0}>
        <SuccessIcon color="colorTextIconSuccess" decorative size="sizeIcon20" />
      </Box>
    ),
  },
  [HelpTextVariants.WARNING]: {
    textColor: "colorTextWarning",
    icon: (
      <Box flexShrink={0}>
        <WarningIcon color="colorTextWarning" decorative size="sizeIcon20" />
      </Box>
    ),
  },
};

const HelpText = React.forwardRef<HTMLDivElement, HelpTextProps>(
  ({ marginTop, children, variant = "default", element = "HELP_TEXT", ...props }, ref) => {
    const { textColor, icon } = VariantOptions[variant];

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        columnGap="space20"
        marginTop={marginTop || "space30"}
        ref={ref}
        element={element}
        variant={variant}
        as="div"
        color={textColor}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
      >
        {icon}
        <span>{children}</span>
      </Box>
    );
  },
);

HelpText.displayName = "HelpText";

export { HelpText };
