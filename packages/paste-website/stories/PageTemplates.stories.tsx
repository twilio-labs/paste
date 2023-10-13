import { Anchor } from "@twilio-paste/anchor";
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Box } from "@twilio-paste/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/breadcrumb";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Card } from "@twilio-paste/card";
import { Checkbox } from "@twilio-paste/checkbox";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from "@twilio-paste/data-grid";
import {
  DescriptionList,
  DescriptionListDetails,
  DescriptionListSet,
  DescriptionListTerm,
} from "@twilio-paste/description-list";
import { Form, FormActions, FormControl } from "@twilio-paste/form";
import { Column, Grid } from "@twilio-paste/grid";
import { Heading } from "@twilio-paste/heading";
import { DownloadIcon } from "@twilio-paste/icons/esm/DownloadIcon";
import { EditIcon } from "@twilio-paste/icons/esm/EditIcon";
import { FilterIcon } from "@twilio-paste/icons/esm/FilterIcon";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { LockIcon } from "@twilio-paste/icons/esm/LockIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { UnsortedIcon } from "@twilio-paste/icons/esm/UnsortedIcon";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/in-page-navigation";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Select } from "@twilio-paste/select";
import { Separator } from "@twilio-paste/separator";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/table";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

export default {
  title: "Website/PageTemplateExamples",
};

export const FullObjectDetailsExample = (): JSX.Element => {
  return (
    <Box
      paddingX="space100"
      paddingTop="space130"
      paddingBottom="space160"
      display="flex"
      flexDirection="column"
      rowGap="space130"
    >
      <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-end">
        <Box>
          <Box display="flex" rowGap="space30" marginBottom="space30">
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box>
            <Heading as="h4" variant="heading10" marginBottom="space0">
              Object details
            </Heading>
          </Box>
        </Box>
        <Box marginBottom="space30">
          <Button variant="secondary">Label</Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <InPageNavigation aria-label={useUID()}>
          <InPageNavigationItem href="#" currentPage>
            Nav item
          </InPageNavigationItem>
          <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
          <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
        </InPageNavigation>
        <Box display="flex" flexDirection="column" rowGap="space100">
          <Box>
            <Heading as="h5" variant="heading20">
              Heading
            </Heading>
            <Box display="flex" columnGap="space70" width="size80">
              <Box width="size40">
                <DescriptionList>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                </DescriptionList>
              </Box>
              <Box width="size40">
                <DescriptionList>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Term</DescriptionListTerm>
                    <DescriptionListDetails>Details</DescriptionListDetails>
                  </DescriptionListSet>
                </DescriptionList>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box display="flex" width="100%" justifyContent="space-between" alignItems="flex-start">
              <Heading as="h5" variant="heading20">
                Heading
              </Heading>
              <Button variant="secondary">Label</Button>
            </Box>
            <Box maxWidth="size80">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
                faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
              </Paragraph>
            </Box>
            <Table>
              <THead>
                <Tr>
                  <Th>Header</Th>
                  <Th>Header</Th>
                  <Th>Header</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>Content</Td>
                  <Td>Content</Td>
                  <Td>Content</Td>
                </Tr>
                <Tr>
                  <Td>Content</Td>
                  <Td>Content</Td>
                  <Td>Content</Td>
                </Tr>
                <Tr>
                  <Td>Content</Td>
                  <Td>Content</Td>
                  <Td>Content</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
FullObjectDetailsExample.parameters = {
  padding: false,
};

export const DefaultObjectDetailsExample = (): JSX.Element => {
  return (
    <Box
      paddingX="space100"
      paddingTop="space130"
      paddingBottom="space160"
      display="flex"
      flexDirection="column"
      rowGap="space130"
    >
      <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-end">
        <Box>
          <Box display="flex" rowGap="space30" marginBottom="space30">
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Voice</BreadcrumbItem>
              <BreadcrumbItem href="#">Calls</BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box>
            <Heading as="h4" variant="heading10" marginBottom="space0">
              Call details
            </Heading>
          </Box>
        </Box>
        <Box marginBottom="space30">
          <Button variant="secondary">Give call quality feedback</Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <InPageNavigation aria-label={useUID()}>
          <InPageNavigationItem href="#overview" currentPage>
            Overview
          </InPageNavigationItem>
          <InPageNavigationItem href="#insights-summary">Insights summary</InPageNavigationItem>
        </InPageNavigation>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box>
            <Heading as="h5" variant="heading20">
              Properties
            </Heading>
            <Box display="flex" columnGap="space70" width="size80">
              <Box width="size40">
                <DescriptionList>
                  <DescriptionListSet>
                    <DescriptionListTerm>Message SID</DescriptionListTerm>
                    <DescriptionListDetails>MG48n1d86b68737525hfd84w91dah0w3088n</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Message service</DescriptionListTerm>
                    <DescriptionListDetails>N/A</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Created at</DescriptionListTerm>
                    <DescriptionListDetails>13:42:57 PDT 2020-09-29</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>From</DescriptionListTerm>
                    <DescriptionListDetails>(606) 609-4293</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>To</DescriptionListTerm>
                    <DescriptionListDetails>(323) 754-2093</DescriptionListDetails>
                  </DescriptionListSet>
                </DescriptionList>
              </Box>
              <Box width="size40">
                <DescriptionList>
                  <DescriptionListSet>
                    <DescriptionListTerm>Direction</DescriptionListTerm>
                    <DescriptionListDetails>Incoming</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>API endpoint</DescriptionListTerm>
                    <DescriptionListDetails>N/A</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Message segments</DescriptionListTerm>
                    <DescriptionListDetails>1</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>Encoding</DescriptionListTerm>
                    <DescriptionListDetails>N/A</DescriptionListDetails>
                  </DescriptionListSet>
                  <DescriptionListSet>
                    <DescriptionListTerm>
                      <Box display="flex" height="space60" columnGap="space20">
                        Term
                        <Button variant="primary_icon" size="reset">
                          <InformationIcon decorative={false} title="what are terms?" />
                        </Button>
                      </Box>
                    </DescriptionListTerm>
                    <DescriptionListDetails>$0.0075</DescriptionListDetails>
                  </DescriptionListSet>
                </DescriptionList>
              </Box>
            </Box>
            <DescriptionList>
              <DescriptionListSet>
                <DescriptionListTerm>Term</DescriptionListTerm>
                <DescriptionListDetails>
                  <Box
                    backgroundColor="colorBackground"
                    maxWidth="size80"
                    padding="space50"
                    borderRadius="borderRadius20"
                  >
                    <Text as="span" fontFamily="fontFamilyCode">
                      Want to know what a day in the life of a Robotics Engineer is like? Join UAT tomorrow at 4PM MST
                      to learn about our innovative degrees. Registration is free but space is limited. Sign up here:
                    </Text>
                  </Box>
                </DescriptionListDetails>
              </DescriptionListSet>
            </DescriptionList>
          </Box>
          <Box>
            <Heading as="h5" variant="heading20">
              Errors and warnings
            </Heading>
            <Table>
              <THead>
                <Tr>
                  <Th>Code</Th>
                  <Th>Type</Th>
                  <Th>Description</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>
                    <Box display="flex" columnGap="space30">
                      <WarningIcon decorative={false} title="warning" color="colorTextIconWarning" />
                      <Text as="span" fontWeight="fontWeightSemibold">
                        11200 HTTP retrieval failure
                      </Text>
                    </Box>
                  </Td>
                  <Td>Warning</Td>
                  <Td>Twilio’s servers were unable to fetch a non-error response from the designated URL.</Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
DefaultObjectDetailsExample.parameters = {
  padding: false,
};

export const FullObjectsListExample = (): JSX.Element => {
  const criteria1 = useUID();
  const criteria2 = useUID();
  const criteria3 = useUID();
  return (
    <Box
      paddingX="space100"
      paddingTop="space130"
      paddingBottom="space160"
      display="flex"
      flexDirection="column"
      rowGap="space130"
    >
      <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-start">
        <Box maxWidth="size70">
          <Box display="flex" rowGap="space30" marginBottom="space30">
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Heading as="h4" variant="heading10">
            Objects
          </Heading>
          <Paragraph marginBottom="space0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
            faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
          </Paragraph>
        </Box>
        <Box marginBottom="space30" marginTop="space80">
          <ButtonGroup>
            <Button variant="secondary">Label</Button>
            <Button variant="primary">Label</Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box>
        <Box display="flex" flexDirection="column" rowGap="space50" marginBottom="space90">
          <Box display="flex" columnGap="space80" alignItems="flex-end">
            <Box minWidth="size30" maxWidth="size60" width="100%" display="flex" columnGap="space50">
              <Box width="100%">
                <Label htmlFor={criteria1}>Label</Label>
                <Select id={criteria1}>1</Select>
              </Box>
              <Box width="100%">
                <Label htmlFor={criteria2}>Label</Label>
                <Select id={criteria2}>2</Select>
              </Box>
              <Box width="100%">
                <Label htmlFor={criteria3}>Label</Label>
                <Select id={criteria3}>3</Select>
              </Box>
            </Box>

            <Box
              height="100%"
              display="flex"
              width="size20"
              justifyContent="flex-start"
              alignItems="flex-end"
              whiteSpace="nowrap"
            >
              <ButtonGroup>
                <Button variant="primary">
                  <FilterIcon decorative />
                  Apply
                </Button>
                <Button variant="secondary">Clear all</Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Separator orientation="horizontal" />
          <Box display="flex" columnGap="space80" maxWidth="size110">
            <Box maxWidth="size40">
              <Input
                type="text"
                insertBefore={<SearchIcon decorative color="colorTextPrimary" />}
                placeholder="Search"
                aria-label={useUID()}
              />
            </Box>
            <Separator orientation="vertical" />
            <Box>
              <ButtonGroup>
                <Button variant="secondary">
                  <DownloadIcon decorative />
                  Export
                </Button>
                <Button variant="secondary" size="icon">
                  <MoreIcon decorative={false} title="menu" />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
        <DataGrid aria-label="label1">
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader width="52px">
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridHeader>
              <DataGridHeader>
                <Box display="flex" columnGap="space20">
                  Header
                  <UnsortedIcon decorative={false} title="sort column" />
                </Box>
              </DataGridHeader>
              <DataGridHeader>
                <Box display="flex" columnGap="space20">
                  Header
                  <UnsortedIcon decorative={false} title="sort column" />
                </Box>
              </DataGridHeader>
              <DataGridHeader>
                <Box display="flex" columnGap="space20">
                  Header
                  <UnsortedIcon decorative={false} title="sort column" />
                </Box>
              </DataGridHeader>
              <DataGridHeader>
                <Box display="flex" columnGap="space20" justifyContent="flex-end">
                  Header
                  <UnsortedIcon decorative={false} title="sort column" />
                </Box>
              </DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridCell>
              <DataGridCell>
                <Anchor href="#">Anchor</Anchor>
              </DataGridCell>
              <DataGridCell>Content</DataGridCell>
              <DataGridCell>Content</DataGridCell>
              <DataGridCell textAlign="right">Content</DataGridCell>
            </DataGridRow>
            <DataGridRow>
              <DataGridCell>
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridCell>
              <DataGridCell>
                <Anchor href="#">Anchor</Anchor>
              </DataGridCell>
              <DataGridCell>Content</DataGridCell>
              <DataGridCell>Content</DataGridCell>
              <DataGridCell textAlign="right">Content</DataGridCell>
            </DataGridRow>
            <DataGridRow>
              <DataGridCell>
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridCell>
              <DataGridCell>
                <Anchor href="#">Anchor</Anchor>
              </DataGridCell>
              <DataGridCell>Content</DataGridCell>
              <DataGridCell>Content</DataGridCell>
              <DataGridCell textAlign="right">Content</DataGridCell>
            </DataGridRow>
          </DataGridBody>
        </DataGrid>
      </Box>
    </Box>
  );
};

FullObjectsListExample.parameters = {
  padding: false,
};

export const DefaultObjectsListExample = (): JSX.Element => {
  const input1 = useUID();
  const input2 = useUID();
  return (
    <Box
      paddingX="space100"
      paddingTop="space130"
      paddingBottom="space160"
      display="flex"
      flexDirection="column"
      rowGap="space130"
    >
      <Box display="flex" columnGap="space30" justifyContent="space-between" alignItems="flex-start">
        <Box maxWidth="size70">
          <Box display="flex" rowGap="space30" marginBottom="space30">
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Phone numbers</BreadcrumbItem>
              <BreadcrumbItem href="#">Manage</BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Heading as="h4" variant="heading10">
            Verified caller IDs
          </Heading>
          <Paragraph marginBottom="space0">
            Use numbers you own as caller ID or the &quot;To&quot; number for outbound calls and messages. Phone numbers
            you buy from Twilio or port to Twilio can always be used as caller IDs.
          </Paragraph>
        </Box>
        <Box marginBottom="space30" marginTop="space80" whiteSpace="nowrap">
          <Button variant="primary">Add caller ID</Button>
        </Box>
      </Box>
      <Box>
        <Box maxWidth="size70" marginBottom="space90" display="flex" columnGap="space80" alignItems="flex-end">
          <Box maxWidth="size90" display="flex" columnGap="space50">
            <Box width="100%">
              <Label htmlFor={input1}>Phone number</Label>
              <Input type="text" id={input1} />
            </Box>
            <Box width="100%">
              <Label htmlFor={input2}>Friendly name</Label>
              <Input type="text" id={input2} />
            </Box>
          </Box>
          <Box display="flex" width="size20" justifyContent="flex-start">
            <ButtonGroup>
              <Button variant="secondary">
                <FilterIcon decorative />
                Apply
              </Button>
              <Button variant="secondary">Clear</Button>
            </ButtonGroup>
          </Box>
        </Box>
        <DataGrid aria-label={useUID()}>
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader width="52px">
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridHeader>
              <DataGridHeader>
                <Box display="flex" columnGap="space20">
                  Phone number
                  <UnsortedIcon decorative={false} title="sort column" />
                </Box>
              </DataGridHeader>
              <DataGridHeader>
                <Box display="flex" columnGap="space20">
                  Friendly name
                  <UnsortedIcon decorative={false} title="sort column" />
                </Box>
              </DataGridHeader>
              <DataGridHeader>
                <Box display="flex" columnGap="space20">
                  Actions
                  <UnsortedIcon decorative={false} title="sort column" />
                </Box>
              </DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridCell>
              <DataGridCell>+1 512 809 4343</DataGridCell>
              <DataGridCell>(512) 809-4343</DataGridCell>
              <DataGridCell>
                <Button variant="destructive_secondary" size="small">
                  Delete
                </Button>
              </DataGridCell>
            </DataGridRow>
            <DataGridRow>
              <DataGridCell>
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridCell>
              <DataGridCell>+86 591 1093 1093</DataGridCell>
              <DataGridCell>+86 591 1093 1093</DataGridCell>
              <DataGridCell>
                <Button variant="destructive_secondary" size="small">
                  Delete
                </Button>
              </DataGridCell>
            </DataGridRow>
            <DataGridRow>
              <DataGridCell>
                <Checkbox>
                  <ScreenReaderOnly>label</ScreenReaderOnly>
                </Checkbox>
              </DataGridCell>
              <DataGridCell>+1 213 343 1345</DataGridCell>
              <DataGridCell>(213) 343-1345</DataGridCell>
              <DataGridCell>
                <Button variant="destructive_secondary" size="small">
                  Delete
                </Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
        </DataGrid>
      </Box>
    </Box>
  );
};

DefaultObjectsListExample.parameters = {
  padding: false,
};

export const FullSettingsExample = (): JSX.Element => {
  const input1 = useUID();
  const input2 = useUID();
  const input3 = useUID();
  const input4 = useUID();
  const input5 = useUID();
  const input6 = useUID();
  return (
    <Box
      paddingX="space100"
      paddingTop="space130"
      paddingBottom="space160"
      display="flex"
      flexDirection="column"
      rowGap="space130"
      maxWidth="size90"
    >
      <Box display="flex" flexDirection="column">
        <Box display="flex" rowGap="space30" marginBottom="space30">
          <Breadcrumb aria-label={useUID()}>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Heading as="h4" variant="heading10" marginBottom="space0">
            Billing settings
          </Heading>
        </Box>
      </Box>
      <Box>
        <InPageNavigation aria-label={useUID()}>
          <InPageNavigationItem href="#invoicing">Invoicing</InPageNavigationItem>
          <InPageNavigationItem href="#service-address" currentPage>
            Service address
          </InPageNavigationItem>
          <InPageNavigationItem href="#tax-information">Tax information</InPageNavigationItem>
        </InPageNavigation>
        <Form maxWidth="size70">
          <Box display="flex" flexDirection="column">
            <Heading as="h5" variant="heading20">
              Service address
            </Heading>
            <Paragraph marginBottom="space0">
              This information will be used for taxation purposes. For US customers, this is your service address. For
              international customers, this is your permanent place of establishment (e.g. head office).
            </Paragraph>
          </Box>
          <FormControl>
            <Label htmlFor={input1}>Country</Label>
            <Input type="text" id={input1} name="input1" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input2}>Address line 1</Label>
            <Input type="text" id={input2} name="input2" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input3}>Address line 2 (optional)</Label>
            <Input type="text" id={input3} name="input3" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input4}>City</Label>
            <Input type="text" id={input4} name="input4" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input5}>State</Label>
            <Input type="text" id={input5} name="input5" />
          </FormControl>
          <FormControl>
            <Label htmlFor={input6}>Zipcode</Label>
            <Input type="text" id={input6} name="input6" />
          </FormControl>
          <FormActions>
            <Button variant="primary">Save changes</Button>
          </FormActions>
        </Form>
      </Box>
    </Box>
  );
};
FullSettingsExample.parameters = {
  padding: false,
};

export const SettingsOverviewExample = (): JSX.Element => {
  return (
    <Box display="flex" width="100%" justifyContent="center">
      <Box
        paddingTop="space130"
        paddingBottom="space160"
        display="flex"
        flexDirection="column"
        rowGap="space130"
        maxWidth="size90"
      >
        <Box display="flex" flexDirection="column">
          <Box display="flex" rowGap="space30" marginBottom="space30">
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box>
            <Heading as="h4" variant="heading10">
              Welcome, Dena
            </Heading>
            <Paragraph marginBottom="space0">
              View and manage your user settings, security, and preferences here.
            </Paragraph>
          </Box>
        </Box>
        <Box>
          <Grid vertical gutter="space40">
            <Column padding="space0">
              <Grid gutter="space40" equalColumnHeights>
                <Column>
                  <Box
                    as="article"
                    padding="space100"
                    borderWidth="borderWidth10"
                    borderColor="colorBorderWeaker"
                    borderStyle="solid"
                    borderRadius="borderRadius30"
                    backgroundColor="colorBackgroundBody"
                    width="100%"
                  >
                    <Heading as="h5" variant="heading20">
                      Personal information
                    </Heading>
                    <DescriptionList>
                      <DescriptionListSet>
                        <DescriptionListTerm>Email address</DescriptionListTerm>
                        <DescriptionListDetails>dena.doe@owl.com</DescriptionListDetails>
                      </DescriptionListSet>
                      <DescriptionListSet>
                        <DescriptionListTerm>Full name</DescriptionListTerm>
                        <DescriptionListDetails>Dena Doe</DescriptionListDetails>
                      </DescriptionListSet>
                      <DescriptionListSet>
                        <DescriptionListTerm>User SID</DescriptionListTerm>
                        <DescriptionListDetails>123454353SDASDFFSDS</DescriptionListDetails>
                      </DescriptionListSet>
                    </DescriptionList>
                    <Button variant="secondary">
                      <EditIcon decorative />
                      Edit
                    </Button>
                  </Box>
                </Column>
                <Column>
                  <Card padding="space100">
                    <Heading as="h5" variant="heading20">
                      Two-factor authentication (2FA)
                    </Heading>
                    <DescriptionList>
                      <DescriptionListSet>
                        <DescriptionListTerm>Phone number</DescriptionListTerm>
                        <DescriptionListDetails>+1 (123) 123-1234</DescriptionListDetails>
                      </DescriptionListSet>
                      <DescriptionListSet>
                        <DescriptionListTerm>Default 2FA method</DescriptionListTerm>
                        <DescriptionListDetails>Text message (SMS)</DescriptionListDetails>
                      </DescriptionListSet>
                      <DescriptionListSet>
                        <DescriptionListTerm>Alternative 2FA method</DescriptionListTerm>
                        <DescriptionListDetails>Authenticator app</DescriptionListDetails>
                      </DescriptionListSet>
                    </DescriptionList>
                    <Button variant="secondary">
                      <EditIcon decorative />
                      Edit
                    </Button>
                  </Card>
                </Column>
              </Grid>
            </Column>
            <Column>
              <Card padding="space100">
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                  <Box display="flex" flexDirection="row">
                    <LockIcon decorative size="sizeIcon70" color="colorTextIcon" />
                    <Heading as="h5" variant="heading20" marginBottom="space0">
                      Password
                    </Heading>
                  </Box>
                  <Button variant="secondary">Reset password</Button>
                </Box>
              </Card>
            </Column>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
SettingsOverviewExample.parameters = {
  padding: false,
};
