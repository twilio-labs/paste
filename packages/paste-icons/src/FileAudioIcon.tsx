/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface FileAudioIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FileAudioIcon = React.forwardRef<HTMLElement, FileAudioIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `FileAudioIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[FileAudioIcon]: Missing a title for non-decorative icon.');
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 16.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h9.879a.5.5 0 01.353.146l3.122 3.122A.5.5 0 0117 6.62v9.88zM2 3.5A1.5 1.5 0 013.5 2h9.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0118 6.622V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13zm7.81 2.772a.717.717 0 01.761-.138c.291.12.428.4.429.651v6.983a.702.702 0 01-.429.652.717.717 0 01-.76-.138l-2.559-2.278H6.113c-.34 0-.623-.169-.809-.38A1.216 1.216 0 015 10.828V9.602c0-.682.57-1.052 1.113-1.052h1.14L9.81 6.272zm.19 1.17L7.775 9.423a.5.5 0 01-.332.127h-1.33c-.067 0-.1.02-.107.028a.022.022 0 00-.003.003L6 9.585a.08.08 0 000 .017v1.227c0 .038.018.092.055.134a.15.15 0 00.044.036c.01.005.014.005.014.005h1.33a.5.5 0 01.332.126L10 13.112v-5.67zm3.096.764a.5.5 0 01.698-.11c.678.493 1.066 1.175 1.065 1.905 0 .731-.39 1.412-1.065 1.904a.5.5 0 01-.588-.81c.468-.34.653-.741.653-1.094 0-.353-.184-.755-.653-1.097a.5.5 0 01-.11-.698z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

FileAudioIcon.displayName = 'FileAudioIcon';
export { FileAudioIcon };
