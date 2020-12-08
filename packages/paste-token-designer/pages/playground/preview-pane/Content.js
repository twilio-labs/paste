import {useUID, useUIDSeed} from '@twilio-paste/core/uid-library';
import {Theme} from '@twilio-paste/core/theme';
import {Alert} from '@twilio-paste/core/alert';
import {Anchor} from '@twilio-paste/core/anchor';
import {Box} from '@twilio-paste/core/box';
import {Button} from '@twilio-paste/core/button';
import {Card} from '@twilio-paste/core/card';
import {Column, Grid} from '@twilio-paste/core/grid';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {Heading} from '@twilio-paste/core/heading';
import {MediaBody, MediaFigure, MediaObject} from '@twilio-paste/core/media-object';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '@twilio-paste/core/modal';
import {Paragraph} from '@twilio-paste/core/paragraph';
import {Separator} from '@twilio-paste/core/separator';
import {Stack} from '@twilio-paste/core/stack';
import {Text} from '@twilio-paste/core/text';
import {Disclosure, DisclosureContent, DisclosureHeading} from '@twilio-paste/core/disclosure';
import {useMenuState, MenuButton, Menu, MenuItem, MenuSeparator} from '@twilio-paste/core/menu';
import {TextArea} from '@twilio-paste/core/textarea';
import {Select, Option} from '@twilio-paste/core/select';
import {Radio, RadioGroup} from '@twilio-paste/core/radio-group';
import {Checkbox, CheckboxGroup} from '@twilio-paste/core/checkbox';
import {PlusIcon} from '@twilio-paste/icons/cjs/PlusIcon';
import {ProductTwilioOrgIcon} from '@twilio-paste/icons/cjs/ProductTwilioOrgIcon';
import {ChevronDownIcon} from '@twilio-paste/icons/cjs/ChevronDownIcon';

const ExampleForm = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [selectValue, setSelectValue] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('');
  const inputID = useUIDSeed();
  return (
    <Box as="form">
      <Box marginBottom="space50">
        <Label htmlFor={inputID('input')}>Text input</Label>
        <Input
          id={inputID('input')}
          onChange={e => setInputValue(e.currentTarget.value)}
          type="text"
          value={inputValue}
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={inputID('textarea')}>Textarea</Label>
        <TextArea
          id={inputID('textarea')}
          onChange={e => setTextAreaValue(e.currentTarget.value)}
          value={textAreaValue}
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={inputID('select')}>Text input</Label>
        <Select id={inputID('select')} onChange={e => setSelectValue(e.currentTarget.value)} value={selectValue}>
          <Option value="">Select an option</Option>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Box>
      <Box marginBottom="space50">
        <RadioGroup
          name="bar"
          value={radioValue}
          legend={
            <Text as="span" color="currentColor">
              This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
            </Text>
          }
          required
          orientation="horizontal"
          onChange={newValue => {
            setRadioValue(newValue);
          }}
        >
          <Radio
            id={inputID('radio1')}
            value="1"
            helpText={
              <Text as="span" color="currentColor">
                This is some legend text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
              </Text>
            }
          >
            First
          </Radio>
          <Radio id={inputID('radio2')} value="2" helpText="This is some help text.">
            Second
          </Radio>
          <Radio id={inputID('radio3')} value="3" helpText="This is some help text.">
            Third
          </Radio>
        </RadioGroup>
      </Box>
      <Box marginBottom="space50">
        <CheckboxGroup name="bar" legend="This is the legend text" required orientation="horizontal">
          <Checkbox id={inputID('check1')} value="1" helpText="This is some help text.">
            First
          </Checkbox>
          <Checkbox id={inputID('check2')} value="2" helpText="This is some help text.">
            Second
          </Checkbox>
          <Checkbox id={inputID('cehck3')} value="3" helpText="This is some help text.">
            Third
          </Checkbox>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

const PlainMenu = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Preferences <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Settings</MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
};

export default function Content() {
  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();

  // Content properties
  const [projectName, setProjectName] = React.useState('');
  const projectInputID = useUID();

  const handleClick = event => {
    alert('clicked');
  };

  return (
    <Theme.Provider theme="default">
      <Box marginBottom="space60" marginTop={['space10', 'space110']} marginLeft="space60" marginRight="space60">
        <Stack orientation="vertical" spacing="space160">
          <Stack orientation="vertical" spacing="space70">
            <Alert variant="neutral">
              <Text as="p">
                <strong>Attention:</strong> These are some of the latest components from Paste Core.
              </Text>
            </Alert>

            <Separator orientation="horizontal" />

            <Box as="section">
              <Heading as="h1" variant="heading10">
                Hello Paste
              </Heading>
              <Paragraph>
                Some more text that is set as a Paragraph.{' '}
                <Anchor href="http://paste.twilio.design">I'm an anchor</Anchor>
              </Paragraph>
            </Box>
          </Stack>

          <Separator orientation="horizontal" />

          <Disclosure>
            <DisclosureHeading as="h2" variant="heading20">
              Buttons
            </DisclosureHeading>
            <DisclosureContent>
              <Stack orientation="vertical" spacing="space70">
                <Heading as="h2" variant="heading20">
                  Buttons
                </Heading>

                <Heading as="h3" variant="heading30">
                  Large Buttons
                </Heading>

                <Stack orientation="horizontal" spacing="space50">
                  <Button variant="primary" onClick={handleClick}>
                    <PlusIcon decorative={true} /> Add
                  </Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="destructive" loading>
                    Destructive
                  </Button>
                  <Button variant="destructive_secondary">Secondary Destructive</Button>
                  <Button variant="secondary">
                    Add <PlusIcon decorative={true} />
                  </Button>
                </Stack>

                <Button variant="secondary" fullWidth>
                  Full width Secondary
                </Button>

                <Heading as="h3" variant="heading30">
                  Small Buttons
                </Heading>

                <Stack orientation="horizontal" spacing="space50">
                  <Button aria-expanded="true" variant="primary" size="small">
                    Primary small
                  </Button>
                  <Button variant="primary" size="small" disabled>
                    Primary small
                  </Button>
                  <Button variant="secondary" size="small">
                    Secondary small
                  </Button>
                  <Button variant="destructive" size="small">
                    Destructive small
                  </Button>
                  <Button variant="destructive_secondary" size="small">
                    Secondary Destructive small
                  </Button>
                </Stack>

                <Heading as="h3" variant="heading30">
                  Link Buttons
                </Heading>

                <Stack orientation="horizontal" spacing="space50">
                  <Button variant="link">Secondary link small</Button>
                  <Button variant="destructive_link">Destructive link</Button>
                </Stack>
              </Stack>
            </DisclosureContent>
          </Disclosure>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Disclosure variant="contained">
              <DisclosureHeading as="h2" variant="heading20">
                Forms example
              </DisclosureHeading>
              <DisclosureContent>
                <ExampleForm />
              </DisclosureContent>
            </Disclosure>
          </Box>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Heading as="h2" variant="heading20">
              Media Object
            </Heading>
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space40">
                <ProductTwilioOrgIcon decorative={false} title="Twilio Org" />
              </MediaFigure>
              <MediaBody>
                <Text as="span" fontSize="fontSize40">
                  Some flexed text
                </Text>
              </MediaBody>
            </MediaObject>
          </Box>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Heading as="h2" variant="heading20">
              Grid
            </Heading>
            <Grid marginTop="space70" gutter="space40" marginBottom="space70">
              <Column>
                <Card>Column 1</Card>
              </Column>
              <Column>
                <Card>Column 2</Card>
              </Column>
              <Column>
                <Card>Column 3</Card>
              </Column>
            </Grid>
          </Box>

          <Separator orientation="horizontal" />

          <Box as="section">
            <Heading as="h2" variant="heading20">
              Modal example
            </Heading>

            <Button variant="primary" onClick={handleOpen}>
              New Project
            </Button>
            <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
              <ModalHeader>
                <ModalHeading as="h3" id={modalHeadingID}>
                  Create new project
                </ModalHeading>
              </ModalHeader>
              <ModalBody>
                <Paragraph>
                  Create a new Project within your Organization. Please contact your account representative to configure
                  invoicing.
                </Paragraph>
                <Label htmlFor={projectInputID}>Project Name</Label>
                <Input
                  onChange={e => setProjectName(e.currentTarget.value)}
                  id={projectInputID}
                  type="text"
                  value={projectName}
                />
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
          </Box>
          <Box>
            <Heading as="h2" variant="heading20">
              Menu example
            </Heading>
            <PlainMenu />
          </Box>
        </Stack>
      </Box>
    </Theme.Provider>
  );
}
