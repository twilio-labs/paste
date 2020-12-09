import {useUID, useUIDSeed} from '@twilio-paste/core/uid-library';
import {generateThemeFromTokens} from '@twilio-paste/core/theme';
import {CustomizationProvider} from '@twilio-paste/core/customization';
import {Alert} from '@twilio-paste/core/alert';
import {Anchor} from '@twilio-paste/core/anchor';
import {Avatar} from '@twilio-paste/core/avatar';
import {Box} from '@twilio-paste/core/box';
import {Breadcrumb, BreadcrumbItem} from '@twilio-paste/core/breadcrumb';
import {Button} from '@twilio-paste/core/button';
import {Card} from '@twilio-paste/core/card';
import {Column, Grid} from '@twilio-paste/core/grid';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {OrderedList, UnorderedList, ListItem} from '@twilio-paste/core/list';
import {Heading} from '@twilio-paste/core/heading';
import {MediaBody, MediaFigure, MediaObject} from '@twilio-paste/core/media-object';
import {Modal, ModalBody, ModalFooter, ModalFooterActions, ModalHeader, ModalHeading} from '@twilio-paste/core/modal';
import {Popover, PopoverContainer, PopoverButton} from '@twilio-paste/core/popover';
import {Paragraph} from '@twilio-paste/core/paragraph';
import {Separator} from '@twilio-paste/core/separator';
import {Stack} from '@twilio-paste/core/stack';
import {Table, THead, TBody, Td, Tr, Th} from '@twilio-paste/core/table';
import {Tabs, Tab, TabList, TabPanel, TabPanels} from '@twilio-paste/core/tabs';
import {Text} from '@twilio-paste/core/text';
import {Toast} from '@twilio-paste/core/toast';
import {Disclosure, DisclosureContent, DisclosureHeading} from '@twilio-paste/core/disclosure';
import {useMenuState, MenuButton, Menu, MenuItem, MenuSeparator} from '@twilio-paste/core/menu';
import {TextArea} from '@twilio-paste/core/textarea';
import {Select, Option} from '@twilio-paste/core/select';
import {Radio, RadioGroup} from '@twilio-paste/core/radio-group';
import {Checkbox, CheckboxGroup} from '@twilio-paste/core/checkbox';
import {PlusIcon} from '@twilio-paste/icons/cjs/PlusIcon';
import {ProductTwilioOrgIcon} from '@twilio-paste/icons/cjs/ProductTwilioOrgIcon';
import {ChevronDownIcon} from '@twilio-paste/icons/cjs/ChevronDownIcon';
import {SITE_MASTHEAD_HEIGHT} from '../../constants';
import {TokenContext} from '../../context/TokenContext';

const Preview = () => {
  const {tokens} = React.useContext(TokenContext);
  const customTheme = generateThemeFromTokens(
    tokens.backgroundColors,
    tokens.borderColors,
    tokens.borderWidths,
    tokens.radii,
    tokens.colors,
    tokens.fonts,
    tokens.fontSizes,
    tokens.fontWeights,
    tokens.lineHeights,
    tokens.boxShadows,
    tokens.sizings,
    tokens.spacings,
    tokens.textColors,
    tokens.zIndices
  );
  return (
    <CustomizationProvider theme={customTheme}>
      <Box height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`}>
        <Grid equalColumnHeights>
          <Column span={8}>
            <Box
              backgroundColor="colorBackgroundBody"
              padding="space60"
              height={`calc(100vh - ${SITE_MASTHEAD_HEIGHT}px)`}
              overflow="scroll"
            >
              <Heading as="h3" variant="heading10">
                This is the heading
              </Heading>
              <Tabs>
                <TabList>
                  <Tab>Components</Tab>
                  <Tab>Typography</Tab>
                </TabList>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque
                                odio, sit amet fermentum mauris lobortis a. Sed faucibus scelerisque suscipit.{' '}
                              </Paragraph>
                              <Stack orientation="horizontal" spacing="space60">
                                <Button variant="primary">Open modal</Button>
                                <Button variant="secondary">Cancel</Button>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque
                                odio, sit amet fermentum mauris lobortis a.
                              </Td>
                            </Tr>
                            <Tr>
                              <Td>First and Last Name</Td>
                              <Td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque
                                odio, sit amet fermentum mauris lobortis a.
                              </Td>
                            </Tr>
                            <Tr>
                              <Td>First and Last Name</Td>
                              <Td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque
                                odio, sit amet fermentum mauris lobortis a.
                              </Td>
                            </Tr>
                            <Tr>
                              <Td>First and Last Name</Td>
                              <Td>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque
                                odio, sit amet fermentum mauris lobortis a.
                              </Td>
                            </Tr>
                          </TBody>
                        </Table>
                        <Separator orientation="horizontal" />
                        <Alert variant="neutral">
                          <Text as="span">
                            <strong>Martin Luther King, Jr.:</strong> We may have all come on different ships, but we’re
                            in the same boat now.
                          </Text>
                        </Alert>
                        <Alert variant="warning">
                          <Text as="span">
                            <strong>James Baldwin:</strong> Love takes off masks that we fear we cannot live without and
                            know we cannot live within.
                          </Text>
                        </Alert>
                        <Alert variant="error">
                          <Text as="span">
                            <strong>Toni Morrison:</strong> You wanna fly, you got to give up the shit that weighs you
                            down.
                          </Text>
                        </Alert>
                        <Stack orientation="horizontal" spacing="space60">
                          <Anchor href="#">Anchor text</Anchor>
                          <Anchor href="#" showExternal>
                            Anchor text
                          </Anchor>
                        </Stack>
                        <Stack orientation="horizontal" spacing="space40">
                          <Avatar size="sizeIcon30" name="Trayvon Martin" />
                          <Avatar size="sizeIcon40" name="Breonna Taylor" />
                          <Avatar size="sizeIcon50" name="Shantel Davis" />
                          <Avatar size="sizeIcon60" name="Walter Scott" />
                          <Avatar size="sizeIcon70" name="James Baldwin" />
                          <Avatar size="sizeIcon80" name="Toni Morrison" />
                          <Avatar size="sizeIcon90" name="Chimamanda Ngozi Adichie" />
                          <Avatar size="sizeIcon100" name="Sarah Li" />
                          <Avatar size="sizeIcon110" name="Katie Porter" />
                        </Stack>
                        <Breadcrumb>
                          <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
                          <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
                        </Breadcrumb>
                        <Stack orientation="horizontal" spacing="space30">
                          <Button variant="primary">✊ Action</Button>
                          <Button variant="secondary">Action</Button>
                          <Button variant="destructive">Action</Button>
                          <Button variant="destructive_secondary">Action</Button>
                          <Button variant="primary" size="small">
                            Action
                          </Button>
                          <Button variant="secondary" size="small">
                            Action
                          </Button>
                          <Button variant="destructive" size="small">
                            Action
                          </Button>
                          <Button variant="destructive_secondary" size="small">
                            Action
                          </Button>
                          <Button variant="link">Action</Button>
                          <Button variant="destructive_link">Action</Button>
                        </Stack>
                        <PopoverContainer baseId="popover-example" placement="right-start" visible>
                          <PopoverButton variant="primary">✊ Action</PopoverButton>
                          <Popover aria-label="Popover">
                            <Text as="span">Black Lives Matter. We stand with the Black community</Text>
                          </Popover>
                        </PopoverContainer>
                        <Card>
                          <Heading as="h2" variant="heading20">
                            Parable of the Talents
                          </Heading>
                          <Paragraph>
                            Choose your leaders with wisdom and forethought. To be led by a coward is to be controlled
                            by all that the coward fears. To be led by a fool is to be led by the opportunists who
                            control the fool. To be led by a thief is to offer up your most precious treasures to be
                            stolen. To be led by a liar is to ask to be lied to. To be led by a tyrant is to sell
                            yourself and those you love into slavery.
                          </Paragraph>
                          <Paragraph marginBottom="space0">
                            —{' '}
                            <Anchor href="https://www.goodreads.com/book/show/60932.Parable_of_the_Talents">
                              Octavia Butler
                            </Anchor>
                          </Paragraph>
                        </Card>
                        <Toast onDismiss={() => alert('dismissed')} variant="neutral">
                          <Text as="span">Your function is currently being deployed.</Text>
                        </Toast>
                        <Toast onDismiss={() => alert('dismissed')} variant="success">
                          <Text as="span">
                            Your email address has been updated. You can view your profile{' '}
                            <Anchor href="#">here</Anchor>.
                          </Text>
                        </Toast>
                        <Toast onDismiss={() => alert('dismissed')} variant="warning">
                          <Text as="span">
                            The phone number has been deleted. Functions still using this phone number may fail. Verify
                            there are no functions tied to that number <Anchor href="#">here</Anchor>.
                          </Text>
                        </Toast>
                        <Toast onDismiss={() => alert('dismissed')} variant="error">
                          <Text as="span">There was an error when deleting the profile. Please try again.</Text>
                        </Toast>
                      </Stack>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box marginTop="space90" marginBottom="space90">
                      <Heading as="h1" variant="heading10">
                        Black lives matter
                      </Heading>
                      <Heading as="h2" variant="heading20">
                        Black lives matter
                      </Heading>
                      <Heading as="h3" variant="heading30">
                        Black lives matter
                      </Heading>
                      <Heading as="h4" variant="heading40">
                        Black lives matter
                      </Heading>
                      <Heading as="h5" variant="heading50">
                        Black lives matter
                      </Heading>
                      <Heading as="h6" variant="heading60">
                        Black lives matter
                      </Heading>
                      <Paragraph>
                        Impossible is just a big word thrown around by small men who find it easier to live in the world
                        they&rsquo;ve been given than to explore the power they have to change it. Impossible is not a
                        fact. It&rsquo;s an opinion. Impossible is not a declaration. It's a dare. Impossible is
                        potential. Impossible is temporary. Impossible is nothing.
                      </Paragraph>

                      <UnorderedList>
                        <ListItem>Tamir Rice</ListItem>
                        <ListItem>Philando Castile</ListItem>
                        <ListItem>Trayvon Martin</ListItem>
                        <ListItem>Breonna Taylor</ListItem>
                        <ListItem>Shantel Davis</ListItem>
                        <ListItem>Walter Scott</ListItem>
                      </UnorderedList>
                      <Paragraph>
                        We have inherited a fear of memories of slavery. It is as if to remember and acknowledge slavery
                        would amount to our being consumed by it. As a matter of fact, in the popular black imagination,
                        it is easier for us to construct ourselves as children of Africa, as the sons and daughters of
                        kings and queens, and thereby ignore the Middle Passage and centuries of enforced servitude in
                        the Americas. Although some of us might indeed be the descendants of African royalty, most of us
                        are probably descendants of their subjects, the daughters and sons of African peasants or
                        workers.
                      </Paragraph>
                      <OrderedList>
                        <ListItem>Tamir Rice</ListItem>
                        <ListItem>Philando Casitle</ListItem>
                        <ListItem>Trayvon Martin</ListItem>
                        <ListItem>Breonna Taylor</ListItem>
                        <ListItem>Shantel Davis</ListItem>
                        <ListItem>Walter Scott</ListItem>
                      </OrderedList>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Column>
          <Column span={4}>
            <Box
              borderLeftColor="colorBorder"
              borderLeftWidth="borderWidth10"
              borderLeftStyle="solid"
              padding="space60"
            >
              <Alert variant="warning">
                <Text as="span">
                  <strong>Chimamanda Ngozi Adichie:</strong> Racism should never have happened and so you don't get a
                  cookie for reducing it.
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
          </Column>
        </Grid>
      </Box>
    </CustomizationProvider>
  );
};

export {Preview};
