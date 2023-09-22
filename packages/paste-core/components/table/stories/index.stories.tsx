import type { StoryFn } from '@storybook/react';
import { Anchor } from '@twilio-paste/anchor';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Heading } from '@twilio-paste/heading';
import { AttachIcon } from '@twilio-paste/icons/esm/AttachIcon';
import { MoreIcon } from '@twilio-paste/icons/esm/MoreIcon';
import { MediaBody, MediaFigure, MediaObject } from '@twilio-paste/media-object';
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from '@twilio-paste/menu';
import { Stack } from '@twilio-paste/stack';
import { Text } from '@twilio-paste/text';
import { useTheme } from '@twilio-paste/theme';
import { Truncate } from '@twilio-paste/truncate';
import * as React from 'react';

import { TBody, TFoot, THead, Table, Td, Th, Tr } from '../src';

const MoreMenu = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <Box display="flex" justifyContent="flex-end">
      <MenuButton {...menu} variant="reset" size="reset">
        <MoreIcon decorative={false} title="show more" />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space20">
              <AttachIcon decorative={false} title="information" />
            </MediaFigure>
            <MediaBody>Settings</MediaBody>
          </MediaObject>
        </MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { THead, TBody, TFoot, Tr, Td, Th },
};

export const DefaultTable = (): React.ReactNode => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>SID</Th>
          <Th>Direction</Th>
          <Th>From</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMl29llgoihx286uhxfb0yc5n0sg391x5n
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
      </TBody>
    </Table>
  );
};

DefaultTable.storyName = 'Default table';

export const DefaultFooterTable = (): React.ReactNode => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>SID</Th>
          <Th>Direction</Th>
          <Th>From</Th>
          <Th textAlign="right">Index</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMl29llgoihx286uhxfb0yc5n0sg391x5n
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              2
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              3
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              4
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td colSpan={3}>Index Total</Td>
          <Td colSpan={2} textAlign="right">
            <Text as="span" color="inherit" fontFamily="fontFamilyCode">
              4
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

DefaultFooterTable.storyName = 'Default table with footer';

export const BorderlessTable = (): React.ReactNode => {
  return (
    <Table variant="borderless">
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>SID</Th>
          <Th>Direction</Th>
          <Th>From</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMl29llgoihx286uhxfb0yc5n0sg391x5n
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
      </TBody>
    </Table>
  );
};

BorderlessTable.storyName = 'Borderless table';

export const BorderlessFooterTable = (): React.ReactNode => {
  return (
    <Table variant="borderless">
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>SID</Th>
          <Th>Direction</Th>
          <Th>From</Th>
          <Th textAlign="right">Index</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMl29llgoihx286uhxfb0yc5n0sg391x5n
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              2
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              3
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              4
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td colSpan={3}>Index Total</Td>
          <Td colSpan={2} textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode" color="inherit">
              4
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

BorderlessFooterTable.storyName = 'Borderless table with footer';

export const BorderlessStripedFooterTable = (): React.ReactNode => {
  return (
    <Table variant="borderless" striped>
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>SID</Th>
          <Th>Direction</Th>
          <Th>From</Th>
          <Th textAlign="right">Index</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMl29llgoihx286uhxfb0yc5n0sg391x5n
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              2
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              3
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              4
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td colSpan={3}>Index Total</Td>
          <Td colSpan={2} textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode" color="inherit">
              4
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

BorderlessStripedFooterTable.storyName = 'Borderless striped table with footer';

export const StripedTable = (): React.ReactNode => {
  return (
    <Table striped>
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>SID</Th>
          <Th>Direction</Th>
          <Th>From</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMl29llgoihx286uhxfb0yc5n0sg391x5n
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
        </Tr>
      </TBody>
    </Table>
  );
};

StripedTable.storyName = 'Striped table';

export const StripedTableFooter = (): React.ReactNode => {
  return (
    <Table striped>
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>SID</Th>
          <Th>Direction</Th>
          <Th>From</Th>
          <Th textAlign="right">Index</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SM0yc4mxi6cn4z13bte7qmflc2drc85mlp
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMl29llgoihx286uhxfb0yc5n0sg391x5n
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              2
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              3
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>16:24:28 PDT 2020-09-17</Td>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              SMxarke3v30fv17hauqn86a7nhgm3b5d87
            </Text>
          </Td>
          <Td>Incoming</Td>
          <Td>(602) 609-6747</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              4
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td colSpan={3}>Index Total</Td>
          <Td colSpan={2} textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode" color="inherit">
              4
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

StripedTableFooter.storyName = 'Striped table with footer';

export const TableLayoutFixedTable = (): React.ReactNode => {
  return (
    <Table tableLayout="fixed">
      <THead>
        <Tr>
          <Th>Agents</Th>
          <Th>Status</Th>
          <Th>Skills</Th>
          <Th textAlign="right">Tasks</Th>
          <Th>&nbsp;</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Adam Brown</Td>
          <Td>Online</Td>
          <Td>English, French, Sales, Spanish</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              35
            </Text>
          </Td>
          <Td>
            <MoreMenu />
          </Td>
        </Tr>
        <Tr>
          <Td>Adriana Lovelock</Td>
          <Td>Online</Td>
          <Td>English, French, Sales, Spanish</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              28
            </Text>
          </Td>
          <Td>
            <MoreMenu />
          </Td>
        </Tr>
        <Tr>
          <Td>Amanda Cutlack</Td>
          <Td>Online</Td>
          <Td>English, French, Sales, Spanish</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              7
            </Text>
          </Td>
          <Td>
            <MoreMenu />
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td>&nbsp;</Td>
          <Td>&nbsp;</Td>
          <Td>&nbsp;</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              70
            </Text>
          </Td>
          <Td>&nbsp;</Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

TableLayoutFixedTable.storyName = 'TableLayout: Fixed table';

export const ColumnWidth = (): React.ReactNode => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th width="size50">&nbsp;</Th>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
          <Th textAlign="right">Column 4</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
          <Td>Empty</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              2
            </Text>
          </Td>
          <Td>Empty</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              3
            </Text>
          </Td>
          <Td>Empty</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td>
            <Text as="span" fontFamily="fontFamilyCode">
              100
            </Text>
          </Td>
          <Td>end</Td>
          <Td>end</Td>
          <Td>end</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              100
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

ColumnWidth.storyName = 'Column width';

export const ColumnTextAlign = (): React.ReactNode => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>&nbsp;</Th>
          <Th>Left Aligned Column</Th>
          <Th textAlign="center">Center Aligned Column</Th>
          <Th textAlign="right">Right Aligned Column</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>
            <Text as="p" fontWeight="fontWeightBold">
              First line of text
            </Text>
            Second line of longer text text
          </Td>
          <Td>Cell</Td>
          <Td textAlign="center">Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text as="p" fontWeight="fontWeightBold">
              First line of text
            </Text>
            Second line of longer text text
          </Td>
          <Td>Cell</Td>
          <Td textAlign="center">Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text as="p" fontWeight="fontWeightBold">
              First line of text
            </Text>
            Second line of longer text text
          </Td>
          <Td>Cell</Td>
          <Td textAlign="center">Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td>&nbsp;</Td>
          <Td>Cell</Td>
          <Td textAlign="center">Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              3
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

ColumnTextAlign.storyName = 'Column textAlign';

export const RowVerticalAlign = (): React.ReactNode => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>&nbsp;</Th>
          <Th>Column 1</Th>
          <Th>Column 3</Th>
          <Th textAlign="right">Column 4</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr verticalAlign="top">
          <Td>
            <Text as="p" fontWeight="fontWeightBold">
              Top aligned row
            </Text>
            Second line of longer text text
          </Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text as="p" fontWeight="fontWeightBold">
              Middle aligned row
            </Text>
            Second line of longer text text
          </Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr verticalAlign="bottom">
          <Td>
            <Text as="p" fontWeight="fontWeightBold">
              Bottom aligned row
            </Text>
            Second line of longer text text
          </Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td>&nbsp;</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              3
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

RowVerticalAlign.storyName = 'Row verticalAlign';

export const RowHeaders = (): React.ReactNode => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>&nbsp;</Th>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Th scope="row">Row header</Th>
          <Td>Cell</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
        </Tr>
        <Tr>
          <Th scope="row">Row header</Th>
          <Td>Cell</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
        </Tr>
        <Tr>
          <Th scope="row">Row header</Th>
          <Td>Cell</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
        </Tr>
      </TBody>
    </Table>
  );
};

RowHeaders.storyName = 'Row headers';

export const StickyHeaders = (): React.ReactNode => {
  return (
    <Table>
      <THead stickyHeader={true}>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        {[...new Array(40).keys()].map((index) => (
          <Tr key={index}>
            <Td>Content</Td>
            <Td>Content</Td>
            <Td>Content</Td>
          </Tr>
        ))}
      </TBody>
      <TFoot>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </TFoot>
    </Table>
  );
};

StickyHeaders.storyName = 'Sticky headers';

export const BorderlessStickyHeaders = (): React.ReactNode => {
  return (
    <Table variant="borderless">
      <THead stickyHeader={true}>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        {[...new Array(40).keys()].map((index) => (
          <Tr key={index}>
            <Td>Content</Td>
            <Td>Content</Td>
            <Td>Content</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};

BorderlessStickyHeaders.storyName = 'Borderless Sticky headers';

export const Truncation = (): React.ReactNode => {
  return (
    <Table tableLayout="fixed">
      <THead>
        <Tr>
          <Th width="size20">&nbsp;</Th>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
          <Th textAlign="right">Column 4</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>
            <Truncate title="Some very long text to truncate">Some very long text to truncate</Truncate>
          </Td>
          <Td>Empty</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Truncate title="Some very long text to truncate">Some very long text to truncate</Truncate>
          </Td>
          <Td>Empty</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Truncate title="Some very long text to truncate">Some very long text to truncate</Truncate>
          </Td>
          <Td>Empty</Td>
          <Td>Cell</Td>
          <Td>Content</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              1
            </Text>
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td>&nbsp;</Td>
          <Td>end</Td>
          <Td>end</Td>
          <Td>end</Td>
          <Td textAlign="right">
            <Text as="span" fontFamily="fontFamilyCode">
              100
            </Text>
          </Td>
        </Tr>
      </TFoot>
    </Table>
  );
};

export const Layouts = (): React.ReactNode => {
  return (
    <Box borderStyle="solid" borderColor="colorBorder" borderWidth="borderWidth10" padding="space40" maxWidth="800px">
      <Stack orientation="vertical" spacing="space40">
        <Heading as="h2" variant="heading40">
          Default
        </Heading>
        <Table>
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
        <Heading as="h2" variant="heading40">
          Layout fixed
        </Heading>
        <Table tableLayout="fixed">
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
        <Heading as="h2" variant="heading40">
          No wrap
        </Heading>
        <Table noWrap>
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
        <Heading as="h2" variant="heading40">
          Fixed layout, No wrap, truncate needed
        </Heading>
        <Table tableLayout="fixed" noWrap>
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </Td>
              <Td>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
        <Heading as="h2" variant="heading40">
          scrollHorizontally
        </Heading>
        <Table scrollHorizontally>
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
        <Heading as="h2" variant="heading40">
          scrollHorizontally, fixed layout
        </Heading>
        <Table scrollHorizontally tableLayout="fixed">
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
        <Heading as="h2" variant="heading40">
          scrollHorizontally, no wrap
        </Heading>
        <Table scrollHorizontally noWrap>
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>16:24:28 UTC 2020-09-17</Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
        <Heading as="h2" variant="heading40">
          scrollHorizontally, no wrap, fixed layout, truncate needed
        </Heading>
        <Table scrollHorizontally tableLayout="fixed" noWrap>
          <THead>
            <Tr>
              <Th>Flow</Th>
              <Th>SID</Th>
              <Th>Date created</Th>
              <Th>Date updated</Th>
              <Th>Logs</Th>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="#">Flow link</Anchor>
              </Td>
              <Td>
                <Text as="div" fontFamily="fontFamilyCode">
                  <Truncate title="SM0yc4mxi6cn4z13bte7qmflc2drc85mlp">SM0yc4mxi6cn4z13bte7qmflc2drc85mlp</Truncate>
                </Text>
              </Td>
              <Td>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </Td>
              <Td>
                <Truncate title="16:24:28 UTC 2020-09-17">16:24:28 UTC 2020-09-17</Truncate>
              </Td>
              <Td>
                <Anchor href="#">Logs</Anchor>
              </Td>
              <Td>
                <Button variant="link">Duplicate flow</Button>
              </Td>
              <Td>
                <Button variant="destructive_link">Delete flow</Button>
              </Td>
            </Tr>
          </TBody>
          <TFoot>
            <Tr>
              <Td colSpan={7}>&nbsp;</Td>
            </Tr>
          </TFoot>
        </Table>
      </Stack>
    </Box>
  );
};

export const CustomTable: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        TABLE: { fontFamily: 'fontFamilyCode' },
        TH_HEAD_LARGE: { fontSize: 'fontSize50' },
        TH: { fontWeight: 'fontWeightBold' },
        TH_BODY: { fontWeight: 'fontWeightMedium' },
        TH_FOOTER: { textDecoration: 'underline' },
        TR_DESTRUCTIVE: { color: 'colorTextLinkDestructive', fontWeight: 'fontWeightBold' },
        TR_NEUTRAL: { color: 'colorTextNeutral', fontFamily: 'fontFamilyText' },
        TR: { color: 'colorTextWeak' },
        TD_FOOT_HIGHLIGHT: {
          backgroundColor: 'colorBackgroundSuccessWeakest',
          fontWeight: 'fontWeightSemibold',
          color: 'colorTextWeak',
        },
      }}
    >
      <Table>
        <THead>
          <Tr>
            <Th>First</Th>
            <Th>Second</Th>
            <Th element="TH_HEAD_LARGE">Third</Th>
            <Th>Fourth</Th>
            <Th element="TH_HEAD_LARGE">Fifth</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr element="TR_DESTRUCTIVE">
            <Th element="TH_BODY">First</Th>
            <Td>Second</Td>
            <Td>Third</Td>
            <Td>Fourth</Td>
            <Td>Fifth</Td>
          </Tr>
          <Tr element="TR_NEUTRAL">
            <Th element="TH_BODY">First</Th>
            <Td>Second</Td>
            <Td>Third</Td>
            <Td>Fourth</Td>
            <Td>Fifth</Td>
          </Tr>
          <Tr>
            <Th element="TH_ROW">First</Th>
            <Td>Second</Td>
            <Td>Third</Td>
            <Td>Fourth</Td>
            <Td>Fifth</Td>
          </Tr>
        </TBody>
        <TFoot>
          <Tr>
            <Th element="TH_FOOTER">First</Th>
            <Td>end</Td>
            <Td>end</Td>
            <Td>end</Td>
            <Td element="TD_FOOT_HIGHLIGHT" textAlign="right">
              100
            </Td>
          </Tr>
        </TFoot>
      </Table>
    </CustomizationProvider>
  );
};

CustomTable.storyName = 'Custom table';
CustomTable.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
