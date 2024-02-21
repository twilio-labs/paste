/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ArtificialIntelligenceIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArtificialIntelligenceIcon = React.forwardRef<HTMLElement, ArtificialIntelligenceIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ArtificialIntelligenceIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ArtificialIntelligenceIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.699 2.447c-.01 2.674-1.297 3.917-3.962 3.955-.595.008-.588.899.007.898 2.735-.004 3.928 1.287 3.955 3.957.005.58.868.598.897.017.135-2.699 1.396-3.984 3.953-3.974.594.002.605-.885.012-.898-2.739-.062-3.974-1.345-3.964-3.951.002-.599-.896-.602-.898-.004zm.444 2.432l.06.131c.394.81 1.015 1.41 1.864 1.794l.105.045-.035.016c-.837.387-1.463 1.015-1.873 1.872l-.078.17-.017-.044c-.37-.89-.98-1.547-1.838-1.958l-.155-.07c.837-.37 1.46-.95 1.866-1.743l.101-.213z"
          />
          <path
            fill="currentColor"
            d="M4.5 10.132a5.87 5.87 0 015.871-5.868.5.5 0 100-1A6.87 6.87 0 003.5 10.132a6.87 6.87 0 004.417 6.417.5.5 0 00.357-.934A5.87 5.87 0 014.5 10.132zm8.368 5.358a.5.5 0 01.202.96 6.851 6.851 0 01-2.67.55h-.029a.5.5 0 110-1h.024a5.85 5.85 0 002.282-.47.499.499 0 01.191-.04zm3.657-3.628a.5.5 0 01.297.642 6.863 6.863 0 01-1.187 2.043.5.5 0 01-.766-.643 5.86 5.86 0 001.014-1.745.5.5 0 01.642-.297z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ArtificialIntelligenceIcon.displayName = 'ArtificialIntelligenceIcon';
export {ArtificialIntelligenceIcon};
