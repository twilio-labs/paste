import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {
  useMenuPrimitiveState,
  MenuPrimitive,
  MenuPrimitiveItem,
  MenuPrimitiveButton,
  MenuPrimitiveButtonProps,
  MenuPrimitiveSeparator,
} from '../src';

const Example: React.FC<{}> = () => {
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

const Example2: React.FC<{}> = () => {
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

storiesOf('Primitives|Menu', module)
  .add('Simple Menu', () => {
    return <Example />;
  })
  .add('Sub Menu', () => {
    return <Example2 />;
  });
