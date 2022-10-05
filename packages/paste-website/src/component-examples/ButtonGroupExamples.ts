export const BasicExample = `const BasicButtonGroup = () => {
  return (
    <ButtonGroup attached>
      <Button variant="secondary">
        <PlusIcon decorative />
        Add
      </Button>
      <Button variant="secondary">
        <EditIcon decorative />
        Edit
      </Button>
      <Button variant="secondary">
        <ExportIcon decorative />
        Export
      </Button>
      <Button variant="destructive_secondary">
        <DeleteIcon decorative />
        Delete
      </Button>
    </ButtonGroup>
  );
};

render(<BasicButtonGroup />);`.trim();

export const UnattachedExample = `const BasicButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button variant="secondary">
        <PlusIcon decorative />
        Add
      </Button>
      <Button variant="secondary">
        <EditIcon decorative />
        Edit
      </Button>
      <Button variant="secondary">
        <ExportIcon decorative />
        Export
      </Button>
      <Button variant="destructive_secondary">
        <DeleteIcon decorative />
        Delete
      </Button>
    </ButtonGroup>
  );
};

render(<BasicButtonGroup />);`.trim();

export const DisabledExample = `const DisabledButtonGroup = () => {
  return (
    <ButtonGroup attached>
      <Button variant="secondary" disabled>
        <PlusIcon decorative />
        Add
      </Button>
      <Button variant="secondary" disabled>
        <EditIcon decorative />
        Edit
      </Button>
      <Button variant="secondary" disabled>
        <ExportIcon decorative />
        Export
      </Button>
      <Button variant="destructive_secondary" disabled>
        <DeleteIcon decorative />
        Delete
      </Button>
    </ButtonGroup>
  );
};

render(<DisabledButtonGroup />);`.trim();

export const IconExample = `const IconButtonGroup = () => {
  const [boldPressed, setBoldPressed] = React.useState(false);
  const [italicPressed, setItalicPressed] = React.useState(false);
  const [underlinePressed, setUnderlinePressed] = React.useState(false);

  return (
    <ButtonGroup attached>
      <Tooltip text="Bold">
        <Button
          variant="secondary_icon"
          size="icon"
          pressed={boldPressed}
          onClick={() => setBoldPressed(!boldPressed)}
        >
          <BoldIcon decorative={false} title="Bold" />
        </Button>
      </Tooltip>
      <Tooltip text="Italic">
      <Button
          variant="secondary_icon"
          size="icon"
          pressed={italicPressed}
          onClick={() => setItalicPressed(!italicPressed)}
        >
          <ItalicIcon decorative={false} title="Italic" />
        </Button>
      </Tooltip>
      <Tooltip text="Underline">
        <Button
          variant="secondary_icon"
          size="icon"
          pressed={underlinePressed}
          onClick={() => setUnderlinePressed(!underlinePressed)}
        >
          <UnderlineIcon decorative={false} title="Underline" />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

render(<IconButtonGroup />);`.trim();

export const MenuExample = `const MenuButtonGroup = () => {
  const menu = useMenuState();
  return (
    <ButtonGroup attached>
      <Button variant="secondary">
        <PlusIcon decorative />
        Add
      </Button>
      <Button variant="secondary">
        <EditIcon decorative />
        Edit
      </Button>
      <Button variant="destructive_secondary">
        <DeleteIcon decorative />
        Delete
      </Button>
      <MenuButton {...menu} variant="secondary">
        <ChevronDownIcon decorative={false} title='Additional actions' />
      </MenuButton>
      <Menu {...menu} aria-label="Additional actions">
        <MenuItem {...menu}>Export</MenuItem>
        <MenuItem {...menu}>Share</MenuItem>
        <MenuItem {...menu}>Duplicate</MenuItem>
      </Menu>
    </ButtonGroup>
  );
};

render(<MenuButtonGroup />);`.trim();
