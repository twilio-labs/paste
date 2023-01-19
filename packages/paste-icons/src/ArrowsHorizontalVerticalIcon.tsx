/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowsHorizontalVerticalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowsHorizontalVerticalIcon = React.forwardRef<HTMLElement, ArrowsHorizontalVerticalIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ArrowsHorizontalVerticalIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ArrowsHorizontalVerticalIcon]: Missing a title for non-decorative icon.');
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
            d="M12.146 5.352a.5.5 0 00.708-.707l-2.5-2.5A.5.5 0 0010.003 2h-.006a.498.498 0 00-.35.146l-2.5 2.5a.5.5 0 10.707.707L9.5 3.706v5.793H3.707l1.647-1.647a.5.5 0 10-.708-.707l-2.5 2.5a.498.498 0 00-.146.35v.007a.497.497 0 00.146.35l2.5 2.5a.5.5 0 10.708-.707L3.707 10.5H9.5v5.793l-1.646-1.647a.5.5 0 10-.708.707l2.5 2.5a.499.499 0 00.708 0l2.5-2.5a.5.5 0 00-.708-.707L10.5 16.292v-5.793h5.793l-1.647 1.646a.5.5 0 00.708.707l2.5-2.5a.499.499 0 000-.707l-2.5-2.5a.5.5 0 00-.708.707L16.293 9.5H10.5V3.706l1.646 1.646z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ArrowsHorizontalVerticalIcon.displayName = 'ArrowsHorizontalVerticalIcon';
export {ArrowsHorizontalVerticalIcon};
