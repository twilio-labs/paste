import * as React from 'react';
import type {Story} from '@storybook/react';
import {Paragraph} from '@twilio-paste/paragraph';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';

import {
  MinimizableDialog,
  MinimizableDialogButton,
  MinimizableDialogHeader,
  MinimizableDialogContainer,
  MinimizableDialogContent,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Minimizable Dialog/Customization',
  component: MinimizableDialog,
};

export const CustomizedDialog: Story = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        MINIMIZABLE_DIALOG_BUTTON: {
          backgroundColor: 'colorBackgroundErrorWeakest',
          color: 'colorTextErrorStronger',
        },
        MINIMIZABLE_DIALOG: {
          backgroundColor: 'colorBackgroundErrorWeakest',
        },
        MINIMIZABLE_DIALOG_CONTENT: {
          color: 'colorTextErrorStronger',
          padding: 'space70',
        },
        MINIMIZABLE_DIALOG_HEADER: {
          padding: 'space80',
        },
        MINIMIZABLE_DIALOG_HEADER_HEADING: {
          fontSize: 'fontSize50',
          lineHeight: 'lineHeight50',
        },
        MINIMIZABLE_DIALOG_HEADER_CLOSE_BUTTON: {
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderLight',
        },
        MINIMIZABLE_DIALOG_HEADER_CLOSE_ICON: {
          width: 'sizeIcon50',
        },
        MINIMIZABLE_DIALOG_HEADER_MINIMIZE_BUTTON: {
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderLight',
        },
        MINIMIZABLE_DIALOG_HEADER_MINIMIZE_ICON: {
          width: 'sizeIcon50',
        },
      }}
    >
      <MinimizableDialogContainer visible>
        <MinimizableDialogButton variant="primary">Button</MinimizableDialogButton>
        <MinimizableDialog aria-label="My custom dialog">
          <MinimizableDialogHeader>My custom dialog</MinimizableDialogHeader>
          <MinimizableDialogContent>
            <Paragraph>This is a dialog.</Paragraph>
          </MinimizableDialogContent>
        </MinimizableDialog>
      </MinimizableDialogContainer>
    </CustomizationProvider>
  );
};
