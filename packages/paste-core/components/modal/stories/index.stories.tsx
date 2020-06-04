import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useUID} from 'react-uid';
import {withKnobs} from '@storybook/addon-knobs';
import {Button} from '@twilio-paste/button';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Flex} from '@twilio-paste/flex';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {FormLabel, FormInput} from '@twilio-paste/form';
import {CustomizationProvider} from '@twilio-paste/theme';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading, ModalProps} from '../src';

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

storiesOf('Components|Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <ModalTrigger size="default" />;
  })
  .add('wide', () => {
    return <ModalTrigger size="wide" />;
  })
  .add('footer actions', () => {
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
  })
  .add('left aligned footer actions', () => {
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
  })
  .add('directional footer actions', () => {
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
  })
  .add('Extremely long heading', () => {
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
  })
  .add('Overflowing body content', () => {
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
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary">Submit</Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      </div>
    );
  })
  .add('Header content', () => {
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
  })
  .add('custom initial focus element', () => {
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
                onChange={e => setName(e.currentTarget.value)}
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
  })
  .add('console patch prop', () => {
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
  })
  .add('Customization', () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const handleOpen = (): void => setIsOpen(true);
    const handleClose = (): void => setIsOpen(false);
    const modalHeadingID = useUID();

    return (
      <CustomizationProvider
        elements={{
          MODAL_OVERLAY: {
            backgroundColor: 'black',
          },
          MODAL: {
            borderRadius: '10px',
            borderColor: 'colorBorderSuccess',
          },
          MODAL_HEADER: {
            backgroundColor: 'colorBackgroundError',
          },
          MODAL_HEADING: {
            color: 'hotpink',
          },
          MODAL_BODY: {
            backgroundColor: 'colorBackgroundSuccess',
          },
          MODAL_FOOTER: {
            backgroundColor: 'colorBackgroundWarning',
          },
          MODAL_FOOTER_ACTIONS: {
            backgroundColor: 'green',
          },
        }}
      >
        <Button variant="primary" onClick={handleOpen}>
          Open
        </Button>
        <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Customized
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
      </CustomizationProvider>
    );
  });
