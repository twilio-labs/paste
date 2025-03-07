// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Anchor } from "@twilio-paste/anchor";
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
import { DetailText } from "@twilio-paste/detail-text";
import {
  Form,
  FormActions,
  FormControl,
  FormSection,
  FormSectionDescription,
  FormSectionHeading,
} from "@twilio-paste/form";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Column, Grid } from "@twilio-paste/grid";
import { Heading } from "@twilio-paste/heading";
import { HelpText } from "@twilio-paste/help-text";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { EditIcon } from "@twilio-paste/icons/esm/EditIcon";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { FilterIcon } from "@twilio-paste/icons/esm/FilterIcon";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { LockIcon } from "@twilio-paste/icons/esm/LockIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { UnsortedIcon } from "@twilio-paste/icons/esm/UnsortedIcon";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/in-page-navigation";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderInPageNavigation,
  PageHeaderKeyword,
  PageHeaderParagraph,
  PageHeaderSetting,
} from "@twilio-paste/page-header";
import { Paragraph } from "@twilio-paste/paragraph";
import { Popover, PopoverContainer, PopoverFormPillButton } from "@twilio-paste/popover";
import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "@twilio-paste/progress-steps";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { Separator } from "@twilio-paste/separator";
import { Sidebar, SidebarPushContentWrapper } from "@twilio-paste/sidebar";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/table";
import { Text } from "@twilio-paste/text";
import { Topbar, TopbarActions } from "@twilio-paste/topbar";
import { useUID } from "@twilio-paste/uid-library";
import { VisualPickerRadio, VisualPickerRadioGroup } from "@twilio-paste/visual-picker";
import * as React from "react";
import type { JSX } from "react";

export default {
  title: "Website/PageTemplateExamples",
};

export const FullObjectDetailsExample = (): JSX.Element => {
  return (
    <Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
      <PageHeader size="default">
        <PageHeaderSetting>
          <Breadcrumb aria-label={useUID()}>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PageHeaderSetting>
        <PageHeaderDetails>
          <PageHeaderHeading>Object details</PageHeaderHeading>
          <PageHeaderActions>
            <Button variant="secondary">Label</Button>
          </PageHeaderActions>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label={useUID()}>
            <InPageNavigationItem href="#" currentPage>
              Nav item
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
            <InPageNavigationItem href="#">Nav item</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column" rowGap="space100">
          <Box>
            <Heading as="h2" variant="heading20">
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
              <Heading as="h2" variant="heading20">
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
    <Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
      <PageHeader size="default">
        <PageHeaderSetting>
          <Breadcrumb aria-label={useUID()}>
            <BreadcrumbItem href="#">Voice</BreadcrumbItem>
            <BreadcrumbItem href="#">Calls</BreadcrumbItem>
          </Breadcrumb>
        </PageHeaderSetting>
        <PageHeaderDetails>
          <PageHeaderHeading>Call details</PageHeaderHeading>
          <PageHeaderActions>
            <Button variant="secondary">Give call quality feedback</Button>
          </PageHeaderActions>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label={useUID()}>
            <InPageNavigationItem href="#" currentPage>
              Overview
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Insights summary</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box>
            <Heading as="h2" variant="heading20">
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
            <Heading as="h2" variant="heading20">
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
  const searchInput = useUID();
  const pillState = useFormPillState();
  return (
    <Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
      <PageHeader size="default">
        <PageHeaderSetting>
          <Breadcrumb aria-label={useUID()}>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PageHeaderSetting>
        <PageHeaderDetails>
          <PageHeaderHeading>Objects</PageHeaderHeading>
          <PageHeaderActions>
            <ButtonGroup>
              <Button variant="secondary">Label</Button>
              <Button variant="primary">Label</Button>
            </ButtonGroup>
          </PageHeaderActions>
          <PageHeaderParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
            faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
          </PageHeaderParagraph>
        </PageHeaderDetails>
      </PageHeader>
      <Box>
        <Box display="flex" flexDirection="column" rowGap="space50">
          <Box maxWidth="size30">
            <Label htmlFor={searchInput}>Search</Label>
            <Input id={searchInput} type="text" insertBefore={<SearchIcon decorative />} />
          </Box>
          <Box>
            <Heading as="h1" variant="heading50">
              Filter
            </Heading>
            <FormPillGroup {...pillState} aria-label="filters" size="large" variant="tree">
              <FormPill {...pillState} onSelect={() => {}}>
                <PlusIcon decorative />
                Label
              </FormPill>
              <FormPill {...pillState} onSelect={() => {}}>
                <PlusIcon decorative />
                Label
              </FormPill>
              <FormPill {...pillState} onSelect={() => {}}>
                <PlusIcon decorative />
                Label
              </FormPill>
            </FormPillGroup>
          </Box>
          <Box marginBottom="space60" display="flex" justifyContent="space-between" alignItems="center">
            <DetailText marginTop="space0">
              <Text as="span" color="colorTextWeak" fontSize="fontSize30">
                3 results
              </Text>
            </DetailText>
            <ButtonGroup>
              <Button variant="secondary" size="small">
                <ExportIcon decorative />
                Export
              </Button>
              <Button variant="secondary" size="icon_small">
                <MoreIcon decorative={false} title="menu with more options" />
              </Button>
            </ButtonGroup>
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
  a11y: {
    // no need to a11y check composition of a11y checked components
    disable: true,
  },
};

export const DefaultObjectsListExample = (): JSX.Element => {
  const input1 = useUID();
  const input2 = useUID();
  const pillState = useFormPillState();
  const [selected, setSelected] = React.useState(false);
  const uniqueBaseID = useUID();

  return (
    <Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
      <PageHeader size="default">
        <PageHeaderSetting>
          <Breadcrumb aria-label={useUID()}>
            <BreadcrumbItem href="#">Phone numbers</BreadcrumbItem>
            <BreadcrumbItem href="#">Manage</BreadcrumbItem>
          </Breadcrumb>
        </PageHeaderSetting>
        <PageHeaderDetails>
          <PageHeaderHeading>Verified caller IDs</PageHeaderHeading>
          <PageHeaderActions>
            <Button variant="primary">Add caller ID</Button>
          </PageHeaderActions>
          <PageHeaderParagraph>
            Use numbers you own as caller ID or the &quot;To&quot; number for outbound calls and messages. Phone numbers
            you buy from Twilio or port to Twilio can always be used as caller IDs.
          </PageHeaderParagraph>
        </PageHeaderDetails>
      </PageHeader>
      <Box>
        <Heading as="h1" variant="heading50">
          Filter
        </Heading>
        <Box maxWidth="size70" marginBottom="space50" display="flex" columnGap="space80" alignItems="flex-end">
          <FormPillGroup {...pillState} aria-label="filters" size="large" variant="tree">
            <PopoverContainer baseId={uniqueBaseID}>
              <PopoverFormPillButton {...pillState} selected={selected}>
                <PlusIcon decorative />
                Phone number
              </PopoverFormPillButton>
              <Popover aria-label="phone numer filter">
                <Box display="flex" flexDirection="column" rowGap="space70" minWidth="size30">
                  <Box width="100%">
                    <Label htmlFor={input1}>Phone number</Label>
                    <Input type="text" id={input1} />
                  </Box>
                  <Box display="flex" columnGap="space30">
                    <Button
                      variant="primary"
                      size="small"
                      onClick={() => {
                        setSelected(!selected);
                      }}
                    >
                      Apply
                    </Button>
                    <Button variant="link">Clear all</Button>
                  </Box>
                </Box>
              </Popover>
            </PopoverContainer>
            <PopoverContainer baseId={uniqueBaseID}>
              <PopoverFormPillButton {...pillState} selected={selected}>
                <PlusIcon decorative />
                Friendly name
              </PopoverFormPillButton>
              <Popover aria-label="friendly name filter">
                <Box display="flex" flexDirection="column" rowGap="space70" minWidth="size30">
                  <Box width="100%">
                    <Label htmlFor={input2}>Friendly name</Label>
                    <Input type="text" id={input2} />
                  </Box>
                  <Box display="flex" columnGap="space30">
                    <Button
                      variant="primary"
                      size="small"
                      onClick={() => {
                        setSelected(!selected);
                      }}
                    >
                      Apply
                    </Button>
                    <Button variant="link">Clear all</Button>
                  </Box>
                </Box>
              </Popover>
            </PopoverContainer>
          </FormPillGroup>
        </Box>
        <Box marginBottom="space60">
          <DetailText marginTop="space0">
            <Text as="span" color="colorTextWeak" fontSize="fontSize30">
              3 results
            </Text>
          </DetailText>
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
  a11y: {
    // no need to a11y check composition of a11y checked components
    disable: true,
  },
};

export const FullSettingsExample = (): JSX.Element => {
  const input1 = useUID();
  const input2 = useUID();
  const input3 = useUID();
  const input4 = useUID();
  const input5 = useUID();
  const input6 = useUID();
  return (
    <Box paddingX="space100" paddingTop="space130" paddingBottom="space160">
      <PageHeader size="default">
        <PageHeaderSetting>
          <Breadcrumb aria-label={useUID()}>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PageHeaderSetting>
        <PageHeaderDetails>
          <PageHeaderHeading>Billing settings</PageHeaderHeading>
        </PageHeaderDetails>
        <PageHeaderInPageNavigation>
          <InPageNavigation aria-label={useUID()}>
            <InPageNavigationItem href="#">Invoicing</InPageNavigationItem>
            <InPageNavigationItem href="#" currentPage>
              Service address
            </InPageNavigationItem>
            <InPageNavigationItem href="#">Tax information</InPageNavigationItem>
          </InPageNavigation>
        </PageHeaderInPageNavigation>
      </PageHeader>
      <Box>
        <Form maxWidth="size70">
          <Box display="flex" flexDirection="column">
            <Heading as="h2" variant="heading20">
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
      <Box paddingTop="space130" paddingBottom="space160" maxWidth="size90">
        <PageHeader>
          <PageHeaderSetting>
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderHeading>Welcome, Dena</PageHeaderHeading>
            <PageHeaderParagraph>
              View and manage your user settings, security, and preferences here.
            </PageHeaderParagraph>
          </PageHeaderDetails>
        </PageHeader>
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
                    <Heading as="h2" variant="heading20">
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
                    <Heading as="h2" variant="heading20">
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
                    <Heading as="h2" variant="heading20" marginBottom="space0">
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

export const DefaultWizardExample = (): JSX.Element => {
  const input1 = useUID();
  const input2 = useUID();
  const input3 = useUID();
  const input4 = useUID();
  return (
    <Box display="flex" width="100%" justifyContent="center" paddingX="space10">
      <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
        <PageHeader>
          <PageHeaderSetting>
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
            <ProgressSteps>
              <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
            </ProgressSteps>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
            <PageHeaderHeading>Verb heading</PageHeaderHeading>
            <PageHeaderParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
              faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
            </PageHeaderParagraph>
          </PageHeaderDetails>
        </PageHeader>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box>
            <Form>
              <FormControl>
                <Label htmlFor={input1}>Label</Label>
                <Input type="text" id={input1} name="input1" />
              </FormControl>
              <FormControl>
                <Label htmlFor={input2}>Label</Label>
                <Input type="text" id={input2} name="input2" />
              </FormControl>
              <FormControl>
                <Label htmlFor={input3}>Label</Label>
                <Input type="text" id={input3} name="input3" />
              </FormControl>
              <FormControl>
                <Label htmlFor={input4}>Label</Label>
                <Input type="text" id={input4} name="input4" />
              </FormControl>
            </Form>
          </Box>
          <Box display="flex" justifyContent="end">
            <ButtonGroup>
              <Button variant="secondary">Cancel or Close</Button>
              <Button variant="primary">
                Next <ArrowForwardIcon decorative />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
DefaultWizardExample.parameters = {
  padding: false,
};

export const DefaultWizardWithContentExample = (): JSX.Element => {
  const input1 = useUID();
  const sidebarId = useUID();
  const topbarSkipLinkID = useUID();
  const sidebarNavigationSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  return (
    <>
      <Sidebar
        variant="compact"
        collapsed={true}
        sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
        topbarSkipLinkID={topbarSkipLinkID}
        mainContentSkipLinkID={mainContentSkipLinkID}
        aria-label={sidebarId}
      >
        <div id={sidebarNavigationSkipLinkID} />
      </Sidebar>
      <SidebarPushContentWrapper collapsed={true} variant="compact">
        <Topbar id={topbarSkipLinkID}> </Topbar>
        <Box display="flex" width="100%" justifyContent="center" paddingX="space50" id={mainContentSkipLinkID}>
          <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
            <PageHeader>
              <PageHeaderDetails>
                <PageHeaderKeyword>Add Reverse ETL destination</PageHeaderKeyword>
                <PageHeaderHeading>Set up destination</PageHeaderHeading>
              </PageHeaderDetails>
            </PageHeader>
            <Box display="flex" flexDirection="column" rowGap="space130">
              <Box>
                <Form>
                  <FormControl>
                    <Label htmlFor={input1}>Destination name</Label>
                    <Input type="text" id={input1} name="input1" />
                    <HelpText>
                      Identifies this destination within your organization and typically includes the business unit,
                      geographic region, or environment. Example: Google Analytics North America Prod.
                    </HelpText>
                  </FormControl>
                </Form>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button variant="secondary">
                  <ArrowBackIcon decorative />
                  Back
                </Button>
                <ButtonGroup>
                  <Button variant="secondary">Cancel or Close</Button>
                  <Button variant="primary">Create destination</Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Box>
        </Box>
      </SidebarPushContentWrapper>
    </>
  );
};
DefaultWizardWithContentExample.parameters = {
  padding: false,
};

export const DefaultWizardOrderedListExample = (): JSX.Element => {
  const input1 = useUID();
  const input2 = useUID();
  const input3 = useUID();
  const input4 = useUID();
  const input5 = useUID();
  return (
    <Box display="flex" width="100%" justifyContent="center" paddingX="space10">
      <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
        <PageHeader>
          <PageHeaderSetting>
            <ProgressSteps>
              <ProgressStepComplete as="div">Select warehouse type</ProgressStepComplete>
              <ProgressStepSeparator />
              <ProgressStepCurrent as="div">Connect warehouse</ProgressStepCurrent>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Set sync schedule</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Set selective sync</ProgressStepIncomplete>
            </ProgressSteps>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Add warehouse</PageHeaderKeyword>
            <PageHeaderHeading>Connect Azure SQL data warehouse</PageHeaderHeading>
            <PageHeaderParagraph>
              Follow the steps below to start setting up Azure SQL data warehouse.
            </PageHeaderParagraph>
          </PageHeaderDetails>
        </PageHeader>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box display="flex" flexDirection="column" rowGap="space130" role="list">
            <Form>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    1
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Configure your AzureSQL database</FormSectionHeading>
                    <FormSectionDescription>
                      Make sure you’re logging in with a user that has read and write permissions so that we can write
                      to your database. If you’re unsure on how to get started, view our documentation on Azure SQL data
                      warehouse.
                    </FormSectionDescription>
                  </FormSection>
                </Box>
              </Box>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    2
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Name your schema</FormSectionHeading>
                    <FormSectionDescription>
                      Pick a name to help you identify this space in the warehouse, or use the default name provided.
                      This can’t be changed once the warehouse is connected.
                    </FormSectionDescription>
                    <FormControl>
                      <Label htmlFor={input1} required>
                        Name
                      </Label>
                      <Input type="text" id={input1} name="input1" required value="vik_test" />
                    </FormControl>
                  </FormSection>
                </Box>
              </Box>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    3
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Enter your credentials</FormSectionHeading>
                    <FormSectionDescription>Copy and paste these credentials from AzureSQL.</FormSectionDescription>
                    <FormControl>
                      <Label htmlFor={input2}>Server name</Label>
                      <Input type="text" id={input2} name="input2" />
                    </FormControl>
                    <FormControl>
                      <Label htmlFor={input3}>Database</Label>
                      <Input type="text" id={input3} name="input3" />
                    </FormControl>
                    <FormControl>
                      <Label htmlFor={input4}>User</Label>
                      <Input type="text" id={input4} name="input4" />
                    </FormControl>
                    <FormControl>
                      <Label htmlFor={input5}>Password</Label>
                      <Input type="text" id={input5} name="input5" />
                    </FormControl>
                  </FormSection>
                </Box>
              </Box>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    4
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Test connection</FormSectionHeading>
                    <Box>
                      <Button variant="primary">Test warehouse connection</Button>
                    </Box>
                  </FormSection>
                </Box>
              </Box>
            </Form>
          </Box>
          <Box>
            <Separator orientation="horizontal" />
            <Box
              display="flex"
              justifyContent="space-between"
              columnGap="space40"
              marginTop="space50"
              alignItems="center"
            >
              <Button variant="secondary">
                <ArrowBackIcon decorative />
                Back
              </Button>
              <Box display="flex" columnGap="space40" alignItems="center">
                <Paragraph marginBottom="space0">Test your warehouse connection first.</Paragraph>
                <Button variant="primary" disabled>
                  Next <ArrowForwardIcon decorative />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
DefaultWizardOrderedListExample.parameters = {
  padding: false,
};

export const WizardFooterOptionsExample = (): JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth="size70"
      paddingY="space150"
      paddingX="space100"
      rowGap="space200"
    >
      <Box display="flex" width="100%" flexDirection="column" rowGap="space50">
        <Separator orientation="horizontal" />
        <Box display="flex" justifyContent="space-between">
          <Button variant="secondary">
            <ArrowBackIcon decorative />
            Back
          </Button>
          <ButtonGroup>
            <Button variant="secondary">Cancel or close</Button>
            <Button variant="primary">
              Next <ArrowForwardIcon decorative />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Button variant="secondary">
            <ArrowBackIcon decorative />
            Back
          </Button>
          <Button variant="primary">
            Next <ArrowForwardIcon decorative />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
WizardFooterOptionsExample.parameters = {
  padding: false,
};

export const WizardFullPageExample = (): JSX.Element => {
  const [value, setValue] = React.useState("");
  return (
    <Box paddingBottom="space50">
      <Topbar id={useUID()}>
        <TopbarActions justify="start">
          <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
            Entities: Add warehouse
          </Text>
        </TopbarActions>
        <TopbarActions justify="end">
          <Button variant="secondary">Cancel or close</Button>
        </TopbarActions>
      </Topbar>
      <Box width="100%" display="flex" justifyContent="center">
        <Box width="size70" marginTop="space130">
          <PageHeader>
            <PageHeaderDetails>
              <PageHeaderHeading>Add warehouse</PageHeaderHeading>
            </PageHeaderDetails>
          </PageHeader>
          <Box display="flex" flexDirection="column" rowGap="space130">
            <VisualPickerRadioGroup
              value={value}
              legend="Select warehouse type"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              name="warehouse type"
            >
              <VisualPickerRadio labelText="Snowflake" value="snowflake">
                Snowflake
              </VisualPickerRadio>
              <VisualPickerRadio labelText="Redshift" value="redshift">
                Redshift
              </VisualPickerRadio>
              <VisualPickerRadio labelText="BigQuery" value="bigquery">
                BigQuery
              </VisualPickerRadio>
            </VisualPickerRadioGroup>
            <Box display="flex" justifyContent="flex-end">
              <ButtonGroup>
                <Button variant="secondary">Cancel or close</Button>
                <Button variant="primary">
                  Next <ArrowForwardIcon decorative />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
WizardFullPageExample.parameters = {
  padding: false,
};

export const WizardDefaultHeaderWithProgressStepsExample = (): JSX.Element => {
  return (
    <Box display="flex" width="100%" justifyContent="center" paddingX="space10">
      <Box
        paddingTop="space130"
        paddingBottom="space160"
        display="flex"
        flexDirection="column"
        rowGap="space130"
        width="size70"
        maxWidth="size80"
      >
        <PageHeader>
          <PageHeaderSetting>
            <Breadcrumb aria-label={useUID()}>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
            <ProgressSteps>
              <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
              <ProgressStepSeparator />
              <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
            </ProgressSteps>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Wizard title</PageHeaderKeyword>
            <PageHeaderHeading>Verb heading</PageHeaderHeading>
            <PageHeaderParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex risus. Aenean at ante id lectus
              faucibus hendrerit a fringilla lorem. Pellentesque faucibus sit amet dolor vitae lacinia.
            </PageHeaderParagraph>
          </PageHeaderDetails>
        </PageHeader>
      </Box>
    </Box>
  );
};
WizardDefaultHeaderWithProgressStepsExample.parameters = {
  padding: false,
};

export const WizardFullPageHeaderWithProgressStepsExample = (): JSX.Element => {
  return (
    <Box paddingBottom="space50">
      <Topbar id={useUID()}>
        <TopbarActions justify="start">
          <Text as="span" fontWeight="fontWeightSemibold" fontSize="fontSize60">
            Wizard title
          </Text>
        </TopbarActions>
        <TopbarActions justify="center">
          <ProgressSteps>
            <ProgressStepComplete as="div">Label</ProgressStepComplete>
            <ProgressStepSeparator />
            <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
            <ProgressStepSeparator />
            <ProgressStepIncomplete as="div">Label</ProgressStepIncomplete>
          </ProgressSteps>
        </TopbarActions>
        <TopbarActions justify="end">
          <Button variant="secondary">Cancel or close</Button>
        </TopbarActions>
      </Topbar>
    </Box>
  );
};
WizardFullPageHeaderWithProgressStepsExample.parameters = {
  padding: false,
};
