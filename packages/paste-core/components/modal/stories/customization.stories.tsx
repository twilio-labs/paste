import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';

import type {ModalProps} from '../src';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '../src';

type BaseModalProps = Pick<ModalProps, 'size'> & {testId?: string | undefined; element?: string | undefined};
const NOOP: VoidFunction = () => null;
const BaseModal: React.FC<BaseModalProps> = ({size, element}) => {
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
  return <BaseModal size="default" />;
};

First.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Normal variant - Default element names',
};

export const Second = (): React.ReactNode => {
  return <BaseModal element="CUSTOM" size="default" />;
};

Second.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Normal variant - Custom element names',
};

export const Third = (): React.ReactNode => {
  return <BaseModal size="wide" />;
};

Third.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Wide variant - Default element names',
};

export const Fourth = (): React.ReactNode => {
  return <BaseModal element="CUSTOM" size="wide" />;
};

Fourth.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
  name: 'Wide variant - Custom element names',
};
