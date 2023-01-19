/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface TriangleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TriangleIcon = React.forwardRef<HTMLElement, TriangleIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `TriangleIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TriangleIcon]: Missing a title for non-decorative icon.');
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
            d="M9.837 2.007c-.22.022-.426.083-.617.183a1.699 1.699 0 00-.767.799c-.075.15-6.244 12.717-6.296 12.825-.077.16-.117.29-.145.468a2.51 2.51 0 000 .403 1.526 1.526 0 00.554.983c.236.185.514.298.803.326.044.004 2.285.006 6.637.006 5.768 0 6.58-.001 6.651-.01a1.51 1.51 0 001.19-.844c.083-.17.133-.343.145-.508a.552.552 0 00.015-.162c0-.07-.003-.107-.007-.105-.004.003-.006-.006-.006-.022 0-.053-.022-.17-.05-.272a1.587 1.587 0 00-.1-.263c-.053-.108-6.222-12.675-6.297-12.825a1.708 1.708 0 00-1.71-.982zm.096.998a.71.71 0 00-.512.301c-.019.028-1.352 2.736-3.19 6.48l-3.178 6.476a.503.503 0 000 .442.51.51 0 00.342.28l.055.014h13.1l.055-.014a.6.6 0 00.21-.105.516.516 0 00.129-.623l-3.178-6.477c-1.83-3.726-3.168-6.445-3.187-6.473a.709.709 0 00-.646-.301zm-7.93 13.478c0 .062 0 .087.002.056v-.112c-.001-.03-.002-.005-.002.056z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

TriangleIcon.displayName = 'TriangleIcon';
export {TriangleIcon};
