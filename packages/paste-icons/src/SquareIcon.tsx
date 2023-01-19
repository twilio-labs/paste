/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface SquareIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SquareIcon = React.forwardRef<HTMLElement, SquareIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `SquareIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SquareIcon]: Missing a title for non-decorative icon.');
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
            d="M3.333 3.167a.167.167 0 00-.166.166v13.334c0 .092.074.166.166.166h13.334a.167.167 0 00.166-.166V3.333a.167.167 0 00-.166-.166H3.333zm-1.166.166c0-.644.522-1.166 1.166-1.166h13.334c.644 0 1.166.522 1.166 1.166v13.334c0 .644-.522 1.166-1.166 1.166H3.333a1.167 1.167 0 01-1.166-1.166V3.333z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

SquareIcon.displayName = 'SquareIcon';
export {SquareIcon};
