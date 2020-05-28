export const defaultExample = `
const MenuExample = () => {
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

render(
  <MenuExample />
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
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <InformationIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>With left icon</MediaBody>
        </MediaObject>
      </MenuItem>
      <MenuItem  {...menu}>
        <MediaObject verticalAlign="center">
          <MediaBody>With right icon</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <InformationIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem  {...menu}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <InformationIcon decorative={false} title="information" />
          </MediaFigure>
          <MediaBody>With two icons</MediaBody>
          <MediaFigure spacing="space20" align="end">
            <InformationIcon decorative={false} title="information" />
          </MediaFigure>
        </MediaObject>
      </MenuItem>
      <MenuItem  {...menu}>
        <MediaObject verticalAlign="center">
          <MediaFigure spacing="space20">
            <InformationIcon decorative={false} title="information" />
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
