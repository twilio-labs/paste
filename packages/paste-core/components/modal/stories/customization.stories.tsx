import * as React from 'react';
import type {Story} from '@storybook/react';
import {useUID} from '@twilio-paste/uid-library';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';

import type {ModalProps} from '../src';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '../src';

export const initStyles = (prefix: string): Record<string, PasteCustomCSS> => ({
  [prefix]: {
    borderRadius: 'borderRadius30',
    boxShadow: 'shadowHigh',
    borderColor: 'colorBorderStrong',
    variants: {
      wide: {
        maxWidth: 'unset',
        width: '70%',
      },
    },
  },
  [`${prefix}_OVERLAY`]: {
    backgroundColor: 'colorBackgroundBrandStronger',
    variants: {
      wide: {
        backgroundColor: 'colorBackground',
      },
    },
  },
  [`${prefix}_HEADING`]: {
    fontSize: 'fontSize110',
  },
  [`${prefix}_HEADER`]: {
    borderWidth: 'borderWidth0',
    borderStyle: 'none',
    borderColor: 'transparent',
  },
  [`${prefix}_BODY`]: {
    paddingX: 'space60',
  },
  [`${prefix}_FOOTER`]: {
    borderWidth: 'borderWidth0',
    borderStyle: 'none',
    borderColor: 'transparent',
  },
  [`${prefix}_FOOTER_ACTIONS`]: {
    justifyContent: 'flex-start',
  },
  [`${prefix}_FOOTER_ACTIONS_ITEM`]: {
    paddingX: 'space40',
    ':first-of-type': {
      paddingLeft: 'space0',
    },
  },
});

const getElementName = (elementName: string | undefined, suffix?: string): string | undefined => {
  const end = suffix ? `_${suffix}` : '';
  return elementName != null ? `${elementName}${end}` : undefined;
};

type BaseModalProps = Pick<ModalProps, 'size'> & {element?: string | undefined};
const NOOP: VoidFunction = () => null;
export const BaseModal: React.FC<React.PropsWithChildren<BaseModalProps>> = ({size, element}) => {
  const modalHeadingId = useUID();

  return (
    <Modal
      element={getElementName(element)}
      data-testid="modal-test-id"
      ariaLabelledby={modalHeadingId}
      isOpen
      onDismiss={NOOP}
      size={size}
    >
      <ModalHeader element={getElementName(element, 'HEADER')} data-testid="modal-header-test-id">
        <ModalHeading
          element={getElementName(element, 'HEADING')}
          as="h3"
          id={modalHeadingId}
          data-testid="modal-heading-test-id"
        >
          Modal Heading
        </ModalHeading>
      </ModalHeader>
      <ModalBody element={getElementName(element, 'BODY')} data-testid="modal-body-test-id">
        <Heading as="h2" variant="heading40">
          Modal heading
        </Heading>
        <Paragraph>Custom modal body content.</Paragraph>
      </ModalBody>
      <ModalFooter element={getElementName(element, 'FOOTER')} data-testid="modal-footer-test-id">
        <ModalFooterActions
          element={getElementName(element, 'FOOTER_ACTIONS')}
          data-testid="modal-footer-actions-test-id"
        >
          <Button variant="secondary" onClick={NOOP}>
            Cancel
          </Button>
          <Button variant="primary" onClick={NOOP}>
            Submit
          </Button>
        </ModalFooterActions>
      </ModalFooter>
    </Modal>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Modal/Customization',
  component: Modal,
  subcomponents: {ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading},
  excludeStories: ['initStyles', 'BaseModal'],
};

export const First: Story = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initStyles('MODAL')} disableAnimations={isTestEnvironment}>
      <BaseModal size="default" />
    </CustomizationProvider>
  );
};

First.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Normal variant - Default element names',
};

export const Second: Story = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initStyles('CUSTOM')} disableAnimations={isTestEnvironment}>
      <BaseModal element="CUSTOM" size="default" />
    </CustomizationProvider>
  );
};

Second.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Normal variant - Custom element names',
};

export const Third: Story = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initStyles('MODAL')} disableAnimations={isTestEnvironment}>
      <BaseModal element="MODAL" size="wide" />
    </CustomizationProvider>
  );
};

Third.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Wide variant - Default element names',
};

export const Fourth: Story = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initStyles('CUSTOM')} disableAnimations={isTestEnvironment}>
      <BaseModal element="CUSTOM" size="wide" />
    </CustomizationProvider>
  );
};

Fourth.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Wide variant - Custom element names',
};
