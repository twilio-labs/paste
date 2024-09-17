import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UsersIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UsersIcon = React.forwardRef<HTMLElement, UsersIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UsersIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UsersIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.856 3C4.959 3 3.421 4.609 3.421 6.593s1.538 3.592 3.435 3.592 3.435-1.608 3.435-3.592S8.753 3 6.856 3zm0 .974c1.383 0 2.504 1.172 2.504 2.619 0 1.446-1.121 2.619-2.504 2.619s-2.504-1.173-2.504-2.62c0-1.446 1.121-2.618 2.504-2.618zm8.447-.175c-1.45-1.224-3.567-1.016-4.774.469a.502.502 0 00.054.686.45.45 0 00.656-.056c.879-1.082 2.423-1.234 3.48-.342 1.056.892 1.24 2.503.414 3.63-.825 1.128-2.36 1.361-3.458.526a2.634 2.634 0 01-.295-.264.451.451 0 00-.658 0 .503.503 0 00.001.689c.125.13.26.252.402.361 1.51 1.147 3.614.827 4.747-.72 1.133-1.546.88-3.756-.57-4.98zM1.5 16.513c0-3.094 2.398-5.602 5.356-5.602 2.958 0 5.356 2.508 5.356 5.602a.476.476 0 01-.465.487H1.965a.476.476 0 01-.465-.487zm9.73-.705c-.313-2.145-2.034-3.806-4.146-3.918l-.228-.006c-2.215 0-4.05 1.702-4.374 3.924l-.028.218h8.803l-.027-.218zm5.114-3.786a5.17 5.17 0 00-4.73-.88.49.49 0 00-.314.606.462.462 0 00.58.328 4.272 4.272 0 013.908.727l.204.17a4.697 4.697 0 011.546 2.997l.005.056h-4.05l-.094.01a.482.482 0 00-.371.477c0 .269.208.487.465.487h4.542l.093-.01a.482.482 0 00.372-.477c-.001-1.769-.8-3.433-2.156-4.49z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UsersIcon.displayName = "UsersIcon";
export { UsersIcon };
