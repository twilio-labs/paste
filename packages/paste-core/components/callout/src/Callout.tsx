import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import { NeutralIcon } from "@twilio-paste/icons/esm/NeutralIcon";
import { NewIcon } from "@twilio-paste/icons/esm/NewIcon";
import { SuccessIcon } from "@twilio-paste/icons/esm/SuccessIcon";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type CalloutVariants = "neutral" | "warning" | "error" | "success" | "new";

export interface CalloutProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   *
   * @default null
   * @type {CalloutVariants}
   * @memberof CalloutProps
   */
  variant: CalloutVariants;
  /**
   * Accessible label for the Callout icon.
   *
   * @default '(neutral)' | '(warning)' | '(error)' | '(success)' | '(new)'
   * @type {string}
   * @memberof CalloutProps
   */
  i18nLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'CALLOUT'
   * @type {BoxProps['element']}
   * @memberof CalloutProps
   */
  element?: BoxProps["element"];
  /**
   *
   * @default null
   * @type {BoxStyleProps['marginY']}
   * @memberof CalloutProps
   */
  marginY?: BoxStyleProps["marginY"];
  /**
   * Function to run on dismiss of the Callout. Adds a close button.
   *
   * @default null
   * @memberof CalloutProps
   */
  onDismiss?: () => void;
  /**
   * Title for dismiss label. Only necessary when using onDismiss.
   *
   * @default 'Dismiss callout'
   * @memberof CalloutProps
   * @type {string}
   */
  i18nDismissLabel?: string;
}

const variantStyles: Record<CalloutVariants, BoxStyleProps> = {
  success: {
    backgroundColor: "colorBackgroundWeak",
    color: "colorTextSuccess",
    borderColor: "colorBorderSuccessWeak",
  },
  error: {
    backgroundColor: "colorBackgroundErrorWeakest",
    color: "colorTextError",
    borderColor: "colorBorderErrorWeak",
  },
  warning: {
    backgroundColor: "colorBackgroundWeak",
    color: "colorTextWarningStrong",
    borderColor: "colorBorderWarningWeak",
  },
  new: {
    backgroundColor: "colorBackgroundWeak",
    color: "colorTextNew",
    borderColor: "colorBorderNewWeak",
  },
  neutral: {
    backgroundColor: "colorBackgroundWeak",
    color: "colorTextNeutral",
    borderColor: "colorBorderNeutralWeak",
  },
};

const variantIcons: Record<CalloutVariants, React.ReactElement> = {
  success: <SuccessIcon decorative color="colorTextIconSuccess" />,
  error: <ErrorIcon decorative color="colorTextIconError" />,
  warning: <WarningIcon decorative color="colorTextIconWarning" />,
  new: <NewIcon decorative color="colorTextIconNew" />,
  neutral: <NeutralIcon decorative color="colorTextIconNeutral" />,
};

const defaultIconLabels: Record<CalloutVariants, string> = {
  success: "(success)",
  error: "(error)",
  warning: "(warning)",
  new: "(new)",
  neutral: "(information)",
};

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      children,
      variant,
      element = "CALLOUT",
      i18nLabel,
      marginY,
      onDismiss,
      i18nDismissLabel = "Dismiss callout",
      ...props
    },
    ref,
  ) => {
    const IconComponent = variantIcons[variant];
    const iconLabel = i18nLabel ? i18nLabel : defaultIconLabels[variant];

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        display="flex"
        marginY={marginY}
        paddingTop="space70"
        paddingLeft="space70"
        paddingRight="space70"
        paddingBottom="space90"
        borderLeftStyle="solid"
        borderLeftWidth="borderWidth20"
        variant={variant}
        alignItems="start"
        columnGap="space50"
        {...variantStyles[variant]}
      >
        <Box element={`${element}_ICON`}>
          {IconComponent}
          <ScreenReaderOnly>{iconLabel}</ScreenReaderOnly>
        </Box>
        <Box display="flex" flexDirection="column" rowGap="space30" flex="1">
          {children}
        </Box>
        {onDismiss && typeof onDismiss === "function" && (
          <Button onClick={onDismiss} variant="secondary_icon" size="reset" element={`${element}_DISMISS_BUTTON`}>
            <CloseIcon element={`${element}_DISMISS_ICON`} decorative size="sizeIcon20" />
            <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
          </Button>
        )}
      </Box>
    );
  },
);

Callout.displayName = "Callout";
