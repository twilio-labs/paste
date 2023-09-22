import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Flex } from '@twilio-paste/flex';
import { Heading } from '@twilio-paste/heading';
import { InformationIcon } from '@twilio-paste/icons/esm/InformationIcon';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { Paragraph } from '@twilio-paste/paragraph';
import { Popover, PopoverButton, PopoverContainer } from '@twilio-paste/popover';
import { Option, Select } from '@twilio-paste/select';
import { Text } from '@twilio-paste/text';
import { Tooltip } from '@twilio-paste/tooltip';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import type { ModalProps } from '../src';
import {
  Modal,
  ModalBody,
  ModalContext,
  ModalDialogContent,
  ModalDialogOverlay,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalHeading,
} from '../src';

type ModalTriggerProps = Pick<ModalProps, 'size'>;
const ModalTrigger: React.FC<React.PropsWithChildren<ModalTriggerProps>> = ({ size }) => {
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
  subcomponents: { ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading },
};

export const Default = (): React.ReactNode => {
  return <ModalTrigger size="default" />;
};

Default.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const Wide = (): React.ReactNode => {
  return <ModalTrigger size="wide" />;
};

Wide.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

FooterActions.storyName = 'Footer actions';
FooterActions.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

LeftAlignedFooterActions.storyName = 'Left aligned footer actions';
LeftAlignedFooterActions.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

DirectionalFooterActions.storyName = 'Directional footer actions';
DirectionalFooterActions.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

ExtremelyLongHeading.storyName = 'Extremely long heading';
ExtremelyLongHeading.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

OverflowingBodyContent.storyName = 'Overflowing body content';
OverflowingBodyContent.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

HeaderContent.storyName = 'Header content';
HeaderContent.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const i18nProp = (): React.ReactNode => {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);
  const modalHeadingID = useUID();
  const selectID = useUID();

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Abrir modal
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader i18nDismissLabel="Cerrar modal">
          <ModalHeading as="h3" id={modalHeadingID}>
            Escoja una autora
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Label htmlFor={selectID}>Escoja una autora</Label>
          <Select id={selectID}>
            <Option value="allende">Isabel Allende</Option>
            <Option value="cisneros">Sandra Cisneros</Option>
            <Option value="santiago">Esmeralda Santiago</Option>
            <Option value="anzaldúa">Gloria E. Anzaldúa</Option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary">Confirmar</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </div>
  );
};

i18nProp.storyName = 'i18n prop';
i18nProp.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

CustomInitialFocusElement.storyName = 'Custom initial focus element';
CustomInitialFocusElement.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

TooltipInModal.storyName = 'Tooltip in modal';
TooltipInModal.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

PopoverInModal.storyName = 'Popover in modal';
PopoverInModal.parameters = {
  chromatic: { disableSnapshot: true },
  a11y: {
    // no need to a11y check customization
    disable: true,
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

ModalOverlayVRT.storyName = 'Modal Overlay for VRT';

export const ModalDialogVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID}>
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

ModalDialogVRT.storyName = 'Modal Dialog for VRT';

export const WideModalDialogVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID} size="wide">
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

WideModalDialogVRT.storyName = 'Wide Modal Dialog for VRT';

export const LeftAlignedFooterActionsVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID}>
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

LeftAlignedFooterActionsVRT.storyName = 'Left aligned footer actions for VRT';

export const DirectionalFooterActionsVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID}>
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

DirectionalFooterActionsVRT.storyName = 'Directional footer actions for VRT';

export const ExtremelyLongHeadingVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID}>
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

ExtremelyLongHeadingVRT.storyName = 'Extremely long heading for VRT';

export const OverflowingBodyContentVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <Box height="500px">
      <ModalContext.Provider value={{ onDismiss }}>
        <ModalDialogContent aria-labelledby={modalHeadingID}>
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

OverflowingBodyContentVRT.storyName = 'Overflowing body content for VRT';

export const HeaderContentVRT = (): React.ReactNode => {
  const onDismiss = NOOP;
  const modalHeadingID = useUID();

  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID}>
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

HeaderContentVRT.storyName = 'Header content for VRT';

export const ModalDialogTooltipVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID}>
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

ModalDialogTooltipVRT.storyName = 'Modal Dialog with tooltip for VRT';

export const ModalDialogPopoverVRT = (): React.ReactNode => {
  const modalHeadingID = useUID();
  const nameButtonRef: React.RefObject<HTMLButtonElement> = React.createRef();
  const onDismiss = NOOP;
  return (
    <ModalContext.Provider value={{ onDismiss }}>
      <ModalDialogContent aria-labelledby={modalHeadingID}>
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

ModalDialogPopoverVRT.storyName = 'Modal Dialog with popover for VRT';
