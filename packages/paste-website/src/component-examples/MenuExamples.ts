export const defaultExample = `
const MenuExample = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Actions you can take <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Actions">
        <MenuItem {...menu}>Call your representatives</MenuItem>
        <MenuItem {...menu}>Support black-owned businesses</MenuItem>
        <MenuItem {...menu}>Vote in national, state, and local elections</MenuItem>
      </Menu>
    </>
  );
};

render(
  <MenuExample />
)
`.trim();

export const groupingExample = `
const MenuGroupExample = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Cool places <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Actions">
        <MenuGroup label="Social media" icon={<AttachIcon decorative />}>
          <MenuItem {...menu}>Twitter</MenuItem>
          <MenuItem {...menu}>Myspace</MenuItem>
          <MenuItem {...menu}>Dribbble</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup label="Search engines">
          <MenuItem {...menu}>Ecosia</MenuItem>
          <MenuItem {...menu}>DuckDuckGo</MenuItem>
        </MenuGroup>
      </Menu>
    </>
  );
};

render(
  <MenuGroupExample />
)
`.trim();

export const subMenuExample = `
const PreferencesMenu = React.forwardRef((props, ref) => {
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

const SubMenu = () => {
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

render(
  <SubMenu />
)
`.trim();

export const iconButtonExample = `
const IconExample = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="reset" size="reset">
        <MoreIcon decorative={false} title="More options" />
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

render(
  <IconExample />
)
`.trim();

export const actionsExample = `
const ActionsExample = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="secondary">
        Actions <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem
          {...menu}
          onClick={e => {
            menu.hide();
            alert('do something');
          }}
        >
          Perform Action
        </MenuItem>
        <MenuItem {...menu} href="https://paste.twilio.design">Go to new page</MenuItem>
      </Menu>
    </>
  );
};

render(
  <ActionsExample />
)
`.trim();

export const itemContentExample = `
const ItemsExample = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Menu item content <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
      <MenuItem  {...menu}>
        Default item
      </MenuItem>
      <MenuItem  variant="destructive" {...menu}>
        Destructive item
      </MenuItem>
        <MenuItem  {...menu}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>With left icon</MediaBody>
        </MediaObject>
      </MenuItem>
      <MenuItem  {...menu}>
        <MediaObject verticalAlign="center">
          <MediaBody>With right icon</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem  {...menu}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>With two icons</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem  {...menu}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <AttachIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>Keyboard shortcut?</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <Text as="span" color="colorTextWeak" fontSize="fontSize20">
              ⌘+s
            </Text>
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      </Menu>
    </>
  );
};

render(
  <ItemsExample />
)
`.trim();

export const menuBadgeExample = `
const MenuBadgeExample = () => {
  const [account, setAccount] = React.useState('Account name');
  const menu = useMenuState();
  const onClick = (newAccount) => {
    menu.hide();
    setAccount(newAccount);
  };
  return (
    <>
      <MenuBadge {...menu} buttonLabel="Change account" variant="decorative10">
        {account}
      </MenuBadge>
      <Menu {...menu} aria-label="Accounts">
        <MenuItem {...menu} onClick={()=>onClick('Account one')}>
          Account one
        </MenuItem>
        <MenuItem {...menu} onClick={()=>onClick('Account two')}>
          Account two
        </MenuItem>
        <MenuItem {...menu} onClick={()=>onClick('Account three')}>
          Account three
        </MenuItem>
      </Menu>
    </>
  );
};

render(
  <MenuBadgeExample />
)
`.trim();

export const processStatusMenuExample = `
const ProcessStatusMenuExample = () => {
  const menu = useMenuState();
  const onClick = () => {
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} buttonLabel="Change progess status" variant="ProcessInProgress">
        In progress
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Progress Status">
        <MenuItemStatus {...menu} variant="ProcessSuccess" onClick={onClick}>
          Success
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessNeutral" onClick={onClick}>
          Neutral
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessWarning" onClick={onClick}>
          Warning
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessError">
          Error
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessInProgress" onClick={onClick}>
          In progress
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessDisabled" onClick={onClick}>
          Disabled
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessDraft" onClick={onClick}>
          Draft
        </MenuItemStatus>
      </Menu>
    </>
  );
};

render(
  <ProcessStatusMenuExample />
)
`.trim();

export const availabilityStatusMenuExample = `
const ProcessStatusMenuExample = () => {
  const menu = useMenuState();
  const onClick = () => {
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} buttonLabel="Change availability" variant="AvailabilityAvailable">
        Online | 00:01:23
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItemStatus variant="AvailabilityAvailable" {...menu} onClick={onClick}>
          Available
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityBusy" {...menu} onClick={onClick}>
          Busy
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityUnavailable" {...menu} onClick={onClick}>
          Unavailable
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityNeutral" {...menu} onClick={onClick}>
          Neutral
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityOffline" {...menu} onClick={onClick}>
          Break
        </MenuItemStatus>
      </Menu>
    </>
  );
};

render(
  <ProcessStatusMenuExample />
)
`.trim();
