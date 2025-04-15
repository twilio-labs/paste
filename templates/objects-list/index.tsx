import { ButtonGroup } from "@twilio-paste/button-group";
import { Checkbox } from "@twilio-paste/checkbox";
import { Box } from "@twilio-paste/core/box";
import { Breadcrumb, BreadcrumbItem } from "@twilio-paste/core/breadcrumb";
import { Button } from "@twilio-paste/core/button";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from "@twilio-paste/core/data-grid";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDetails,
  PageHeaderHeading,
  PageHeaderParagraph,
  PageHeaderSetting,
} from "@twilio-paste/core/page-header";
import { ScreenReaderOnly } from "@twilio-paste/core/screen-reader-only";
import { useUID, useUIDSeed } from "@twilio-paste/core/uid-library";
import { FilterIcon } from "@twilio-paste/icons/esm/FilterIcon";
import { UnsortedIcon } from "@twilio-paste/icons/esm/UnsortedIcon";

import type { JSX } from "react";
import * as React from "react";

export const ObjectsList = (): JSX.Element => {
  const seed = useUIDSeed();

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
        <Box maxWidth="size70" marginBottom="space90" display="flex" columnGap="space80" alignItems="flex-end">
          <Box maxWidth="size90" display="flex" columnGap="space50">
            <Box width="100%">
              <Label htmlFor={seed("phone")}>Phone number</Label>
              <Input type="text" id={seed("phone")} />
            </Box>
            <Box width="100%">
              <Label htmlFor={seed("name")}>Friendly name</Label>
              <Input type="text" id={seed("name")} />
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
