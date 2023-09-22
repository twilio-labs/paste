import { fireEvent, render, screen } from '@testing-library/react';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Heading } from '@twilio-paste/heading';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { Paragraph } from '@twilio-paste/paragraph';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading } from '../src';

const handleCloseMock: jest.Mock = jest.fn();

const MockModal: React.FC<React.PropsWithChildren<{ children?: React.ReactNode }>> = ({ children }) => {
  const modalHeadingID = `modal-${useUID()}`;
  return (
    <CustomizationProvider baseTheme="default" theme={TestTheme}>
      <Modal
        data-testid="modal"
        aria-busy="true"
        id="a-new-id"
        ariaLabelledby={modalHeadingID}
        isOpen
        onDismiss={handleCloseMock}
        size="default"
      >
        <ModalHeader data-testid="modal-header">
          <ModalHeading as="h3" data-testid="modal-heading" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody data-testid="modal-body">
          <Heading as="h2" variant="heading40">
            Test Content
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
          {children}
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleCloseMock}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </CustomizationProvider>
  );
};

const MockInitalFocusModal = (): JSX.Element => {
  const [name, setName] = React.useState('');
  const modalHeadingID = `modal-${useUID()}`;
  const nameInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const inputID = useUID();
  return (
    <CustomizationProvider baseTheme="default" theme={TestTheme}>
      <Modal
        data-testid="modal"
        ariaLabelledby={modalHeadingID}
        isOpen
        onDismiss={handleCloseMock}
        size="default"
        initialFocusRef={nameInputRef}
      >
        <ModalHeader data-testid="modal-header">
          <ModalHeading as="h3" data-testid="modal-heading" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody data-testid="modal-body">
          <Box as="form">
            <Label htmlFor={inputID}>Name</Label>
            <Input
              id={inputID}
              value={name}
              ref={nameInputRef}
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleCloseMock}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </CustomizationProvider>
  );
};

const I18nMockModal = (): JSX.Element => {
  const modalHeadingID = `modal-${useUID()}`;
  return (
    <CustomizationProvider baseTheme="default" theme={TestTheme}>
      <Modal ariaLabelledby={modalHeadingID} isOpen onDismiss={handleCloseMock} size="default">
        <ModalHeader i18nDismissLabel="foo bar">
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
      </Modal>
    </CustomizationProvider>
  );
};

describe('Modal', () => {
  it('should have the correct accessibility attributes on the container', () => {
    const { getByTestId } = render(<MockModal />);
    expect(getByTestId('modal').getAttribute('role')).toEqual('dialog');
    expect(getByTestId('modal').getAttribute('aria-modal')).toEqual('true');
  });

  it('should be labelled by the correct heading', () => {
    const { getByTestId } = render(<MockModal />);
    expect(getByTestId('modal').getAttribute('aria-labelledby')).toEqual(
      getByTestId('modal-heading').getAttribute('id'),
    );
  });

  it('should be be able to take arbitrary html attributes on the container', () => {
    const { getByTestId } = render(<MockModal />);
    expect(getByTestId('modal').getAttribute('aria-busy')).toEqual('true');
    expect(getByTestId('modal').getAttribute('id')).toEqual('a-new-id');
  });

  it('should render with focusable elements in the modal content', () => {
    const { getByTestId } = render(
      <MockModal>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <button type="button">Button</button>
        <input type="text" defaultValue="test" aria-label="test" />
      </MockModal>,
    );
    expect(getByTestId('modal')).toBeDefined();
  });

  it('should focus on the first focusable element in the modal, the close button', () => {
    const { getByTestId } = render(<MockModal />);
    expect(document.activeElement).toEqual(getByTestId('modal-header').querySelector('button'));
  });

  it('should focus on the element provided as the initialFocus element in the modal', () => {
    const { getByTestId } = render(<MockInitalFocusModal />);
    expect(document.activeElement).toEqual(getByTestId('modal-body').querySelector('input'));
  });

  it('should call the onDismiss function when the close button is clicked', () => {
    const { getByTestId } = render(<MockModal />);
    fireEvent.click(getByTestId('modal-header').querySelector('button') as HTMLButtonElement);
    expect(handleCloseMock).toHaveBeenCalled();
  });
});

describe('i18n', () => {
  describe('ModalHeading', () => {
    it('should have default dismiss button text', () => {
      render(<MockModal />);
      const dismissButton = screen.getByRole('button', { name: 'Close modal' });
      expect(dismissButton).toBeDefined();
    });

    it('should use i18nDismissLabel for dismiss button text', () => {
      render(<I18nMockModal />);
      const dismissButton = screen.getByRole('button', { name: 'foo bar' });
      expect(dismissButton).toBeDefined();
    });
  });
});
