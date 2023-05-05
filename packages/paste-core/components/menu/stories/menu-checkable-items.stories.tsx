import * as React from 'react';
import {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {AttachIcon} from '@twilio-paste/icons/esm/AttachIcon';
import {ProductVoiceIcon} from '@twilio-paste/icons/esm/ProductVoiceIcon';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';
import {useUID} from '@twilio-paste/uid-library';

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
        Disaply view
      </MenuButton>
      <Menu {...menu} aria-label="Display view">
        <MenuItemCheckbox {...menu} name="display-view" value="wrap">
          Word wrap
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="display-view" value="bold">
          Bold
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="display-view" value="underlined">
          Underlined
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="display-view" disabled value="italic">
          Italic
        </MenuItemCheckbox>
        <MenuSeparator {...menu} />
        <MenuItemCheckbox {...menu} name="display-view" value="strike">
          Strike
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
        Disaply view
      </MenuButton>
      <Menu {...menu} aria-label="Display view">
        <MenuItemRadio {...menu} name="display-view" value="wrap">
          Word wrap
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="display-view" value="bold">
          Bold
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="display-view" value="underlined">
          Underlined
        </MenuItemRadio>
        <MenuItemRadio {...menu} name="display-view" disabled value="italic">
          Italic
        </MenuItemRadio>
        <MenuSeparator {...menu} />
        <MenuItemRadio {...menu} name="display-view" value="strike">
          Strike
        </MenuItemRadio>
      </Menu>
    </>
  );
};
