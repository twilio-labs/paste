import type { BoxElementProps } from "@twilio-paste/box";
import { ChevronRightIcon } from "@twilio-paste/icons/esm/ChevronRightIcon";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import type { MenuPrimitiveButtonProps } from "@twilio-paste/menu-primitive";
import { MenuPrimitiveButton } from "@twilio-paste/menu-primitive";
import * as React from "react";

import { StyledMenuItem } from "./MenuItem.styles";

export type SubMenuButtonProps = MenuPrimitiveButtonProps & { element?: BoxElementProps["element"] };

const SubMenuButton = React.forwardRef<HTMLButtonElement, SubMenuButtonProps>(
  ({ element = "SUBMENU_BUTTON", ...props }, ref) => {
    // MenuPrimitiveButton from reakit types `as` as HTML element names, but accepts components. any prevents type errors
    return (
      <MenuPrimitiveButton {...props} as={StyledMenuItem as any} element={element} ref={ref}>
        <MediaObject as="span" verticalAlign="center" element={`${element}_MEDIA_OBJECT`}>
          {props.children && (
            <MediaBody as="span" element={`${element}_MEDIA_BODY`}>
              {props.children}
            </MediaBody>
          )}
          <MediaFigure as="span" align="end" spacing="space20" element={`${element}_MEDIA_FIGURE`}>
            <ChevronRightIcon decorative size="sizeIcon30" element={`${element}_ICON`} />
          </MediaFigure>
        </MediaObject>
      </MenuPrimitiveButton>
    );
  },
);
SubMenuButton.displayName = "SubMenuButton";
export { SubMenuButton };
