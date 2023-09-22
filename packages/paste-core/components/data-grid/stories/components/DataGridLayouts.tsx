import { Anchor } from '@twilio-paste/anchor';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Heading } from '@twilio-paste/heading';
import { Stack } from '@twilio-paste/stack';
import { Text } from '@twilio-paste/text';
import { Truncate } from '@twilio-paste/truncate';
import * as React from 'react';

import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridFoot,
  DataGridHead,
  DataGridHeader,
  DataGridRow,
} from '../../src';

export const DataGridLayouts = (): React.ReactNode => {
  return (
    <Box borderStyle="solid" borderColor="colorBorder" borderWidth="borderWidth10" padding="space40" maxWidth="800px">
      <Stack orientation="vertical" spacing="space40">
        <Heading as="h2" variant="heading40">
          Default
        </Heading>
        <DataGrid aria-label="Data grid layout example">
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">Duplicate flow</Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
        <Heading as="h2" variant="heading40">
          Layout fixed
        </Heading>
        <DataGrid aria-label="Data grid layout example" tableLayout="fixed">
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">Duplicate flow</Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
        <Heading as="h2" variant="heading40">
          No wrap
        </Heading>
        <DataGrid aria-label="Data grid layout example" noWrap>
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">Duplicate flow</Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
        <Heading as="h2" variant="heading40">
          No wrap, layout fixed, truncate needed
        </Heading>
        <DataGrid aria-label="Data grid layout example" tableLayout="fixed" noWrap>
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </DataGridCell>
              <DataGridCell>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">
                  <Truncate title="Duplicate flow">Duplicate flow</Truncate>
                </Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
        <Heading as="h2" variant="heading40">
          isReponsive
        </Heading>
        <DataGrid aria-label="Data grid layout example" scrollHorizontally>
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">Duplicate flow</Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
        <Heading as="h2" variant="heading40">
          isReponsive, layout fixed
        </Heading>
        <DataGrid aria-label="Data grid layout example" scrollHorizontally tableLayout="fixed">
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">Duplicate flow</Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
        <Heading as="h2" variant="heading40">
          isReponsive, whitespace no wrap
        </Heading>
        <DataGrid aria-label="Data grid layout example" scrollHorizontally noWrap>
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>16:24:28 UTC 2020-09-17</DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">Duplicate flow</Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
        <Heading as="h2" variant="heading40">
          isReponsive, whitespace no wrap, layout fixed, truncate needed
        </Heading>
        <DataGrid aria-label="Data grid layout example" scrollHorizontally tableLayout="fixed" noWrap>
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader>Flow</DataGridHeader>
              <DataGridHeader>SID</DataGridHeader>
              <DataGridHeader>Date created</DataGridHeader>
              <DataGridHeader>Date updated</DataGridHeader>
              <DataGridHeader>Logs</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
              <DataGridHeader>&nbsp;</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            <DataGridRow>
              <DataGridCell>
                <Anchor href="#">Flow link</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </DataGridCell>
              <DataGridCell>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </DataGridCell>
              <DataGridCell>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </DataGridCell>
              <DataGridCell>
                <Anchor href="#">Logs</Anchor>
              </DataGridCell>
              <DataGridCell>
                <Button variant="link">Duplicate flow</Button>
              </DataGridCell>
              <DataGridCell>
                <Button variant="destructive_link">Delete flow</Button>
              </DataGridCell>
            </DataGridRow>
          </DataGridBody>
          <DataGridFoot>
            <DataGridRow>
              <DataGridCell colSpan={7}>&nbsp;</DataGridCell>
            </DataGridRow>
          </DataGridFoot>
        </DataGrid>
      </Stack>
    </Box>
  );
};

DataGridLayouts.storyName = 'Data Grid Layouts';
