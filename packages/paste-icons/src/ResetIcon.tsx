/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ResetIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ResetIcon = React.forwardRef<HTMLElement, ResetIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ResetIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ResetIcon]: Missing a title for non-decorative icon.');
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
            d="M14.796 4.282A7.001 7.001 0 004 10.165v.293L2.854 9.31a.5.5 0 00-.708.707l1.975 1.975a.499.499 0 00.758 0l1.975-1.975a.5.5 0 10-.708-.707L5 10.458v-.293a6.002 6.002 0 11.94 3.226.5.5 0 10-.843.538 7.001 7.001 0 109.699-9.647z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ResetIcon.displayName = 'ResetIcon';
export {ResetIcon};
