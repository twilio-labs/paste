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
  });
