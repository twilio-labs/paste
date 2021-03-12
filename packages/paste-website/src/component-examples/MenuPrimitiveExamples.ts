export const defaultExample = `
const BasicMenu = () => {
  const menu = useMenuPrimitiveState();
  return (
    <>
      <MenuPrimitiveButton {...menu}>Preferences</MenuPrimitiveButton>
      <MenuPrimitive {...menu} aria-label="Preferences" style={{backgroundColor: '#fff', zIndex:10}}>
        <MenuPrimitiveItem {...menu}>Settings</MenuPrimitiveItem>
        <MenuPrimitiveItem {...menu} disabled>
          Extensions
        </MenuPrimitiveItem>
        <MenuPrimitiveSeparator {...menu} />
        <MenuPrimitiveItem {...menu}>Keyboard shortcuts</MenuPrimitiveItem>
      </MenuPrimitive>
    </>
  );
};

render(
  <BasicMenu />
)
`.trim();

export const subMenuExample = `
const PreferencesMenu = React.forwardRef((props, ref) => {
  const menu = useMenuPrimitiveState();
  return (
    <>
      <MenuPrimitiveButton ref={ref} {...menu} {...props}>
        Preferences
      </MenuPrimitiveButton>
      <MenuPrimitive {...menu} aria-label="Preferences"  style={{backgroundColor: '#fff', zIndex:10}}>
        <MenuPrimitiveItem {...menu}>Settings</MenuPrimitiveItem>
        <MenuPrimitiveItem {...menu} disabled>
          Extensions
        </MenuPrimitiveItem>
        <MenuPrimitiveSeparator {...menu} />
        <MenuPrimitiveItem {...menu}>Keyboard shortcuts</MenuPrimitiveItem>
      </MenuPrimitive>
    </>
  );
});

const SubMenu = () => {
  const menu = useMenuPrimitiveState();
  return (
    <>
      <MenuPrimitiveButton {...menu}>Code</MenuPrimitiveButton>
      <MenuPrimitive {...menu} aria-label="Code" style={{backgroundColor: '#fff', zIndex:10}}>
        <MenuPrimitiveItem {...menu}>About Visual Studio Code</MenuPrimitiveItem>
        <MenuPrimitiveItem {...menu}>Check for Updates...</MenuPrimitiveItem>
        <MenuPrimitiveSeparator {...menu} />
        <MenuPrimitiveItem {...menu} as={PreferencesMenu} />
      </MenuPrimitive>
    </>
  );
};

render(
  <SubMenu />
)
`.trim();

export const customExample = `
const StyledMenu = React.forwardRef(({children, ...props}, ref) => (
  <Box backgroundColor="colorBackgroundBody" borderColor="colorBorderWeak" borderStyle="solid" borderWidth="borderWidth10" borderRadius="borderRadius30" outline="none" padding="space20" zIndex="zIndex10" ref={ref} {...props}>{children}</Box>
));

const StyledMenuItem = React.forwardRef(({children, ...props}, ref) => (
  <Box borderRadius="borderRadius30" padding="space30" minWidth="size40" outline="none" _hover={{cursor: 'pointer'}} _focus={{backgroundColor: 'colorBackgroundPrimaryWeakest'}} _disabled={{cursor: 'not-allowed'}} ref={ref} {...props}>{children}</Box>
));

const CustomMenu = () => {
  const menu = useMenuPrimitiveState();
  return (
    <>
      <MenuPrimitiveButton {...menu} as={Button}>Preferences</MenuPrimitiveButton>
      <MenuPrimitive {...menu} aria-label="Preferences" as={StyledMenu}>
        <MenuPrimitiveItem {...menu} as={StyledMenuItem}>Settings</MenuPrimitiveItem>
        <MenuPrimitiveItem {...menu} disabled as={StyledMenuItem}>
          Extensions
        </MenuPrimitiveItem>
        <MenuPrimitiveSeparator {...menu} />
        <MenuPrimitiveItem {...menu} as={StyledMenuItem}>Keyboard shortcuts</MenuPrimitiveItem>
      </MenuPrimitive>
    </>
  );
};

render(
  <CustomMenu />
)
`.trim();
