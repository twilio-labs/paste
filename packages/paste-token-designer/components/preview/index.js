import {useUID, useUIDSeed} from '@twilio-paste/core/uid-library';
import {Theme} from '@twilio-paste/core/theme';
import {Alert} from '@twilio-paste/core/alert';
import {Anchor} from '@twilio-paste/core/anchor';
import {Avatar} from '@twilio-paste/core/avatar';
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
import {Table, THead, TBody, Td, Tr, Th} from '@twilio-paste/core/table';
import {Tabs, Tab, TabList, TabPanel, TabPanels} from '@twilio-paste/core/tabs';
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

const Preview = () => {
  return (
    <Theme.Provider theme="default">
      <Box display="flex" height="100vh">
        <Box
          backgroundColor="colorBackgroundBody"
          borderRightColor="colorBorder"
          borderRightWidth="borderWidth10"
          borderRightStyle="solid"
          flex="1 1 15%"
          padding="space60"
        >
          <Avatar size="sizeIcon90" name="Trayvon Martin" />
          <Box marginTop="space60">
            <Stack orientation="vertical" spacing="space60">
              <Anchor href="#">First Section</Anchor>
              <Anchor href="#">Second Section</Anchor>
              <Anchor href="#">Third Section</Anchor>
              <Anchor href="#">Fourth Section</Anchor>
            </Stack>
          </Box>
        </Box>
        <Box backgroundColor="colorBackgroundBody" flex="1 1 55%" padding="space60">
          <Heading as="h3" variant="heading10">
            This is the heading
          </Heading>
          <Tabs>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
            <TabPanels>
              <TabPanel>
                <Box marginTop="space90" marginBottom="space90">
                  <Stack orientation="vertical" spacing="space90">
                    <Card>
                      <MediaObject verticalAlign="center">
                        <MediaFigure spacing="space60">
                          <Avatar size="sizeIcon90" name="Trayvon Martin" />
                        </MediaFigure>
                        <MediaBody>
                          <Heading as="h3" variant="heading40">
                            Card Heading
                          </Heading>
                          <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio,
                            sit amet fermentum mauris lobortis a. Sed faucibus scelerisque suscipit.{' '}
                          </Paragraph>
                          <Stack orientation="horizontal" spacing="space60">
                            <Button variant="secondary">Save</Button>
                            <Button variant="link">Cancel</Button>
                          </Stack>
                        </MediaBody>
                      </MediaObject>
                    </Card>
                    <Table>
                      <THead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Message</Th>
                        </Tr>
                      </THead>
                      <TBody>
                        <Tr>
                          <Td>First and Last Name</Td>
                          <Td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio,
                            sit amet fermentum mauris lobortis a.
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>First and Last Name</Td>
                          <Td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio,
                            sit amet fermentum mauris lobortis a.
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>First and Last Name</Td>
                          <Td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio,
                            sit amet fermentum mauris lobortis a.
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>First and Last Name</Td>
                          <Td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio,
                            sit amet fermentum mauris lobortis a.
                          </Td>
                        </Tr>
                      </TBody>
                    </Table>
                  </Stack>
                </Box>
              </TabPanel>
              <TabPanel>Second</TabPanel>
              <TabPanel>Third</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          borderLeftColor="colorBorder"
          borderLeftWidth="borderWidth10"
          borderLeftStyle="solid"
          flex="1 1 30%"
          padding="space60"
        >
          <Alert variant="warning">
            <Text as="span">
              <strong>Chimamanda Ngozi Adichie:</strong> Racism should never have happened and so you don't get a cookie
              for reducing it.
            </Text>
          </Alert>
          <Box marginTop="space90">
            <Stack orientation="vertical" spacing="space90">
              <Box>
                <Label>Text input</Label>
                <Input />
              </Box>
              <Box>
                <Label>Select input</Label>
                <Select>
                  <Option>Option 1</Option>
                  <Option>Option 2</Option>
                  <Option>Option 3</Option>
                </Select>
              </Box>
              <Box>
                <RadioGroup legend="This is the legend text">
                  <Radio>First</Radio>
                  <Radio>Second</Radio>
                  <Radio>Third</Radio>
                </RadioGroup>
              </Box>
              <Box>
                <CheckboxGroup legend="This is the legend text">
                  <Checkbox>First</Checkbox>
                  <Checkbox>Second</Checkbox>
                  <Checkbox>Third</Checkbox>
                </CheckboxGroup>
              </Box>
              <Button variant="primary">Submit</Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Theme.Provider>
  );
};

export {Preview};
