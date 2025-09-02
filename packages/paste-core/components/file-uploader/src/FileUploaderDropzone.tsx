import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { UploadToCloudIcon } from "@twilio-paste/icons/esm/UploadToCloudIcon";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { FileUploaderContext } from "./FileUploaderContext";
import { arrayToCsv, isValidMimeType } from "./utils";

export interface FileUploaderDropzoneProps
  extends Omit<
    HTMLPasteProps<"input">,
    "onChange" | "onDragEnter" | "onDragLeave" | "onDrop" | "onDragStart" | "onDragEnd" | "onDragOver"
  > {
  /**
   * The allowed mime types for the input. It is convereted to a string and passed to the accept attribute.
   *
   * @type {string[]}
   * @memberof FileUploaderDropzoneProps
   */
  acceptedMimeTypes: string[];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILE_UPLOADER_DROPZONE'
   * @type {BoxProps['element']}
   * @memberof FileUploaderDropzoneProps
   */
  element?: BoxProps["element"];
  children?: React.ReactNode;
  /**
   * A function that runs when the input within the Dropzone is changed
   *
   * @memberof FileUploaderDropzoneProps
   */
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * A function that runs on drag leave on the label that wraps the FileUploaderDropzone
   *
   * @memberof FileUploaderDropzoneProps
   */
  onDragEnd?: (event: React.DragEvent<HTMLLabelElement>) => void;
  /**
   * A function that runs on drag leave on the label that wraps the FileUploaderDropzone
   *
   * @memberof FileUploaderDropzoneProps
   */
  onDragEnter?: (event: React.DragEvent<HTMLLabelElement>) => void;
  /**
   * A function that runs on drag leave on the label that wraps the FileUploaderDropzone
   *
   * @memberof FileUploaderDropzoneProps
   */
  onDragLeave?: (event: React.DragEvent<HTMLLabelElement>) => void;
  /**
   * A function that runs on drag over on the label that wraps the FileUploaderDropzone
   *
   * @memberof FileUploaderDropzoneProps
   */
  onDragOver?: (event: React.DragEvent<HTMLLabelElement>) => void;
  /**
   * A function that runs on drag leave on the label that wraps the FileUploaderDropzone
   *
   * @memberof FileUploaderDropzoneProps
   */
  onDragStart?: (event: React.DragEvent<HTMLLabelElement>) => void;
  /**
   * A function that runs on drop on the label that wraps the FileUploaderDropzone
   *
   * @memberof FileUploaderDropzoneProps
   */
  onDrop?: (event: React.DragEvent<HTMLLabelElement>) => void;
}

const hoverDragStyles: BoxStyleProps = {
  borderColor: "colorBorderPrimaryStrong",
  backgroundColor: "colorBackgroundPrimaryWeakest",
};

const baseStyles: BoxStyleProps = {
  borderColor: "colorBorderWeak",
  borderStyle: "dashed",
  backgroundColor: "colorBackgroundWeak",
  cursor: "pointer",
  color: "colorText",
  _hover: hoverDragStyles,
};

const disabledStyles: BoxStyleProps = {
  backgroundColor: "colorBackground",
  borderStyle: "solid",
  borderColor: "colorBorderWeaker",
  cursor: "not-allowed",
  color: "colorTextWeaker",
};

export const FileUploaderDropzone = React.forwardRef<HTMLInputElement, FileUploaderDropzoneProps>(
  (
    {
      element = "FILE_UPLOADER_DROPZONE",
      children,
      acceptedMimeTypes,
      onInputChange,
      onDragEnd,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDragStart,
      onDrop,
      ...props
    },
    ref,
  ) => {
    const { id, disabled, required, name } = React.useContext(FileUploaderContext);

    /**
     * The underlying <input type="file" /> DOM element won't accept the same file after it has been
     * picked unless it is rerendered manually - if a user selects and removes a file, they should
     * still be able to pick it again without refreshing the page.
     * https://stackoverflow.com/a/45846251
     */
    const [fileInputKey, setFileInputKey] = React.useState(0);
    const [dragActive, setDragActive] = React.useState(false);

    let stateStyles = baseStyles;
    if (disabled) stateStyles = disabledStyles;
    if (dragActive) stateStyles = { ...stateStyles, ...hoverDragStyles };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setFileInputKey((prev) => prev + 1);
      if (onInputChange) {
        onInputChange(event);
      }
    };

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>): void => {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.dropEffect = "copy";

      if (disabled) return;

      if (onDragOver) {
        onDragOver(event);
      }
    };

    const handleDragEnter = (event: React.DragEvent<HTMLLabelElement>): void => {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.dropEffect = "copy";

      if (disabled) return;

      setDragActive(true);

      if (onDragEnter) {
        onDragEnter(event);
      }
    };

    const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>): void => {
      event.preventDefault();
      event.stopPropagation();

      if (disabled) return;

      setDragActive(false);

      if (onDragLeave) {
        onDragLeave(event);
      }
    };

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>): void => {
      event.preventDefault();
      event.stopPropagation();

      if (disabled) return;

      setFileInputKey((prev) => prev + 1);
      setDragActive(false);

      for (let file of event.dataTransfer.files) {
        if (!isValidMimeType(file.type, acceptedMimeTypes)) {
          console.warn(`File type not accepted: ${file.type}`);
          return;
        }
      }
      

      if (onDrop) {
        onDrop(event);
      }
    };

    return (
      <Box
        as="label"
        element={element}
        transition="all 150ms ease-in"
        borderWidth="borderWidth10"
        borderRadius="borderRadius30"
        paddingY="space160"
        paddingX="space50"
        marginTop="space40"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="size20"
        rowGap="space20"
        {...stateStyles}
        _focusWithin={{
          backgroundColor: "colorBackground",
          boxShadow: "shadowFocus",
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        <Box
          backgroundColor={disabled ? "colorBackgroundStrong" : "colorBackgroundBody"}
          borderRadius="borderRadiusCircle"
          padding="space30"
          pointerEvents="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <UploadToCloudIcon decorative size="sizeIcon60" color={disabled ? "colorTextWeaker" : "colorTextIcon"} />
        </Box>
        <>{children}</>
        <Box
          as="input"
          type="file"
          ref={ref}
          {...safelySpreadBoxProps({ ...props, id, disabled, required, name })}
          size="size0"
          border="none"
          overflow="hidden"
          padding="space0"
          margin="space0"
          whiteSpace="nowrap"
          textTransform="none"
          position="absolute"
          clip="rect(0 0 0 0)"
          aria-describedby={`${id}-error-text ${id}-help-text ${id}-dropzone-text`}
          key={fileInputKey}
          onChange={handleInputChange}
          accept={arrayToCsv(acceptedMimeTypes)}
        />
      </Box>
    );
  },
);

FileUploaderDropzone.displayName = "FileUploaderDropzone";
