/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface LayoutLinearFlowIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LayoutLinearFlowIcon = React.forwardRef<HTMLElement, LayoutLinearFlowIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `LayoutLinearFlowIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[LayoutLinearFlowIcon]: Missing a title for non-decorative icon.');
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
            d="M8.813 11.896a.5.5 0 10.707.707l2.104-2.103h1.932a2.25 2.25 0 100-1H11.79L9.52 7.23a.5.5 0 00-.707.707L10.376 9.5H6.444a2.25 2.25 0 100 1h3.766l-1.397 1.396zM3 10a1.25 1.25 0 112.5 0A1.25 1.25 0 013 10zm11.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

LayoutLinearFlowIcon.displayName = 'LayoutLinearFlowIcon';
export {LayoutLinearFlowIcon};
