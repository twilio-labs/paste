import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {MediaObject, MediaBody, MediaFigure} from '@twilio-paste/media-object';
import {AttachIcon} from '@twilio-paste/icons/esm/AttachIcon';
import {ProductVoiceIcon} from '@twilio-paste/icons/esm/ProductVoiceIcon';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';
import {Menu, MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator, useMenuState} from '../src';

const PlainMenu: React.FC = () => {
  const menu = useMenuState();
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

const AutoplacedMenu: React.FC = () => {
  const menu = useMenuState({visible: true});
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

const SubMenu: React.FC = () => {
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

const Example3: React.FC = () => {
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

const Example4: React.FC = () => {
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

const WithActionsMenu: React.FC = () => {
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
            alert('you clicked me');
            menu.hide();
          }}
        >
          Has just an onClick
        </MenuItem>
      </Menu>
    </>
  );
};

const MenuGroups: React.FC = () => {
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
          <MenuItem {...menu}>Search with Google</MenuItem>
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
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {MenuButton, SubMenuButton, MenuGroup, MenuItem, MenuSeparator},
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 1000},
  },
};

export const Default = (): React.ReactNode => {
  return <PlainMenu />;
};

Default.story = {
  name: 'default',
};

export const SubMenuStory = (): React.ReactNode => {
  return <SubMenu />;
};

SubMenuStory.story = {
  name: 'sub menu',
};

export const ActionsDemoMenu = (): React.ReactNode => {
  return <WithActionsMenu />;
};

ActionsDemoMenu.story = {
  name: 'actions demo menu',
};

export const MenuGroupsStory = (): React.ReactNode => {
  return <MenuGroups />;
};

MenuGroupsStory.story = {
  name: 'menu groups',
};

export const MenuDropdown = (): React.ReactNode => {
  const menuMockProps = {
    visible: true,
    baseId: 'test',
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
  };
  return (
    <Menu {...menuMockProps} aria-label="Code" placement="auto">
      <MenuItem {...menuItemMockProps}>Default</MenuItem>
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
      <MenuSeparator />
      <MenuGroup icon={<ProductVoiceIcon decorative />} label="Search Options">
        <MenuItem {...menuItemMockProps}>Search with Google</MenuItem>
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
    </Menu>
  );
};

MenuDropdown.story = {
  name: 'menu dropdown',
};

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

DifferentButtonTriggers.story = {
  name: 'different button triggers',
};

export const AutoPlacementMenuStory = (): React.ReactNode => {
  return (
    <Box position="absolute" top={10} right={10}>
      <AutoplacedMenu />
    </Box>
  );
};

AutoPlacementMenuStory.story = {
  name: 'auto placed menu',
};
