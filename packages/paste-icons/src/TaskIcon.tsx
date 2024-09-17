import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TaskIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TaskIcon = React.forwardRef<HTMLElement, TaskIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TaskIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TaskIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M13.487 8.146a.5.5 0 010 .708L9.51 12.83a1.085 1.085 0 01-1.53 0l-1.334-1.334a.5.5 0 11.708-.707l1.332 1.334a.084.084 0 00.118 0l3.976-3.977a.5.5 0 01.707 0zM10 4.5A.75.75 0 1010 3a.75.75 0 000 1.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.867 1.94A2.923 2.923 0 0110 1c.806 0 1.573.342 2.133.94a3.23 3.23 0 01.83 1.727H15c.409 0 .793.173 1.072.47.277.296.428.69.428 1.096v11.2c0 .406-.15.8-.428 1.097A1.47 1.47 0 0115 18H5a1.47 1.47 0 01-1.072-.47 1.604 1.604 0 01-.428-1.097v-11.2c0-.405.15-.8.428-1.096A1.47 1.47 0 015 3.667h2.038a3.233 3.233 0 01.83-1.728zM10 2c-.52 0-1.025.22-1.403.623A2.26 2.26 0 008 4.167a.5.5 0 01-.5.5H5a.47.47 0 00-.342.154.604.604 0 00-.158.412v11.2c0 .16.06.308.158.413A.47.47 0 005 17h10a.47.47 0 00.342-.154.604.604 0 00.158-.413v-11.2c0-.16-.06-.308-.158-.412A.47.47 0 0015 4.667h-2.5a.5.5 0 01-.5-.5 2.26 2.26 0 00-.597-1.544A1.924 1.924 0 0010 2z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TaskIcon.displayName = "TaskIcon";
export { TaskIcon };
