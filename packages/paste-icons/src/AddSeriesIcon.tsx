/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface AddSeriesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AddSeriesIcon = React.forwardRef<HTMLElement, AddSeriesIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `AddSeriesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[AddSeriesIcon]: Missing a title for non-decorative icon.');
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
            d="M3 2.5a.5.5 0 00-1 0v15a.5.5 0 00.5.5h15a.5.5 0 000-1H3v-1.19l2.459-1.23a1.5 1.5 0 002.453-.575l3.645.405a1.501 1.501 0 10.03-.915l-3.644-.405a1.5 1.5 0 00-2.932.595L3 14.691V2.5zm9.646 11.146a.5.5 0 11.708.708.5.5 0 01-.708-.708zM6.5 13a.5.5 0 100 1 .5.5 0 000-1z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M13 4.5a.5.5 0 01.5.5v1.5H15a.5.5 0 010 1h-1.5V9a.5.5 0 01-1 0V7.5H11a.5.5 0 010-1h1.5V5a.5.5 0 01.5-.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM9.5 7a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

AddSeriesIcon.displayName = 'AddSeriesIcon';
export {AddSeriesIcon};
