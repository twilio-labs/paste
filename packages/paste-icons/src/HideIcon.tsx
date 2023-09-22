/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface HideIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HideIcon = React.forwardRef<HTMLElement, HideIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `HideIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[HideIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.554 2.423a.561.561 0 00-.795-.016L2.697 15.906a.562.562 0 10.78.811l14.06-13.499a.564.564 0 00.017-.795zm.978 6.487a16.053 16.053 0 00-2.39-2.142.562.562 0 10-.663.909 14.916 14.916 0 012.22 1.989.684.684 0 01.001.915c-1.805 1.987-4.769 4.088-7.705 4.043a7.328 7.328 0 01-2.106-.311.562.562 0 00-.333 1.074c.767.239 1.566.36 2.37.362l.18.001c3.254 0 6.479-2.27 8.429-4.414a1.808 1.808 0 00-.003-2.426zM4.16 13.215a.563.563 0 01-.671-.013 16.274 16.274 0 01-2.02-1.865 1.807 1.807 0 01-.003-2.425c1.95-2.144 5.175-4.413 8.427-4.413h.197a7.73 7.73 0 011.854.23.563.563 0 11-.27 1.09 6.49 6.49 0 00-1.669-.194C7.07 5.588 4.105 7.681 2.3 9.667a.683.683 0 00.002.914c.575.63 1.203 1.209 1.877 1.732a.562.562 0 01-.019.902zm8.651-3.654a.563.563 0 00-.562.563 2.253 2.253 0 01-2.25 2.25.563.563 0 000 1.125 3.38 3.38 0 003.375-3.376.562.562 0 00-.563-.562zm-5.409 1.083a.562.562 0 01-.778-.52A3.379 3.379 0 019.998 6.75a.562.562 0 010 1.125 2.253 2.253 0 00-2.249 2.25.563.563 0 01-.347.52z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

HideIcon.displayName = 'HideIcon';
export { HideIcon };
