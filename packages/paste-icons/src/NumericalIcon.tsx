/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface NumericalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const NumericalIcon = React.forwardRef<HTMLElement, NumericalIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `NumericalIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[NumericalIcon]: Missing a title for non-decorative icon.');
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
            d="M4.333 6.5a.5.5 0 01.5.5v4.833h.834a.5.5 0 110 1H3a.5.5 0 010-1h.833V8.778a1.39 1.39 0 01-.389.055H3a.5.5 0 110-1h.444a.389.389 0 00.39-.389V7a.5.5 0 01.5-.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 6.5c-.767 0-1.543.481-1.805 1.222a.5.5 0 00.726.597l1.179.97-1.024.597c-.563.329-.91.932-.91 1.584v.863a.5.5 0 00.5.5h2.667a.5.5 0 100-1H9.166v-.364c0-.296.158-.57.414-.72l1.343-.783c.564-.329.91-.932.91-1.584v-.049c0-1.012-.82-1.833-1.833-1.833zM8.92 8.32a.498.498 0 00.217-.264c.104-.295.467-.556.862-.556.46 0 .833.373.833.833v.05c0 .296-.157.57-.413.72l-.32.186-1.179-.97z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M15.666 6.5a1.61 1.61 0 00-1.289.644.5.5 0 10.8.6.611.611 0 011.1.366v.179a.656.656 0 01-.655.655.5.5 0 100 1h.044c.46 0 .834.373.834.834V11c0 .46-.373.833-.834.833-.394 0-.757-.26-.862-.555a.5.5 0 10-.943.333c.262.74 1.038 1.222 1.805 1.222 1.013 0 1.834-.82 1.834-1.833v-.222a1.83 1.83 0 00-.64-1.391 1.65 1.65 0 00.417-1.098V8.11a1.61 1.61 0 00-1.61-1.611z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

NumericalIcon.displayName = 'NumericalIcon';
export {NumericalIcon};
