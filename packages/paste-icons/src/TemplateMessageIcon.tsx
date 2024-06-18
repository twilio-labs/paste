import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TemplateMessageIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TemplateMessageIcon = React.forwardRef<HTMLElement, TemplateMessageIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TemplateMessageIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TemplateMessageIcon]: Missing a title for non-decorative icon.");
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
            fillRule="evenodd"
            d="M3 4.518c0-.28.224-.506.5-.506h9.842c.276 0 .5.227.5.506V8.3c0 .28.224.506.5.506s.5-.227.5-.506V4.518A1.51 1.51 0 0 0 13.342 3H3.5C2.672 3 2 3.68 2 4.518v5.167a1.51 1.51 0 0 0 1.5 1.518h.579c.276 0 .5-.227.5-.506a.503.503 0 0 0-.5-.506H3.5a.503.503 0 0 1-.5-.506V4.518Zm3.158 6.392c0-.28.224-.506.5-.506h.984c.276 0 .5-.227.5-.506a.503.503 0 0 0-.5-.506h-.984c-.829 0-1.5.68-1.5 1.518v.916c0 .28.224.506.5.506s.5-.226.5-.506v-.916Zm4.437-1.518c-.276 0-.5.226-.5.506s.224.506.5.506h1.968c.276 0 .5-.227.5-.506a.503.503 0 0 0-.5-.506h-1.968Zm4.92 0c-.275 0-.5.226-.5.506s.225.506.5.506h.985c.276 0 .5.226.5.506v.873c0 .28.224.507.5.507s.5-.227.5-.506v-.874a1.51 1.51 0 0 0-1.5-1.518h-.984ZM18 14.404a.503.503 0 0 0-.5-.506c-.276 0-.5.227-.5.506v.874c0 .28-.224.506-.5.506h-.905c-.276 0-.5.226-.5.506s.224.506.5.506h.905c.828 0 1.5-.68 1.5-1.518v-.874Zm-11.842.17a.503.503 0 0 0-.5-.505c-.276 0-.5.226-.5.506v.916c0 .72.577 1.305 1.29 1.305.276 0 .5-.227.5-.506a.503.503 0 0 0-.5-.506.291.291 0 0 1-.29-.293v-.916Zm5.816 1.21c-.277 0-.5.226-.5.506s.223.506.5.506h1.974c.275 0 .5-.227.5-.506a.503.503 0 0 0-.5-.506h-1.975ZM6.053 7.1a.794.794 0 0 1-.79.8.794.794 0 0 1-.79-.8c0-.44.354-.799.79-.799.436 0 .79.358.79.8Zm2.368.8c.436 0 .79-.358.79-.8a.794.794 0 0 0-.79-.799.794.794 0 0 0-.79.8c0 .44.354.798.79.798Zm3.947-.8a.794.794 0 0 1-.79.8.794.794 0 0 1-.788-.8c0-.44.353-.799.789-.799.436 0 .79.358.79.8Zm-4.342 9.482c.276 0 .5.226.5.506v.704l.23-.14.987-.599a.497.497 0 0 1 .686.174.51.51 0 0 1-.172.694l-.987.6-.608.369a.75.75 0 0 1-1.136-.651v-1.151c0-.28.224-.506.5-.506Z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TemplateMessageIcon.displayName = "TemplateMessageIcon";
export { TemplateMessageIcon };
