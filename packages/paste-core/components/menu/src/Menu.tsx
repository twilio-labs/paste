import type { BoxElementProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { MenuPrimitive } from "@twilio-paste/menu-primitive";
import * as React from "react";

import type { MenuProps } from "./types";

const StyledMenu = React.forwardRef<HTMLDivElement, BoxElementProps>(({ style, ...props }, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundWeaker"
      borderRadius="borderRadius30"
      boxShadow="shadowElevation10"
      maxWidth="size30"
      minWidth="size20"
      zIndex="zIndex20"
      paddingY="space30"
      _focus={{ outline: "none" }}
      style={style}
      ref={ref}
    >
      <Box
        // scroll at roughly 10 items
        maxHeight="size50"
        overflowY="auto"
      >
        {props.children}
      </Box>
    </Box>
  );
});

StyledMenu.displayName = "StyledMenu";

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ element = "MENU", ...props }, ref) => {
  return <MenuPrimitive {...props} element={element} as={StyledMenu} ref={ref} />;
});

Menu.displayName = "Menu";

export { Menu };
