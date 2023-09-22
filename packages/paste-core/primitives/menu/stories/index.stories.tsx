import * as React from "react";

import {
  MenuPrimitive,
  MenuPrimitiveButton,
  MenuPrimitiveItem,
  MenuPrimitiveSeparator,
  useMenuPrimitiveState,
} from "../src";
import type { MenuPrimitiveButtonProps } from "../src";

const PreferencesMenu = React.forwardRef<HTMLButtonElement, MenuPrimitiveButtonProps>((props, ref) => {
  const menu = useMenuPrimitiveState();
  return (
    <>
      <MenuPrimitiveButton ref={ref} {...menu} {...props}>
        Preferences
      </MenuPrimitiveButton>
      <MenuPrimitive {...menu} aria-label="Preferences">
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

PreferencesMenu.displayName = "PreferencesMenu";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Primitives/Menu",
  component: MenuPrimitive,
  subcomponents: { MenuPrimitiveItem, MenuPrimitiveButton, MenuPrimitiveSeparator },
};

export const SimpleMenu = (): React.ReactNode => {
  const menu = useMenuPrimitiveState();
  return (
    <>
      <MenuPrimitiveButton {...menu}>Preferences</MenuPrimitiveButton>
      <MenuPrimitive {...menu} aria-label="Preferences">
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

export const SubMenu = (): React.ReactNode => {
  const menu = useMenuPrimitiveState();
  return (
    <>
      <MenuPrimitiveButton {...menu}>Code</MenuPrimitiveButton>
      <MenuPrimitive {...menu} aria-label="Code">
        <MenuPrimitiveItem {...menu}>About Visual Studio Code</MenuPrimitiveItem>
        <MenuPrimitiveItem {...menu}>Check for Updates...</MenuPrimitiveItem>
        <MenuPrimitiveSeparator {...menu} />
        <MenuPrimitiveItem {...menu} as={PreferencesMenu} />
      </MenuPrimitive>
    </>
  );
};
