"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ShrinkIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ShrinkIcon = React.forwardRef<HTMLElement, ShrinkIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ShrinkIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ShrinkIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.063 11.429c.28 0 .508.227.508.507v2.423a.507.507 0 01-.866.358l-.67-.674a.127.127 0 00-.18 0l-1.733 1.731a.635.635 0 01-.896-.897l1.73-1.73c.05-.05.05-.13 0-.18l-.673-.672a.507.507 0 01.36-.866zm6.296 0a.507.507 0 01.358.866l-.673.67c-.05.05-.05.13 0 .18l1.73 1.732a.634.634 0 01-.896.897l-1.73-1.73a.127.127 0 00-.18 0l-.673.672a.507.507 0 01-.866-.359v-2.42c0-.281.228-.508.508-.508zm.519-7.204a.635.635 0 01.896.897l-1.73 1.73c-.05.05-.05.13 0 .18l.673.672a.507.507 0 01-.36.866h-2.42a.507.507 0 01-.508-.507V5.64a.507.507 0 01.866-.358l.67.673c.05.05.13.05.18 0zm-10.652 0a.634.634 0 01.896 0l1.73 1.73c.05.05.13.05.18 0l.673-.672a.507.507 0 01.866.36V5.64v2.42c0 .281-.228.508-.508.508H5.641a.507.507 0 01-.358-.866l.673-.67c.05-.05.05-.13 0-.179l-1.73-1.733a.634.634 0 010-.897z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ShrinkIcon.displayName = "ShrinkIcon";
export { ShrinkIcon };
