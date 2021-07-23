import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {render} from 'react-dom';
import {render as testRender, fireEvent} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '../src';

const handleCloseMock: jest.Mock = jest.fn();

const MockModal: React.FC<{children?: React.ReactNode}> = ({children}) => {
  const modalHeadingID = `modal-${useUID()}`;
  return (
    <Theme.Provider theme="console">
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
    </Theme.Provider>
  );
};

const MockInitalFocusModal: React.FC = () => {
  const [name, setName] = React.useState('');
  const modalHeadingID = `modal-${useUID()}`;
  const nameInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const inputID = useUID();
  return (
    <Theme.Provider theme="console">
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
              onChange={(e: any) => setName(e.currentTarget.value)}
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
    </Theme.Provider>
  );
};

describe('Modal', () => {
  it('should have the correct accessibility attributes on the container', () => {
    const {getByTestId} = testRender(<MockModal />);
    expect(getByTestId('modal').getAttribute('role')).toEqual('dialog');
    expect(getByTestId('modal').getAttribute('aria-modal')).toEqual('true');
  });

  it('should be labelled by the correct heading', () => {
    const {getByTestId} = testRender(<MockModal />);
    expect(getByTestId('modal').getAttribute('aria-labelledby')).toEqual(
      getByTestId('modal-heading').getAttribute('id')
    );
  });

  it('should be be able to take arbitrary html attributes on the container', () => {
    const {getByTestId} = testRender(<MockModal />);
    expect(getByTestId('modal').getAttribute('aria-busy')).toEqual('true');
    expect(getByTestId('modal').getAttribute('id')).toEqual('a-new-id');
  });

  it('should render with focusable elements in the modal content', () => {
    const {getByTestId} = testRender(
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
      </MockModal>
    );
    expect(getByTestId('modal')).toBeDefined();
  });

  it('should focus on the first focusable element in the modal, the close button', () => {
    const {getByTestId} = testRender(<MockModal />);
    expect(document.activeElement).toEqual(getByTestId('modal-header').querySelector('button'));
  });

  it('should focus on the element provided as the initialFocus element in the modal', () => {
    const {getByTestId} = testRender(<MockInitalFocusModal />);
    expect(document.activeElement).toEqual(getByTestId('modal-body').querySelector('input'));
  });

  it('should call the onDismiss function when the close button is clicked', () => {
    const {getByTestId} = testRender(<MockModal />);
    fireEvent.click(getByTestId('modal-header').querySelector('button') as HTMLButtonElement);
    expect(handleCloseMock).toHaveBeenCalled();
  });

  it('Should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(<MockModal />, container);
    const results = await axe(document.body, {
      rules: {
        // ignore the tabindex of the focus trap helper
        tabindex: {enabled: false},
      },
    });
    expect(results).toHaveNoViolations();
  });
});
