import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { HelpText } from "@twilio-paste/help-text";
import { Label } from "@twilio-paste/label";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { FilePicker, FilePickerButton } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/File Picker",
  component: FilePicker,
};

export const Default: StoryFn = ({ ...props }) => {
  const id = useUID();
  const helpText = useUID();
  return (
    <>
      <Label htmlFor={id}>Proof of employment</Label>
      <FilePicker id={id} accept=".pdf" aria-describedby={helpText} {...props}>
        <FilePickerButton variant="secondary">Select file</FilePickerButton>
      </FilePicker>
      <HelpText id={helpText}>Only PDF files please</HelpText>
    </>
  );
};

export const Required: StoryFn = ({ ...props }) => {
  const id = useUID();
  return (
    <>
      <Label htmlFor={id} required>
        Choose a profile picture
      </Label>
      <FilePicker id={id} required accept="image/*" {...props}>
        <FilePickerButton variant="secondary">Select file</FilePickerButton>
      </FilePicker>
    </>
  );
};

export const Disabled: StoryFn = () => {
  const id = useUID();
  return (
    <>
      <Label htmlFor={id} disabled>
        Attach your receipt
      </Label>
      <FilePicker id={id} disabled data-testid="test-file-picker">
        <FilePickerButton variant="secondary">Select file</FilePickerButton>
      </FilePicker>
    </>
  );
};

export const I18n: StoryFn = () => {
  const id = useUID();
  return (
    <>
      <Label htmlFor={id}>Foto de perfil</Label>
      <FilePicker id={id} accept="image/*" i18nNoSelectionText="Ningún archivo seleccionado">
        <FilePickerButton variant="secondary">Seleccione un archivo</FilePickerButton>
      </FilePicker>
    </>
  );
};

export const ContainedWidth: StoryFn = () => {
  const id = useUID();
  return (
    <Box width="size40">
      <Label htmlFor={id}>Profile picture</Label>
      <FilePicker id={id}>
        <FilePickerButton variant="secondary">Select file with a long name</FilePickerButton>
      </FilePicker>
    </Box>
  );
};

export const OnChange: StoryFn = () => {
  const id = useUID();
  const [uploadedFileName, setUploadedFileName] = React.useState("Select file to see the onChange run");
  return (
    <>
      <Label htmlFor={id}>Profile picture</Label>
      <FilePicker
        id={id}
        onChange={(evt) => {
          if (evt.currentTarget.files) setUploadedFileName(evt.currentTarget.files[0].name);
        }}
      >
        <FilePickerButton variant="secondary">Select file</FilePickerButton>
      </FilePicker>
      {uploadedFileName}
    </>
  );
};

export const Customized: StoryFn = ({ element = "FILEPICKER", ...props }) => {
  const id = useUID();
  const helpText = useUID();
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        [`${element}`]: { fontFamily: "fontFamilyCode" },
        [`${element}_BUTTON`]: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        [`${element}_TEXT`]: { marginLeft: "space10" },
      }}
    >
      <Label htmlFor={id}>What&apos;s your favorite song?</Label>
      <FilePicker id={id} accept="audio/*" aria-describedby={helpText} element={element} {...props}>
        <FilePickerButton variant="secondary">Select file</FilePickerButton>
      </FilePicker>
      <HelpText id={helpText}>Upload an audio file</HelpText>
    </CustomizationProvider>
  );
};
Customized.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
