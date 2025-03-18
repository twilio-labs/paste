"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface DatabaseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DatabaseIcon = React.forwardRef<HTMLElement, DatabaseIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DatabaseIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DatabaseIcon]: Missing a title for non-decorative icon.");
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
            d="M4.511 2.915c1.48-.592 3.455-.914 5.489-.914s4.008.322 5.489.914c.74.296 1.352.658 1.787 1.078.437.421.724.933.724 1.508V14.5c0 .596-.304 1.113-.746 1.53-.44.418-1.052.77-1.765 1.055-1.43.572-3.37.915-5.489.915-2.118 0-4.06-.343-5.489-.915-.713-.285-1.324-.637-1.765-1.054C2.304 15.613 2 15.096 2 14.5v-9c0-.574.287-1.086.724-1.507.435-.42 1.047-.782 1.787-1.078zM3 10c0 .232.116.504.433.804.318.301.806.595 1.45.853 1.284.514 3.093.843 5.117.843s3.833-.329 5.118-.843c.643-.257 1.13-.551 1.449-.852.317-.3.433-.572.433-.805V7.25c-.404.318-.916.598-1.511.836-1.48.593-3.455.915-5.489.915s-4.008-.322-5.489-.915C3.916 7.848 3.404 7.568 3 7.25V10zm14 1.75c-.41.323-.926.602-1.511.836-1.43.572-3.37.914-5.489.914-2.118 0-4.06-.343-5.489-.915-.585-.234-1.101-.513-1.511-.835v2.75c0 .232.116.504.433.804.318.301.806.595 1.45.853C6.166 16.671 7.975 17 10 17s3.833-.33 5.117-.843c.644-.258 1.132-.552 1.45-.853.317-.3.433-.572.433-.804v-2.75zM3.418 6.289c-.31-.3-.418-.568-.418-.788 0-.22.108-.489.418-.789.312-.3.798-.602 1.464-.868C6.215 3.31 8.056 3 10 3c1.944 0 3.786.31 5.118.843.666.266 1.152.567 1.464.868.31.3.418.568.418.789 0 .22-.108.488-.418.788-.312.301-.798.602-1.464.869C13.786 7.69 11.944 8 10 8c-1.944 0-3.785-.31-5.118-.843-.666-.267-1.152-.568-1.464-.869z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DatabaseIcon.displayName = "DatabaseIcon";
export { DatabaseIcon };
