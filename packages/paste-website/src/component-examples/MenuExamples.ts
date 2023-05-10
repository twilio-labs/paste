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
      <MenuBadge {...menu} i18nButtonLabel="Change account" variant="decorative10">
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

export const ProcessObject = {
  Success: {
    variant: 'ProcessSuccess',
    children: 'Complete',
  },
  Neutral: {
    variant: 'ProcessNeutral',
    children: 'In review',
  },
  Warning: {
    variant: 'ProcessWarning',
    children: 'Needs attention',
  },
  Error: {
    variant: 'ProcessError',
    children: 'Rejected',
  },
  InProgress: {
    variant: 'ProcessInProgress',
    children: 'In progress',
  },
  Disabled: {
    variant: 'ProcessDisabled',
    children: 'Paused',
  },
  Draft: {
    variant: 'ProcessDraft',
    children: 'Draft',
  },
};
export const processStatusMenuExample = `
const ProcessStatusMenu = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useMenuState();
  const onClick = (status) => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} i18nButtonLabel="Change account" variant={process.variant}>
        {process.children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} onClick={() => onClick('Success')} variant="default">
          <MenuItemStatus variant="ProcessSuccess">Success</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Neutral')} variant="default">
          <MenuItemStatus variant="ProcessNeutral">Neutral</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Warning')} variant="default">
          <MenuItemStatus variant="ProcessWarning">Warning</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Error')} variant="default">
          <MenuItemStatus variant="ProcessError">Error</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('InProgress')} variant="default">
          <MenuItemStatus variant="ProcessInProgress">In progress</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Disabled')} variant="default">
          <MenuItemStatus variant="ProcessDisabled">Disabled</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Draft')} variant="default">
          <MenuItemStatus variant="ProcessDraft">Draft</MenuItemStatus>
        </MenuItem>
      </Menu>
    </>
  );
};

render(
  <ProcessStatusMenu />
)
`.trim();

export const ConnectivityObject = {
  Available: {
    variant: 'ConnectivityAvailable',
    children: 'Available',
  },
  Busy: {
    variant: 'ConnectivityBusy',
    children: 'Busy',
  },
  Unavailable: {
    variant: 'ConnectivityUnavailable',
    children: 'Unavailable',
  },
  Neutral: {
    variant: 'ConnectivityNeutral',
    children: 'Neutral',
  },
  Offline: {
    variant: 'ConnectivityOffline',
    children: 'Offline',
  },
};
export const availabilityStatusMenuExample = `
const ConnectivityStatusMenu = () => {
  const [availability, setConnectivity] = React.useState(ConnectivityObject.Available);
  const menu = useMenuState();
  const onClick = (status) => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
        {availability.children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Available'}
          value="available"
          {...menu}
          onClick={() => onClick('Available')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityAvailable">Available</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Busy'}
          value="busy"
          {...menu}
          onClick={() => onClick('Busy')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityBusy">Busy</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Unavailable'}
          value="unavailable"
          {...menu}
          onClick={() => onClick('Unavailable')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityUnavailable">Unavailable</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Neutral'}
          value="neutral"
          {...menu}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityNeutral">Neutral</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Offline'}
          value="offline"
          {...menu}
          onClick={() => onClick('Offline')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityOffline">Break</MenuItemStatus>
        </MenuItemRadio>
      </Menu>
    </>
  );
};

render(
  <ConnectivityStatusMenu />
)
`.trim();

export const CheckboxMenuExample = `
const CheckboxMenu = () => {
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

render(
  <CheckboxMenu />
)
`.trim();

export const RadioMenuExample = `
const RadioMenu = () => {
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

render(
  <RadioMenu />
)
`.trim();
