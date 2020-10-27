export const horizontalExample = `
const HorizontalExample = () => {
  const tab = useTabPrimitiveState();
  return (
    <>
      <TabPrimitiveList {...tab} aria-label="My tabs">
        <TabPrimitive {...tab}>
          Tab 1
        </TabPrimitive>
        <TabPrimitive {...tab} disabled>
          Tab 2 (disabled)
        </TabPrimitive>
        <TabPrimitive {...tab}>
          Tab 3
        </TabPrimitive>
      </TabPrimitiveList>
      <TabPrimitivePanel {...tab}>Tab 1</TabPrimitivePanel>
      <TabPrimitivePanel {...tab}>Tab 2</TabPrimitivePanel>
      <TabPrimitivePanel {...tab}>Tab 3</TabPrimitivePanel>
    </>
  )
};

render(
  <HorizontalExample />
)
`.trim();

export const verticalExample = `
const VerticalExample = () => {
  const tab = useTabPrimitiveState({orientation: 'vertical'});
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Box>
        <TabPrimitiveList {...tab} aria-label="My tabs">
          <Stack orientation="vertical" spacing="space20">
            <TabPrimitive {...tab}>
              Tab 1
            </TabPrimitive>
            <TabPrimitive {...tab}>
              Tab 2
            </TabPrimitive>
            <TabPrimitive {...tab}>
              Tab 3
            </TabPrimitive>
          </Stack>
        </TabPrimitiveList>
      </Box>
      <Box>
        <TabPrimitivePanel {...tab}>Tab 1</TabPrimitivePanel>
        <TabPrimitivePanel {...tab}>Tab 2</TabPrimitivePanel>
        <TabPrimitivePanel {...tab}>Tab 3</TabPrimitivePanel>
      </Box>
    </Stack>
  )
};
render(
  <VerticalExample />
)
`.trim();

export const styledExample = `
const CustomTab = React.forwardRef((props, ref) => (
  <Box
    as="div"
    ref={ref}
    borderBottomColor="transparent"
    borderRadius="borderRadius0"
    borderBottomStyle="solid"
    borderBottomWidth="borderWidth20"
    cursor="pointer"
    padding="space20"
    outline="none"
    _selected={{
      borderColor:"colorBorderPrimary"
    }}
    _focus={{
      textDecoration: 'underline'
    }}
    _disabled={{
      color: 'colorTextWeaker'
    }}
    {...props}
  />
));
const StyledExample = () => {
  const tab = useTabPrimitiveState();
  return (
    <>
      <TabPrimitiveList {...tab} aria-label="My tabs">
        <Stack orientation="horizontal" spacing="space20">
          <TabPrimitive {...tab} as={CustomTab}>
            Tab 1
          </TabPrimitive>
          <TabPrimitive {...tab} disabled as={CustomTab}>
            Tab 2
          </TabPrimitive>
          <TabPrimitive {...tab} as={CustomTab}>
            Tab 3
          </TabPrimitive>
        </Stack>
      </TabPrimitiveList>
      <TabPrimitivePanel {...tab}>Tab 1</TabPrimitivePanel>
      <TabPrimitivePanel {...tab}>Tab 2</TabPrimitivePanel>
      <TabPrimitivePanel {...tab}>Tab 3</TabPrimitivePanel>
    </>
  )
};
render(
  <StyledExample />
)
`.trim();
