import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { DeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import { Spinner } from "@twilio-paste/spinner";
import * as React from "react";

import { FileUploaderItemContext } from "./FileUploaderItemContext";
import type { FileUploaderItemContextProps } from "./FileUploaderItemContext";

export interface FileUploaderItemProps extends Omit<React.ComponentPropsWithRef<"li">, "children"> {
  children?: BoxProps["children"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILE_UPLOADER_ITEM'
   * @type {BoxProps['element']}
   * @memberof FileUploaderItemProps
   */
  element?: BoxProps["element"];
  variant?: FileUploaderItemContextProps["variant"];
  fileIcon?: NonNullable<React.ReactNode>;
  onButtonClick?: () => void;
  i18nErrorText?: string;
  i18nButtonText?: string;
  i18nLoadingText?: string;
}

const variantStyles: Record<FileUploaderItemContextProps["variant"], BoxStyleProps> = {
  default: {
    borderColor: "colorBorderWeaker",
    backgroundColor: "colorBackgroundBody",
  },
  loading: {
    borderColor: "colorBorderWeaker",
    backgroundColor: "colorBackgroundBody",
  },
  error: {
    borderColor: "colorBorderError",
    backgroundColor: "colorBackgroundErrorWeakest",
  },
};

const iconStyles: Record<FileUploaderItemContextProps["variant"], BoxStyleProps> = {
  default: {
    color: "colorTextIcon",
  },
  loading: {
    color: "colorTextIcon",
  },
  error: {
    color: "colorTextIconError",
  },
};

export const FileUploaderItem = React.forwardRef<HTMLLIElement, FileUploaderItemProps>(
  (
    {
      children,
      fileIcon,
      element = "FILE_UPLOADER_ITEM",
      variant = "default",
      i18nErrorText = "(error)",
      i18nButtonText = "Remove file",
      i18nLoadingText = "(uploading file)",
      onButtonClick,
      ...props
    },
    ref,
  ) => {
    let icon = fileIcon;
    if (variant === "error")
      icon = <ErrorIcon title={i18nErrorText} decorative={false} element={`${element}_ERROR_ICON`} />;
    if (variant === "loading")
      icon = <Spinner decorative={false} title={i18nLoadingText} element={`${element}_SPINNER`} />;

    let buttonIcon = <DeleteIcon title={i18nButtonText} decorative={false} element={`${element}_DELETE_ICON`} />;
    if (variant === "loading" || variant === "error") {
      buttonIcon = <CloseIcon title={i18nButtonText} decorative={false} element={`${element}_DISMISS_ICON`} />;
    }

    return (
      <FileUploaderItemContext.Provider value={{ variant }}>
        <Box
          as="li"
          ref={ref}
          {...safelySpreadBoxProps(props)}
          element={element}
          variant={variant}
          listStyleType="none"
          borderWidth="borderWidth10"
          borderStyle="solid"
          borderRadius="borderRadius30"
          padding="space40"
          display="grid"
          gridTemplateColumns="auto 1fr auto"
          columnGap="space40"
          alignItems="center"
          {...variantStyles[variant]}
        >
          <Box {...iconStyles[variant]}>{icon}</Box>
          <Box display="flex" flexDirection="column" rowGap="space10" element={`${element}_CONTENT`}>
            {children}
          </Box>
          <Box display="flex" paddingRight="space30">
            <Button variant="secondary_icon" size="reset" onClick={onButtonClick} element={`${element}_BUTTON`}>
              {buttonIcon}
            </Button>
          </Box>
        </Box>
      </FileUploaderItemContext.Provider>
    );
  },
);

FileUploaderItem.displayName = "FileUploaderItem";
