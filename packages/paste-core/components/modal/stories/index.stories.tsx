import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Flex} from '@twilio-paste/flex';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Popover, PopoverContainer, PopoverButton} from '@twilio-paste/popover';
import {Tooltip} from '@twilio-paste/tooltip';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {FormLabel, FormInput} from '@twilio-paste/form';
import type {ModalProps} from '../src';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalHeading,
  ModalContext,
  ModalDialogContent,
  ModalDialogOverlay,
} from '../src';

type ModalTriggerProps = Pick<ModalProps, 'size'>;
const ModalTrigger: React.FC<ModalTriggerProps> = ({size}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size={size} data-testid="foo">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: {ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading},
};

export const Default = (): React.ReactNode => {
  return <ModalTrigger size="default" />;
};

Default.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const Wide = (): React.ReactNode => {
  return <ModalTrigger size="wide" />;
};

Wide.story = {
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const FooterActions = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

FooterActions.story = {
  name: 'Footer actions',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const LeftAlignedFooterActions = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions justify="start">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

LeftAlignedFooterActions.story = {
  name: 'Left aligned footer actions',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const DirectionalFooterActions = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions justify="start">
            <Button variant="secondary">Back</Button>
          </ModalFooterActions>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

DirectionalFooterActions.story = {
  name: 'Directional footer actions',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const ExtremelyLongHeading = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ExtremelyLongHeading.story = {
  name: 'Extremely long heading',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const OverflowingBodyContent = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Edit Account Details
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis
            interdum.
          </Paragraph>
          <Paragraph>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
            porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
            magna mollis euismod.
          </Paragraph>
          <Paragraph>
            Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Paragraph>
          <Paragraph>
            Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit
            sit amet non magna.
          </Paragraph>
          <Paragraph>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Aenean lacinia
            bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </Paragraph>
          <Paragraph>
            Maecenas faucibus mollis interdum. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna
            mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Paragraph>
          <Paragraph>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor
            fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere
            consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Paragraph>
          <Paragraph>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis
            interdum.
          </Paragraph>
          <Paragraph>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis
            interdum.
          </Paragraph>
          <Paragraph>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
            porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
            magna mollis euismod.
          </Paragraph>
          <Paragraph>
            Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Paragraph>
          <Paragraph>
            Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit
            sit amet non magna.
          </Paragraph>
          <Paragraph>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Aenean lacinia
            bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </Paragraph>
          <Paragraph>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
            porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada
            magna mollis euismod.
          </Paragraph>
          <Paragraph>
            Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Paragraph>
          <Paragraph>
            Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit
            sit amet non magna.
          </Paragraph>
          <Paragraph>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Aenean lacinia
            bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

OverflowingBodyContent.story = {
  name: 'Overflowing body content',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const HeaderContent = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Edit Account Details
          </ModalHeading>
          <Flex as="div" marginLeft="space40" vAlignContent="center">
            <InformationIcon decorative={false} title="information" size="sizeIcon10" />
            <Text as="span" color="colorTextWeak" fontSize="fontSize20">
              More information
            </Text>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

HeaderContent.story = {
  name: 'Header content',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const CustomInitialFocusElement = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [name, setName] = React.useState('');
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const nameInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const modalHeadingID = useUID();
  const inputID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        ariaLabelledby={modalHeadingID}
        isOpen={isOpen}
        onDismiss={handleClose}
        initialFocusRef={nameInputRef}
        size="default"
      >
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Box as="form">
            <FormLabel htmlFor={inputID}>Name</FormLabel>
            <FormInput
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
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

CustomInitialFocusElement.story = {
  name: 'Custom initial focus element',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const ConsolePatchProp = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();
  return (
    <Flex>
      <div id="sidebar-wrapper">Sidebar</div>
      <div id="content">
        <Button variant="primary" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default" __console_patch>
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Modal Heading
            </ModalHeading>
          </ModalHeader>
          <ModalBody>Look at the background, behind the dark overlay.</ModalBody>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      </div>
    </Flex>
  );
};

ConsolePatchProp.story = {
  name: 'Console patch prop',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const TooltipInModal = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();
  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>Look at the modal work with a tooltip.</Paragraph>
          <Tooltip text="Welcome to Paste!" visible>
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

TooltipInModal.story = {
  name: 'Tooltip in modal',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

export const PopoverInModal = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const nameButtonRef: React.RefObject<HTMLButtonElement> = React.createRef();
  const modalHeadingID = useUID();
  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        ariaLabelledby={modalHeadingID}
        isOpen={isOpen}
        onDismiss={handleClose}
        size="default"
        initialFocusRef={nameButtonRef}
      >
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>Look at the modal work with a popover.</Paragraph>
          <PopoverContainer visible>
            <PopoverButton variant="primary" ref={nameButtonRef}>
              Open popover
            </PopoverButton>
            <Popover aria-label="Popover">
              <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
            </Popover>
          </PopoverContainer>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

PopoverInModal.story = {
  name: 'Popover in modal',
  parameters: {
    chromatic: {disableSnapshot: true},
  },
};

const NOOP = (): void => {};

export const ModalOverlayVRT = (): React.ReactNode => {
  return (
    <>
      <Button variant="primary">Button covered by overlay</Button>
      <ModalDialogOverlay />
    </>
  );
};

ModalOverlayVRT.story = {
  name: 'Modal Overlay for VRT',
};

export const ModalDialogVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent>
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

ModalDialogVRT.story = {
  name: 'Modal Dialog for VRT',
};

export const WideModalDialogVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent size="wide">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

WideModalDialogVRT.story = {
  name: 'Wide Modal Dialog for VRT',
};

export const LeftAlignedFooterActionsVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent>
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions justify="start">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

LeftAlignedFooterActionsVRT.story = {
  name: 'Left aligned footer actions for VRT',
};

export const DirectionalFooterActionsVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent>
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions justify="start">
            <Button variant="secondary">Back</Button>
          </ModalFooterActions>
          <ModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

DirectionalFooterActionsVRT.story = {
  name: 'Directional footer actions for VRT',
};

export const ExtremelyLongHeadingVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent>
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

ExtremelyLongHeadingVRT.story = {
  name: 'Extremely long heading for VRT',
};

export const OverflowingBodyContentVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <Box height="500px">
      <ModalContext.Provider value={{onDismiss}}>
        <ModalDialogContent>
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Edit Account Details
            </ModalHeading>
          </ModalHeader>
          <ModalBody>
            <Heading as="h2" variant="heading40">
              Modal heading
            </Heading>
            <Paragraph>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis
              interdum.
            </Paragraph>
            <Paragraph>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
              ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
              porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
              malesuada magna mollis euismod.
            </Paragraph>
            <Paragraph>
              Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </Paragraph>
            <Paragraph>
              Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
              blandit sit amet non magna.
            </Paragraph>
            <Paragraph>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Aenean
              lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum.
            </Paragraph>
            <Paragraph>
              Maecenas faucibus mollis interdum. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna
              mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Paragraph>
            <Paragraph>
              Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor
              fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
              posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            </Paragraph>
            <Paragraph>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis
              interdum.
            </Paragraph>
            <Paragraph>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis
              interdum.
            </Paragraph>
            <Paragraph>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
              ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
              porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
              malesuada magna mollis euismod.
            </Paragraph>
            <Paragraph>
              Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </Paragraph>
            <Paragraph>
              Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
              blandit sit amet non magna.
            </Paragraph>
            <Paragraph>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Aenean
              lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum.
            </Paragraph>
            <Paragraph>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
              ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
              porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
              malesuada magna mollis euismod.
            </Paragraph>
            <Paragraph>
              Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </Paragraph>
            <Paragraph>
              Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
              blandit sit amet non magna.
            </Paragraph>
            <Paragraph>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
              risus. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Aenean
              lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum.
            </Paragraph>
          </ModalBody>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Submit</Button>
            </ModalFooterActions>
          </ModalFooter>
        </ModalDialogContent>
      </ModalContext.Provider>
    </Box>
  );
};

OverflowingBodyContentVRT.story = {
  name: 'Overflowing body content for VRT',
};

export const HeaderContentVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent>
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Edit Account Details
          </ModalHeading>
          <Flex as="div" marginLeft="space40" vAlignContent="center">
            <InformationIcon decorative={false} title="information" size="sizeIcon10" />
            <Text as="span" color="colorTextWeak" fontSize="fontSize20">
              More information
            </Text>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Heading as="h2" variant="heading40">
            Modal heading
          </Heading>
          <Paragraph>Custom modal body content.</Paragraph>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

HeaderContentVRT.story = {
  name: 'Header content for VRT',
};

export const ModalDialogTooltipVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent>
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>Look at the modal work with a tooltip.</Paragraph>
          <Tooltip text="Welcome to Paste!" visible>
            <Button variant="primary">Open tooltip</Button>
          </Tooltip>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

ModalDialogTooltipVRT.story = {
  name: 'Modal Dialog with tooltip for VRT',
};

export const ModalDialogPopoverVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const nameButtonRef: React.RefObject<HTMLButtonElement> = React.createRef();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{onDismiss}}>
      <ModalDialogContent>
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Modal Heading
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Paragraph>Look at the modal work with a popover.</Paragraph>
          <PopoverContainer visible>
            <PopoverButton variant="primary" ref={nameButtonRef}>
              Open popover
            </PopoverButton>
            <Popover aria-label="Popover">
              <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
            </Popover>
          </PopoverContainer>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </ModalFooterActions>
        </ModalFooter>
      </ModalDialogContent>
    </ModalContext.Provider>
  );
};

ModalDialogPopoverVRT.story = {
  name: 'Modal Dialog with popover for VRT',
};
