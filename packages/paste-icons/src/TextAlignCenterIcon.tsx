/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface TextAlignCenterIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TextAlignCenterIcon = React.forwardRef<HTMLElement, TextAlignCenterIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `TextAlignCenterIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TextAlignCenterIcon]: Missing a title for non-decorative icon.');
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
            d="M4 5.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 6a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm1 3a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3-6a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

TextAlignCenterIcon.displayName = 'TextAlignCenterIcon';
export {TextAlignCenterIcon};
