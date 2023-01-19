/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface OutdatedIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const OutdatedIcon = React.forwardRef<HTMLElement, OutdatedIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `OutdatedIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[OutdatedIcon]: Missing a title for non-decorative icon.');
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
            d="M10.013 3.235a7.001 7.001 0 11-4.916 10.694.5.5 0 11.843-.538A6.001 6.001 0 105 10.165v1.502a.5.5 0 11-1 0v-1.502a7.002 7.002 0 016.013-6.93z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.146 9.311a.5.5 0 01.708 0L4.5 10.958 6.146 9.31a.5.5 0 01.708.707l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 010-.707zM11.05 13.2a.25.25 0 100-.5v-.5a.75.75 0 000 1.5v-.5z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.05 12.2a.75.75 0 110 1.5v-.5a.25.25 0 010-.5v-.5zm0-6a.5.5 0 01.5.5v4a.5.5 0 11-1 0v-4a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

OutdatedIcon.displayName = 'OutdatedIcon';
export {OutdatedIcon};
