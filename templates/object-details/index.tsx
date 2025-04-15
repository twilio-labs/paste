import { Box } from "@twilio-paste/core/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/core/breadcrumb";
import { Button } from "@twilio-paste/core/button";
import {
  DescriptionList,
  DescriptionListDetails,
  DescriptionListSet,
  DescriptionListTerm,
} from "@twilio-paste/core/description-list";
import { Heading } from "@twilio-paste/core/heading";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/core/in-page-navigation";
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderInPageNavigation,
  PageHeaderSetting,
} from "@twilio-paste/core/page-header";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/core/table";
import { Text } from "@twilio-paste/core/text";
import { useUID } from "@twilio-paste/core/uid-library";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { WarningIcon } from "@twilio-paste/icons/esm/WarningIcon";

import * as React from "react";
import type { JSX } from "react";

export const ObjectDetails = (): JSX.Element => {
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
