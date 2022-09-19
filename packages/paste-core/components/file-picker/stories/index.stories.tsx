import * as React from 'react';
import type {Story} from '@storybook/react';
import {useUID} from '@twilio-paste/uid-library';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {CustomizationProvider} from '@twilio-paste/customization';
import {FilePicker, FilePickerButton} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/File Picker',
  component: FilePicker,
};

export const Default: Story = ({...props}) => {
  const id = useUID();
  const helpText = useUID();
  return (
    <>
      <Label htmlFor={id}>Proof of employment</Label>
      <FilePicker id={id} accept=".pdf" aria-describedby={helpText} {...props}>
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
      <HelpText id={helpText}>Upload a pdf</HelpText>
    </>
  );
};

export const Required: Story = () => {
  const id = useUID();
  return (
    <>
      <Label htmlFor={id} required>
        Upload a profile picture
      </Label>
      <FilePicker id={id} required accept="image/*">
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
    </>
  );
};

export const Disabled: Story = () => {
  const id = useUID();
  return (
    <>
      <Label htmlFor={id} disabled>
        Attach your receipt
      </Label>
      <FilePicker id={id} disabled data-testid="test-file-picker">
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
    </>
  );
};

export const I18n: Story = () => {
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

export const Customized: Story = ({element = 'FILEPICKER', ...props}) => {
  const id = useUID();
  const helpText = useUID();
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        [`${element}`]: {fontFamily: 'fontFamilyCode'},
        [`${element}_BUTTON`]: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
        [`${element}_TEXT`]: {marginLeft: 'space10'},
      }}
    >
      <Label htmlFor={id}>What&apos;s your favorite song?</Label>
      <FilePicker id={id} accept="audio/*" aria-describedby={helpText} element={element} {...props}>
        <FilePickerButton variant="secondary">Choose a file</FilePickerButton>
      </FilePicker>
      <HelpText id={helpText}>Upload an audio file</HelpText>
    </CustomizationProvider>
  );
};
