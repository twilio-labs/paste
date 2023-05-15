import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {UnorderedListIcon} from '@twilio-paste/icons/esm/UnorderedListIcon';
import {DataBarChartIcon} from '@twilio-paste/icons/esm/DataBarChartIcon';
import {DataLineChartIcon} from '@twilio-paste/icons/esm/DataLineChartIcon';
import {DataPieChartIcon} from '@twilio-paste/icons/esm/DataPieChartIcon';
import {DataTableIcon} from '@twilio-paste/icons/esm/DataTableIcon';
import {BoldIcon} from '@twilio-paste/icons/esm/BoldIcon';
import {UnderlineIcon} from '@twilio-paste/icons/esm/UnderlineIcon';
import {ItalicIcon} from '@twilio-paste/icons/esm/ItalicIcon';
import {StrikethroughIcon} from '@twilio-paste/icons/esm/StrikethroughIcon';

import {
  Menu,
  MenuButton,
  MenuItemCheckbox,
  SubMenuButton,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  useMenuState,
  MenuItemRadio,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Menu/CheckableItems',
  component: Menu,
  subcomponents: {MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator},
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 3000},
  },
};

export const CheckboxMenu: StoryFn = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="secondary">
        Text formatting <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Display view">
        <MenuItemCheckbox {...menu} name="display-view" value="bold">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <BoldIcon decorative={true} /> Bold
          </Box>
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="display-view" value="underlined">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <UnderlineIcon decorative={true} /> Underlined
          </Box>
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="display-view" value="italic">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <ItalicIcon decorative={true} /> Italic
          </Box>
        </MenuItemCheckbox>
        <MenuSeparator {...menu} />
        <MenuItemCheckbox {...menu} name="display-view" value="strike">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <StrikethroughIcon decorative={true} /> Strike
          </Box>
        </MenuItemCheckbox>
      </Menu>
    </>
  );
};

export const RadioMenu: StoryFn = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="secondary">
        Display view <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Display view">
        <MenuItemRadio {...menu} name="display-view" value="grid">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <DataTableIcon decorative={true} /> Data grid
          </Box>
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="display-view" value="bar">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <DataBarChartIcon decorative={true} /> Bar chart
          </Box>
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="display-view" value="line">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <DataLineChartIcon decorative={true} /> Line chart
          </Box>
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="display-view" disabled value="pie">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <DataPieChartIcon decorative={true} /> Pie chart
          </Box>
        </MenuItemRadio>
        <MenuSeparator {...menu} />
        <MenuItemRadio {...menu} name="display-view" value="list">
          <Box as="span" display="flex" columnGap="space30" alignItems="center">
            <UnorderedListIcon decorative={true} /> List
          </Box>
        </MenuItemRadio>
      </Menu>
    </>
  );
};
