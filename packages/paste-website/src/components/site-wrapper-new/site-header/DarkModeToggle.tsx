import { DarkModeIcon } from "@twilio-paste/icons/esm/DarkModeIcon";
import { LightModeIcon } from "@twilio-paste/icons/esm/LightModeIcon";
import { Menu, MenuButton, MenuItemRadio, useMenuState } from "@twilio-paste/menu";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";

import { useDarkModeContext } from "../../../context/DarkModeContext";
import { event } from "../../../lib/gtag";

export const DarkModeToggle = (): JSX.Element => {
  const { theme, toggleMode } = useDarkModeContext();
  const menu = useMenuState();

  const handleClick = (category: string, action: string, label: string): void => {
    menu.hide();
    toggleMode();
    event({
      category,
      action,
      label,
    });
  };

  return (
    <>
      <MenuButton
        {...menu}
        color="colorTextIcon"
        variant="reset"
        borderRadius="borderRadius10"
        size="reset"
        onClick={() =>
          event({
            category: "Top Navigation",
            action: "click-dark-mode",
            label: "Switch",
          })
        }
      >
        {theme === "twilio" ? (
          <LightModeIcon decorative size="sizeIcon40" />
        ) : (
          <DarkModeIcon decorative size="sizeIcon40" />
        )}
        <ScreenReaderOnly>Switch the site theme</ScreenReaderOnly>
      </MenuButton>
      <Menu {...menu} aria-label="Site theme mode">
        <MenuItemRadio
          {...menu}
          name="site-theme"
          value="light"
          checked={theme === "twilio"}
          onClick={() => handleClick("Top Navigation", "click-dark-mode", "Light")}
        >
          <LightModeIcon decorative /> Light mode
        </MenuItemRadio>
        <MenuItemRadio
          {...menu}
          name="site-theme"
          value="dark"
          checked={theme === "twilio-dark"}
          onClick={() => handleClick("Top Navigation", "click-dark-mode", "Dark")}
        >
          <DarkModeIcon decorative /> Dark mode
        </MenuItemRadio>
      </Menu>
    </>
  );
};
