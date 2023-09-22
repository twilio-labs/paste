import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface VolumeOnIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VolumeOnIcon = React.forwardRef<HTMLElement, VolumeOnIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `VolumeOnIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[VolumeOnIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.13 4.223a.806.806 0 01.86-.164c.295.12.478.403.479.712v10.46c0 .309-.184.591-.479.71a.8.8 0 01-.847-.156L5.266 12.33H3.411c-.735 0-1.34-.63-1.405-1.35L2 10.854V9.007c0-.763.625-1.292 1.411-1.292h1.854zm6.523.446A7.1 7.1 0 0118 9.93a7.1 7.1 0 01-2.347 5.261.477.477 0 01-.665-.026.455.455 0 01.027-.652 6.186 6.186 0 002.044-4.583c0-1.74-.741-3.402-2.044-4.583a.455.455 0 01-.027-.652.477.477 0 01.665-.026zm-6.125.448l-3.759 3.4a.476.476 0 01-.319.121H3.411c-.294 0-.47.149-.47.37v1.845c0 .285.24.554.47.554h2.04c.117 0 .231.043.318.122l3.759 3.398v-9.81zm4.227.754a5.064 5.064 0 012.054 4.06c0 1.593-.76 3.094-2.054 4.058a.477.477 0 01-.659-.088.456.456 0 01.09-.647 4.147 4.147 0 001.682-3.324 4.147 4.147 0 00-1.682-3.324.456.456 0 01-.09-.646.477.477 0 01.66-.089zm-1.598 1.533c1.936 1.38 1.934 3.674 0 5.053a.477.477 0 01-.657-.102.456.456 0 01.104-.645c1.418-1.01 1.419-2.548 0-3.56a.456.456 0 01-.104-.645.477.477 0 01.657-.101z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

VolumeOnIcon.displayName = 'VolumeOnIcon';
export { VolumeOnIcon };
