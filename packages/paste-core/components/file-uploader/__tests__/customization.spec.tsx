import { render, screen } from "@testing-library/react";
import type { PasteCustomCSS } from "@twilio-paste/customization";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Theme } from "@twilio-paste/theme";
import * as React from "react";

import {
  FileUploader,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
  FileUploaderErrorText,
  FileUploaderHelpText,
  FileUploaderItem,
  FileUploaderItemDescription,
  FileUploaderItemTitle,
  FileUploaderItemsList,
  FileUploaderLabel,
} from "../src";

const getCustomizationStyles = (element = "FILE_UPLOADER"): { [key: string]: PasteCustomCSS } => ({
  [`${element}`]: { maxWidth: "size30" },
  [`${element}_DROPZONE_TEXT`]: { fontFamily: "fontFamilyCode" },
  [`${element}_DROPZONE`]: { borderRadius: "borderRadius0" },
  [`${element}_HELP_TEXT`]: { marginBottom: "space10" },
  [`${element}_ERROR_TEXT`]: { marginBottom: "space10" },
  [`${element}_ITEM_CONTENT`]: { rowGap: "space30" },
  [`${element}_ITEM_DESCRIPTION`]: { fontSize: "fontSize40" },
  [`${element}_ITEM_TITLE`]: { fontSize: "fontSize40" },
  [`${element}_ITEM_BUTTON`]: { padding: "space10" },
  [`${element}_ITEM`]: { padding: "space10" },
  [`${element}_ITEMS_LIST`]: { rowGap: "space10" },
  [`${element}_LABEL`]: { fontWeight: "fontWeightNormal" },
});

describe("FileUploader customization", () => {
  it("should set an element data attribute on File Uploader", () => {
    render(
      <Theme.Provider theme="default">
        <FileUploader name="Default File Uploader" data-testid="my-uploader">
          <FileUploaderLabel data-testid="my-label">Upload files</FileUploaderLabel>
          <FileUploaderHelpText data-testid="my-help-text">Files can be up to 50 MB.</FileUploaderHelpText>
          <FileUploaderDropzone acceptedMimeTypes={["text/css", "image/jpeg", "image/png", "application/pdf"]}>
            <FileUploaderDropzoneText>Click to browse or drag files here.</FileUploaderDropzoneText>
          </FileUploaderDropzone>
          <FileUploaderErrorText data-testid="my-error-text">
            One of your files failed to upload. Please try again.
          </FileUploaderErrorText>
          <FileUploaderItemsList>
            <FileUploaderItem variant="loading">
              <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
              <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
            </FileUploaderItem>
          </FileUploaderItemsList>
        </FileUploader>
      </Theme.Provider>,
    );

    const uploader = screen.getByTestId("my-uploader");
    const label = screen.getByTestId("my-label");
    const helpText = screen.getByTestId("my-help-text");
    const errorText = screen.getByTestId("my-error-text");
    const dropzone = screen.getByLabelText("Upload files").parentElement;
    const dropzoneText = screen.getByText("Click to browse or drag files here.");
    const itemsList = screen.getByRole("list");
    const item = screen.getAllByRole("listitem")[0];
    const itemTitle = screen.getByText("File1.png");
    const itemContent = itemTitle.parentElement;
    const itemDescription = screen.getByText("Uploading...");
    const itemButton = screen.getAllByRole("button", { name: "Remove file" })[0];

    expect(uploader.dataset.pasteElement).toBe("FILE_UPLOADER");
    expect(label.dataset.pasteElement).toBe("FILE_UPLOADER_LABEL");
    expect(helpText.dataset.pasteElement).toBe("FILE_UPLOADER_HELP_TEXT");
    expect(errorText.dataset.pasteElement).toBe("FILE_UPLOADER_ERROR_TEXT");
    expect(dropzone?.dataset.pasteElement).toBe("FILE_UPLOADER_DROPZONE");
    expect(dropzoneText.dataset.pasteElement).toBe("FILE_UPLOADER_DROPZONE_TEXT");
    expect(itemsList.dataset.pasteElement).toBe("FILE_UPLOADER_ITEMS_LIST");
    expect(item.dataset.pasteElement).toBe("FILE_UPLOADER_ITEM");
    expect(itemTitle.dataset.pasteElement).toBe("FILE_UPLOADER_ITEM_TITLE");
    expect(itemContent?.dataset.pasteElement).toBe("FILE_UPLOADER_ITEM_CONTENT");
    expect(itemDescription.dataset.pasteElement).toBe("FILE_UPLOADER_ITEM_DESCRIPTION");
    expect(itemButton.dataset.pasteElement).toBe("FILE_UPLOADER_ITEM_BUTTON");
  });

  it("should set a custom element data attribute on File Uploader", () => {
    render(
      <Theme.Provider theme="default">
        <FileUploader name="Default File Uploader" data-testid="my-uploader" element="MY_UPLOADER">
          <FileUploaderLabel data-testid="my-label" element="MY_UPLOADER_LABEL">
            Upload files
          </FileUploaderLabel>
          <FileUploaderHelpText data-testid="my-help-text" element="MY_UPLOADER_HELP_TEXT">
            Files can be up to 50 MB.
          </FileUploaderHelpText>
          <FileUploaderDropzone
            acceptedMimeTypes={["text/css", "image/jpeg", "image/png", "application/pdf"]}
            element="MY_UPLOADER_DROPZONE"
          >
            <FileUploaderDropzoneText element="MY_UPLOADER_DROPZONE_TEXT">
              Click to browse or drag files here.
            </FileUploaderDropzoneText>
          </FileUploaderDropzone>
          <FileUploaderErrorText data-testid="my-error-text" element="MY_UPLOADER_ERROR_TEXT">
            One of your files failed to upload. Please try again.
          </FileUploaderErrorText>
          <FileUploaderItemsList element="MY_UPLOADER_ITEMS_LIST">
            <FileUploaderItem variant="loading" element="MY_UPLOADER_ITEM">
              <FileUploaderItemTitle element="MY_UPLOADER_ITEM_TITLE">File1.png</FileUploaderItemTitle>
              <FileUploaderItemDescription element="MY_UPLOADER_ITEM_DESCRIPTION">
                Uploading...
              </FileUploaderItemDescription>
            </FileUploaderItem>
          </FileUploaderItemsList>
        </FileUploader>
      </Theme.Provider>,
    );

    const uploader = screen.getByTestId("my-uploader");
    const label = screen.getByTestId("my-label");
    const helpText = screen.getByTestId("my-help-text");
    const errorText = screen.getByTestId("my-error-text");
    const dropzone = screen.getByLabelText("Upload files").parentElement;
    const dropzoneText = screen.getByText("Click to browse or drag files here.");
    const itemsList = screen.getByRole("list");
    const item = screen.getAllByRole("listitem")[0];
    const itemTitle = screen.getByText("File1.png");
    const itemContent = itemTitle.parentElement;
    const itemDescription = screen.getByText("Uploading...");
    const itemButton = screen.getAllByRole("button", { name: "Remove file" })[0];

    expect(uploader.dataset.pasteElement).toBe("MY_UPLOADER");
    expect(label.dataset.pasteElement).toBe("MY_UPLOADER_LABEL");
    expect(helpText.dataset.pasteElement).toBe("MY_UPLOADER_HELP_TEXT");
    expect(errorText.dataset.pasteElement).toBe("MY_UPLOADER_ERROR_TEXT");
    expect(dropzone?.dataset.pasteElement).toBe("MY_UPLOADER_DROPZONE");
    expect(dropzoneText.dataset.pasteElement).toBe("MY_UPLOADER_DROPZONE_TEXT");
    expect(itemsList.dataset.pasteElement).toBe("MY_UPLOADER_ITEMS_LIST");
    expect(item.dataset.pasteElement).toBe("MY_UPLOADER_ITEM");
    expect(itemTitle.dataset.pasteElement).toBe("MY_UPLOADER_ITEM_TITLE");
    expect(itemContent?.dataset.pasteElement).toBe("MY_UPLOADER_ITEM_CONTENT");
    expect(itemDescription.dataset.pasteElement).toBe("MY_UPLOADER_ITEM_DESCRIPTION");
    expect(itemButton.dataset.pasteElement).toBe("MY_UPLOADER_ITEM_BUTTON");
  });

  it("should add custom styling to File Uploader", () => {
    render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles()}>
        <FileUploader name="Default File Uploader" data-testid="my-uploader">
          <FileUploaderLabel data-testid="my-label">Upload files</FileUploaderLabel>
          <FileUploaderHelpText data-testid="my-help-text">Files can be up to 50 MB.</FileUploaderHelpText>
          <FileUploaderDropzone acceptedMimeTypes={["text/css", "image/jpeg", "image/png", "application/pdf"]}>
            <FileUploaderDropzoneText>Click to browse or drag files here.</FileUploaderDropzoneText>
          </FileUploaderDropzone>
          <FileUploaderErrorText data-testid="my-error-text">
            One of your files failed to upload. Please try again.
          </FileUploaderErrorText>
          <FileUploaderItemsList>
            <FileUploaderItem variant="loading">
              <FileUploaderItemTitle>File1.png</FileUploaderItemTitle>
              <FileUploaderItemDescription>Uploading...</FileUploaderItemDescription>
            </FileUploaderItem>
          </FileUploaderItemsList>
        </FileUploader>
      </CustomizationProvider>,
    );

    const uploader = screen.getByTestId("my-uploader");
    const label = screen.getByTestId("my-label");
    const helpText = screen.getByTestId("my-help-text");
    const errorText = screen.getByTestId("my-error-text");
    const dropzone = screen.getByLabelText("Upload files").parentElement;
    const dropzoneText = screen.getByText("Click to browse or drag files here.");
    const itemsList = screen.getByRole("list");
    const item = screen.getAllByRole("listitem")[0];
    const itemTitle = screen.getByText("File1.png");
    const itemContent = itemTitle.parentElement;
    const itemDescription = screen.getByText("Uploading...");
    const itemButton = screen.getAllByRole("button", { name: "Remove file" })[0];

    expect(uploader).toHaveStyleRule("max-width", "18.5rem");
    expect(label).toHaveStyleRule("font-weight", "400");
    expect(helpText).toHaveStyleRule("margin-bottom", "0.125rem");
    expect(errorText).toHaveStyleRule("margin-bottom", "0.125rem");
    expect(dropzone).toHaveStyleRule("border-radius", "0");
    expect(dropzoneText).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");
    expect(itemsList).toHaveStyleRule("row-gap", "0.125rem");
    expect(item).toHaveStyleRule("padding", "0.125rem");
    expect(itemTitle).toHaveStyleRule("font-size", "1rem");
    expect(itemContent).toHaveStyleRule("row-gap", "0.5rem");
    expect(itemDescription).toHaveStyleRule("font-size", "1rem");
    expect(itemButton).toHaveStyleRule("padding", "0.125rem");
  });

  it("should add custom styling to a custom named File Uploader", () => {
    render(
      <CustomizationProvider theme={TestTheme} elements={getCustomizationStyles("MY_UPLOADER")}>
        <FileUploader name="Default File Uploader" data-testid="my-uploader" element="MY_UPLOADER">
          <FileUploaderLabel data-testid="my-label" element="MY_UPLOADER_LABEL">
            Upload files
          </FileUploaderLabel>
          <FileUploaderHelpText data-testid="my-help-text" element="MY_UPLOADER_HELP_TEXT">
            Files can be up to 50 MB.
          </FileUploaderHelpText>
          <FileUploaderDropzone
            acceptedMimeTypes={["text/css", "image/jpeg", "image/png", "application/pdf"]}
            element="MY_UPLOADER_DROPZONE"
          >
            <FileUploaderDropzoneText element="MY_UPLOADER_DROPZONE_TEXT">
              Click to browse or drag files here.
            </FileUploaderDropzoneText>
          </FileUploaderDropzone>
          <FileUploaderErrorText data-testid="my-error-text" element="MY_UPLOADER_ERROR_TEXT">
            One of your files failed to upload. Please try again.
          </FileUploaderErrorText>
          <FileUploaderItemsList element="MY_UPLOADER_ITEMS_LIST">
            <FileUploaderItem variant="loading" element="MY_UPLOADER_ITEM">
              <FileUploaderItemTitle element="MY_UPLOADER_ITEM_TITLE">File1.png</FileUploaderItemTitle>
              <FileUploaderItemDescription element="MY_UPLOADER_ITEM_DESCRIPTION">
                Uploading...
              </FileUploaderItemDescription>
            </FileUploaderItem>
          </FileUploaderItemsList>
        </FileUploader>
      </CustomizationProvider>,
    );

    const uploader = screen.getByTestId("my-uploader");
    const label = screen.getByTestId("my-label");
    const helpText = screen.getByTestId("my-help-text");
    const errorText = screen.getByTestId("my-error-text");
    const dropzone = screen.getByLabelText("Upload files").parentElement;
    const dropzoneText = screen.getByText("Click to browse or drag files here.");
    const itemsList = screen.getByRole("list");
    const item = screen.getAllByRole("listitem")[0];
    const itemTitle = screen.getByText("File1.png");
    const itemContent = itemTitle.parentElement;
    const itemDescription = screen.getByText("Uploading...");
    const itemButton = screen.getAllByRole("button", { name: "Remove file" })[0];

    expect(uploader).toHaveStyleRule("max-width", "18.5rem");
    expect(label).toHaveStyleRule("font-weight", "400");
    expect(helpText).toHaveStyleRule("margin-bottom", "0.125rem");
    expect(errorText).toHaveStyleRule("margin-bottom", "0.125rem");
    expect(dropzone).toHaveStyleRule("border-radius", "0");
    expect(dropzoneText).toHaveStyleRule("font-family", "'TwilioSansMono',Courier,monospace");
    expect(itemsList).toHaveStyleRule("row-gap", "0.125rem");
    expect(item).toHaveStyleRule("padding", "0.125rem");
    expect(itemTitle).toHaveStyleRule("font-size", "1rem");
    expect(itemContent).toHaveStyleRule("row-gap", "0.5rem");
    expect(itemDescription).toHaveStyleRule("font-size", "1rem");
    expect(itemButton).toHaveStyleRule("padding", "0.125rem");
  });
});
