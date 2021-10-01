import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';

import type {ModalProps} from '../src';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '../src';

const initOverrides = (prefix: string): Record<string, PasteCustomCSS> => ({
  [prefix]: {
    borderRadius: 'borderRadius30',
    boxShadow: 'shadowHigh',
    borderColor: 'colorBorderDark',
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

type BaseModalProps = Pick<ModalProps, 'size'> & {testId?: string | undefined; element?: string | undefined};
const NOOP: VoidFunction = () => null;
const BaseModal: React.FC<BaseModalProps> = ({size, element = 'MODAL'}) => {
  const modalHeadingId = useUID();

  return (
    <Modal element={element} ariaLabelledby={modalHeadingId} isOpen onDismiss={NOOP} size={size}>
      <ModalHeader element={`${element}_HEADER`}>
        <ModalHeading element={`${element}_HEADING`} as="h3" id={modalHeadingId}>
          Modal Heading
        </ModalHeading>
      </ModalHeader>
      <ModalBody element={`${element}_BODY`}>
        <Heading as="h2" variant="heading40">
          Modal heading
        </Heading>
        <Paragraph>Custom modal body content.</Paragraph>
      </ModalBody>
      <ModalFooter element={`${element}_FOOTER`}>
        <ModalFooterActions element={`${element}_FOOTER_ACTIONS`}>
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
};

export const First = (): React.ReactNode => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initOverrides('MODAL')}>
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

export const Second = (): React.ReactNode => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initOverrides('CUSTOM')}>
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

export const Third = (): React.ReactNode => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initOverrides('MODAL')}>
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

export const Fourth = (): React.ReactNode => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider theme={currentTheme} elements={initOverrides('CUSTOM')}>
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
