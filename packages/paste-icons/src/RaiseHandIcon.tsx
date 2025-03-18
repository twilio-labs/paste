"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface RaiseHandIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RaiseHandIcon = React.forwardRef<HTMLElement, RaiseHandIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `RaiseHandIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[RaiseHandIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M8.067 8.3a.5.5 0 101 0h-1zm.5-4.5h-.5.5zM7.325 2.55l.003-.5h-.003v.5zm-1.25 9.375l-.312.39a.5.5 0 00.812-.39h-.5zM4.042 10.3l-.314.39h.001l.313-.39zm-1.875.292l.417.276-.417-.276zm-.214.708h.5-.5zm.214.708l-.417.276.001.003.416-.279zm1.2 1.792l.416-.277-.001-.001-.415.278zm1.417 3.027a.5.5 0 00.832-.554l-.832.554zM11.067 2.55h-.5.5zM9.825 1.3l-.003.5.003-.5zM8.567 2.55h.5-.5zm2 5.45a.5.5 0 101 0h-1zm2.975-4.2h-.5.5zm-.364-.881l-.354.352.354-.352zM12.3 2.55l.003-.5H12.3v.5zm-.884.366l.354.354-.354-.354zM13.042 8.7a.5.5 0 001 0h-1zm-2.374-5.532a.5.5 0 10.933.361l-.933-.36zM15.5 5.1a.5.5 0 101 0h-1zm.137-.881l-.355.352.355-.352zm-.88-.369l.004-.5h-.003v.5zm-.883.366l-.354-.354.354.354zm-.314.525l-.479-.143a.5.5 0 00.953.304l-.474-.16zM15.5 5v9h1V5h-1zm0 9c0 1.343-.55 2.32-1.425 2.975-.89.668-2.15 1.025-3.575 1.025v1c1.576 0 3.066-.393 4.175-1.225C15.801 16.931 16.5 15.657 16.5 14h-1zm-9.146 3.146c-.954-.953-1.068-1.368-1.438-1.923l-.832.554c.297.445.516 1.03 1.562 2.077l.708-.708zM10.5 18.5V18h-.035c-.024 0-.06 0-.107-.002a16.49 16.49 0 01-1.67-.12 8.943 8.943 0 01-1.42-.279c-.445-.134-.754-.292-.914-.453l-.708.708c.34.339.844.556 1.335.703a9.93 9.93 0 001.582.314 17.546 17.546 0 001.893.129h.043l.001-.5zM9.067 8.3V3.8h-1v4.5h1zm0-4.5a1.75 1.75 0 00-.509-1.233l-.71.704a.75.75 0 01.219.529h1zm-.509-1.233a1.75 1.75 0 00-1.23-.517l-.006 1a.75.75 0 01.527.221l.71-.704zM7.325 2.05c-.464 0-.91.184-1.238.513l.708.707a.75.75 0 01.53-.22v-1zm-1.238.513A1.75 1.75 0 005.575 3.8h1a.75.75 0 01.22-.53l-.708-.707zM5.575 3.8v8.125h1V3.8h-1zm.812 7.734L4.354 9.91l-.625.782 2.034 1.625.624-.782zM4.355 9.911a1.783 1.783 0 00-.657-.334l-.258.966a.784.784 0 01.288.147l.627-.78zm-.657-.334a1.783 1.783 0 00-.735-.04l.153.989a.784.784 0 01.324.017l.258-.966zm-.735-.04c-.245.039-.48.128-.689.262l.54.841a.784.784 0 01.302-.114l-.153-.988zm-.689.262c-.209.134-.388.31-.524.517l.834.551a.784.784 0 01.23-.227l-.54-.841zm-.524.517a1.783 1.783 0 00-.297.984h1c0-.154.046-.304.13-.432l-.833-.552zm-.297.984c0 .35.103.692.297.984l.833-.552a.784.784 0 01-.13-.432h-1zm.298.987l1.2 1.791.831-.556-1.2-1.792-.83.557zm1.2 1.79l1.833 2.75.832-.554-1.833-2.75-.832.554zM11.567 2.55a1.75 1.75 0 00-.509-1.233l-.71.704a.75.75 0 01.219.529h1zm-.509-1.233A1.75 1.75 0 009.828.8l-.006 1a.75.75 0 01.527.221l.71-.704zM9.828.8a1.75 1.75 0 00-.673.13l.378.926a.75.75 0 01.289-.056l.006-1zm-.673.13a1.75 1.75 0 00-.572.378l.705.71a.75.75 0 01.245-.162L9.155.93zm-.572.378a1.75 1.75 0 00-.382.57l.923.384a.75.75 0 01.164-.244l-.705-.71zm-.382.57a1.75 1.75 0 00-.134.672h1a.75.75 0 01.057-.288l-.923-.384zm-.134.672V3.8h1V2.55h-1zm5.975 1.25a1.75 1.75 0 00-.509-1.233l-.71.704c.14.14.219.33.219.529h1zm-.509-1.233a1.75 1.75 0 00-1.23-.517l-.006 1a.75.75 0 01.527.221l.71-.704zM12.3 2.05c-.464 0-.91.184-1.238.513l.708.707a.75.75 0 01.53-.22v-1zm.742 1.75v4.9h1V3.8h-1zm-1.98-1.237a1.75 1.75 0 00-.394.605l.933.361a.75.75 0 01.169-.26l-.707-.706zM16.5 5.1a1.75 1.75 0 00-.509-1.233l-.709.704a.75.75 0 01.218.529h1zm-.509-1.233a1.75 1.75 0 00-1.23-.517l-.006 1a.75.75 0 01.527.221l.71-.704zm-1.233-.517c-.464 0-.91.184-1.238.512l.707.708a.749.749 0 01.53-.22v-1zm-1.238.512a1.748 1.748 0 00-.4.62l.936.353a.75.75 0 01.171-.265l-.707-.708zm-.4.62a1.701 1.701 0 00-.039.116l.958.287a.79.79 0 01.017-.05l-.935-.354zm.914.42l.028-.084-.947-.32-.029.083.948.32zM11.567 8V2.55h-1V8h1z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

RaiseHandIcon.displayName = "RaiseHandIcon";
export { RaiseHandIcon };
