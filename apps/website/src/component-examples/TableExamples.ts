export const fixedExample = `
const MoreMenu = () => {
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

const FixedTable= () => {
  return (
    <Table tableLayout="fixed">
      <THead>
        <Tr>
          <Th>Agents</Th>
          <Th textAlign="right">Tasks</Th>
          <Th />
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Adam Brown</Td>
          <Td textAlign="right">35</Td>
          <Td>
            <MoreMenu />
          </Td>
        </Tr>
        <Tr>
          <Td>Adriana Lovelock</Td>
          <Td textAlign="right">28</Td>
          <Td>
            <MoreMenu />
          </Td>
        </Tr>
        <Tr>
          <Td>Amanda Cutlack</Td>
          <Td textAlign="right">7</Td>
          <Td>
            <MoreMenu />
          </Td>
        </Tr>
      </TBody>
      <TFoot>
        <Tr>
          <Td />
          <Td textAlign="right">70</Td>
          <Td />
        </Tr>
      </TFoot>
    </Table>
  );
};

render(
  <FixedTable />
)
`.trim();
