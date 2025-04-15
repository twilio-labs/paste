import { Box } from "@twilio-paste/core/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/core/breadcrumb";
import { Button } from "@twilio-paste/core/button";
import { Form, FormActions, FormControl } from "@twilio-paste/core/form";
import { Heading } from "@twilio-paste/core/heading";
import { InPageNavigation, InPageNavigationItem } from "@twilio-paste/core/in-page-navigation";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import {
  PageHeader,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderInPageNavigation,
  PageHeaderSetting,
} from "@twilio-paste/core/page-header";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { useUID, useUIDSeed } from "@twilio-paste/core/uid-library";

import type { JSX } from "react";
import * as React from "react";

export const Settings = (): JSX.Element => {
  const seed = useUIDSeed();

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
            <Label htmlFor={seed("country")}>Country</Label>
            <Input type="text" id={seed("country")} name="input1" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed("address")}>Address line 1</Label>
            <Input type="text" id={seed("address")} name="input2" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed("address-2")}>Address line 2 (optional)</Label>
            <Input type="text" id={seed("address-2")} name="input3" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed("city")}>City</Label>
            <Input type="text" id={seed("city")} name="input4" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed("state")}>State</Label>
            <Input type="text" id={seed("state")} name="input5" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed("zip")}>Zipcode</Label>
            <Input type="text" id={seed("zip")} name="input6" />
          </FormControl>
          <FormActions>
            <Button variant="primary">Save changes</Button>
          </FormActions>
        </Form>
      </Box>
    </Box>
  );
};
