import * as React from 'react';
import type {Story} from '@storybook/react';
import {Paragraph} from '@twilio-paste/paragraph';
import {useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Button} from '@twilio-paste/button';

import {
  SideModal,
  SideModalButton,
  SideModalHeader,
  SideModalHeading,
  SideModalContainer,
  SideModalBody,
  SideModalFooter,
  SideModalFooterActions,
} from '../src';
// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Side Modal/Customization',
  component: SideModal,
};

export const CustomizedDialog: Story = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        SIDE_MODAL_BUTTON: {
          backgroundColor: 'colorBackgroundErrorWeakest',
          color: 'colorTextErrorStronger',
        },
        SIDE_MODAL: {
          boxShadow: 'shadowFocus',
        },
        SIDE_MODAL_BODY: {
          backgroundColor: 'colorBackgroundErrorWeakest',
          color: 'colorTextErrorStronger',
        },
        SIDE_MODAL_HEADER: {
          padding: 'space80',
          borderBottomWidth: 'borderWidth30',
        },
        SIDE_MODAL_HEADING: {
          fontSize: 'fontSize60',
          lineHeight: 'lineHeight60',
        },
        SIDE_MODAL_HEADER_CLOSE_BUTTON: {
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderLight',
        },
        SIDE_MODAL_HEADER_CLOSE_ICON: {
          width: 'sizeIcon50',
        },
        SIDE_MODAL_FOOTER: {
          borderTopWidth: 'borderWidth30',
          padding: 'space10',
        },
        SIDE_MODAL_FOOTER_ACTIONS: {
          justifyContent: 'flex-start',
        },
      }}
    >
      <SideModalContainer visible>
        <SideModalButton variant="primary">Button</SideModalButton>
        <SideModal aria-label="My custom dialog">
          <SideModalHeader>
            <SideModalHeading>My custom dialog</SideModalHeading>
          </SideModalHeader>
          <SideModalBody>
            <Paragraph>This is a dialog.</Paragraph>
          </SideModalBody>
          <SideModalFooter>
            <SideModalFooterActions>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </SideModalFooterActions>
          </SideModalFooter>
        </SideModal>
      </SideModalContainer>
    </CustomizationProvider>
  );
};
