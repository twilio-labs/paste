import { Box } from "@twilio-paste/box";
import { AttachIcon } from "@twilio-paste/icons/esm/AttachIcon";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import { ProductVoiceIcon } from "@twilio-paste/icons/esm/ProductVoiceIcon";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuSeparator,
  SubMenuButton,
  useMenuState,
} from "../src";

const PlainMenu: React.FC<React.PropsWithChildren<unknown>> = () => {
  const menu = useMenuState();
  const onClick = (): void => {
    menu.hide();
  };
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Preferences <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} onClick={onClick}>
          Settings
        </MenuItem>
        <MenuItem {...menu} href="http://www.google.com" onClick={onClick}>
          Has a link
        </MenuItem>
        <MenuItem {...menu} variant="destructive" href="http://www.google.com" onClick={onClick}>
          Destructive link
        </MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu} onClick={onClick}>
          Keyboard shortcuts
        </MenuItem>
      </Menu>
    </>
  );
};

const AutoplacedMenu = (): JSX.Element => {
  const menu = useMenuState({ visible: true });
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Preferences <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Settings</MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
};

const PreferencesMenu = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const menu = useMenuState();
  return (
    <>
      <SubMenuButton ref={ref} {...menu} {...props}>
        Preferences
      </SubMenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Settings</MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
});

PreferencesMenu.displayName = "PreferencesMenu";

const SubMenu = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="secondary">
        Code <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Code">
        <MenuItem {...menu}>About Visual Studio Code</MenuItem>
        <MenuItem {...menu}>Check for Updates...</MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu} as={PreferencesMenu} />
      </Menu>
    </>
  );
};

const Example3 = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="secondary" size="icon">
        <AttachIcon decorative={false} title="show information" />
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
    </>
  );
};

const Example4 = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <>
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
    </>
  );
};

const WithActionsMenu = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Click actions <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} href="http://www.google.com" onClick={() => menu.hide()}>
          Has a link
        </MenuItem>
        <MenuItem {...menu} href="#" onClick={() => menu.hide()}>
          Has internal link
        </MenuItem>
        <MenuItem
          {...menu}
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("you clicked me");
            menu.hide();
          }}
        >
          Has just an onClick
        </MenuItem>
      </Menu>
    </>
  );
};

const MenuGroups = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Preferences <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuGroup label="Main Settings">
          <MenuItem {...menu}>Settings</MenuItem>
          <MenuItem {...menu}>Extensions</MenuItem>
        </MenuGroup>
        <MenuSeparator {...menu} />
        <MenuGroup icon={<AttachIcon decorative />} label="Search Options">
          <MenuItem {...menu} variant="destructive">
            Search with Google
          </MenuItem>
          <MenuItem {...menu} disabled>
            Search with Bing
          </MenuItem>
        </MenuGroup>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Menu",
  component: Menu,
  subcomponents: { MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator },
  parameters: {
    // Sets a delay for the component's stories
    chromatic: { delay: 3000 },
  },
};

export const Default = (): React.ReactNode => {
  return <PlainMenu />;
};

Default.storyName = "default";

export const SubMenuStory = (): React.ReactNode => {
  return <SubMenu />;
};

SubMenuStory.storyName = "sub menu";

export const ActionsDemoMenu = (): React.ReactNode => {
  return <WithActionsMenu />;
};

ActionsDemoMenu.storyName = "actions demo menu";

export const MenuGroupsStory = (): React.ReactNode => {
  return <MenuGroups />;
};

MenuGroupsStory.storyName = "menu groups";

export const MenuDropdown = (): React.ReactNode => {
  const uniqueMenuLabelID = useUID();
  const menuMockProps = {
    visible: true,
    baseId: uniqueMenuLabelID,
    first: () => {},
    last: () => {},
    items: [],
    move: () => {},
    next: () => {},
    previous: () => {},
    setCurrentId: () => {},
  };

  const menuItemMockProps = {
    first: () => {},
    last: () => {},
    items: [],
    move: () => {},
    next: () => {},
    previous: () => {},
    up: () => {},
    down: () => {},
    setCurrentId: () => {},
    registerItem: () => {},
    unregisterItem: () => {},
    tabIndex: -1,
    unstable_values: {},
    unstable_setValue: () => {},
  };
  return (
    <Menu {...menuMockProps} aria-label={`Code ${uniqueMenuLabelID}`} placement="auto">
      <MenuItem {...menuItemMockProps}>Default</MenuItem>
      <MenuItem {...menuItemMockProps} variant="destructive">
        Destructive
      </MenuItem>
      <MenuItem {...menuItemMockProps} disabled>
        Disabled
      </MenuItem>
      <MenuSeparator />
      <MenuItem {...menuItemMockProps}>Suuuuuuuuuuuuuuuuuuuuuuper long menu item</MenuItem>
      <MenuItem {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>Got an icon</MediaBody>
        </MediaObject>
      </MenuItem>
      <MenuItem {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaBody>Got a right icon</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>Got two icons</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem variant="destructive" {...menuItemMockProps}>
        Suuuuuuuuuuuuuuuuuuuuuuper long menu item
      </MenuItem>
      <MenuItem variant="destructive" {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>Got an icon</MediaBody>
        </MediaObject>
      </MenuItem>
      <MenuItem variant="destructive" {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaBody>Got a right icon</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem variant="destructive" {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>Got two icons</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuSeparator />
      <MenuGroup icon={<ProductVoiceIcon decorative />} label="Search Options">
        <MenuItem {...menuItemMockProps} href="https://google.com">
          Search with Google
        </MenuItem>
        <MenuItem variant="destructive" {...menuItemMockProps} href="https://google.com">
          Search with Yahoo
        </MenuItem>
        <MenuItem {...menuItemMockProps} disabled>
          Search with Bing
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuItem {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>keyboard shortcut?</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <Text as="span" color="colorTextWeak" fontSize="fontSize20">
              ⌘+s
            </Text>
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem {...menuItemMockProps}>
        <MediaObject verticalAlign="center">
          <MediaBody>Got a right icon</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <SubMenuButton {...menuItemMockProps} toggle={() => {}} placement="auto" baseId="test" show={() => {}}>
        Sub menu button
      </SubMenuButton>
      <MenuSeparator />
      <MenuItemCheckbox {...menuItemMockProps} name="checkbox">
        Checkbox Item
      </MenuItemCheckbox>
      <MenuItemCheckbox {...menuItemMockProps} name="checkbox" variant="destructive">
        Checkbox Item Destructive
      </MenuItemCheckbox>
      <MenuItemCheckbox {...menuItemMockProps} name="checkbox" disabled>
        Checkbox Item Disabled
      </MenuItemCheckbox>
      <MenuItemCheckbox {...menuItemMockProps} name="checkbox" checked>
        Checkbox Item Checked
      </MenuItemCheckbox>
      <MenuItemCheckbox {...menuItemMockProps} name="checkbox" variant="destructive" checked>
        Checkbox Item Destructive Checked
      </MenuItemCheckbox>
      <MenuItemCheckbox {...menuItemMockProps} name="checkbox" checked disabled>
        Checkbox Item Checked Disabled
      </MenuItemCheckbox>
      <MenuSeparator />
      <MenuItemRadio {...menuItemMockProps} name="radio" value="">
        Radio Item
      </MenuItemRadio>
      <MenuItemRadio {...menuItemMockProps} name="radio" value="" variant="destructive">
        Radio Item Destructive
      </MenuItemRadio>
      <MenuItemRadio {...menuItemMockProps} name="radio" value="" disabled>
        Radio Item Disabled
      </MenuItemRadio>
      <MenuItemRadio {...menuItemMockProps} name="radio" value="" checked>
        Radio Item Checked
      </MenuItemRadio>
      <MenuItemRadio {...menuItemMockProps} name="radio" value="" variant="destructive" checked>
        Radio Item Destructive Checked
      </MenuItemRadio>
      <MenuItemRadio {...menuItemMockProps} name="radio" value="" checked disabled>
        Radio Item Checked Disabled
      </MenuItemRadio>
    </Menu>
  );
};

MenuDropdown.storyName = "menu dropdown";

export const DifferentButtonTriggers = (): React.ReactNode => {
  return (
    <>
      <Stack orientation="vertical" spacing="space50">
        <PlainMenu />
        <SubMenu />
        <Example3 />
        <Example4 />
      </Stack>
    </>
  );
};

DifferentButtonTriggers.storyName = "different button triggers";

export const AutoPlacementMenuStory = (): React.ReactNode => {
  return (
    <Box position="absolute" top={10} right={10}>
      <AutoplacedMenu />
    </Box>
  );
};

AutoPlacementMenuStory.storyName = "auto placed menu";
