/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface RCSCapableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RCSCapableIcon = React.forwardRef<HTMLElement, RCSCapableIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `RCSCapableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[RCSCapableIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          height="100%"
          width="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M5.318 3.938a.364.364 0 01.464-.135l.037.02 2.912 1.824a.363.363 0 01.035.589l-.035.024-2.912 1.826a.365.365 0 01-.555-.264l-.002-.043V4.131c0-.069.02-.135.056-.193z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.628 2.629A2.14 2.14 0 013.143 2h7.568a2.141 2.141 0 012.143 2.146v3.617A2.148 2.148 0 0110.71 9.91H8.568v1.964a.502.502 0 01-.856.355l-2.315-2.32H3.143A2.14 2.14 0 011 7.764V4.146c0-.569.226-1.115.628-1.517zm1.515.375a1.139 1.139 0 00-1.14 1.142v3.617a1.143 1.143 0 001.14 1.142h2.462c.133 0 .26.053.354.148l1.606 1.608V9.408c0-.278.225-.503.502-.503h2.644a1.14 1.14 0 001.14-1.141V4.146a1.143 1.143 0 00-1.14-1.142H3.143z"
          />
          <path
            fill="currentColor"
            d="M12.384 15.088a.673.673 0 100-1.346.673.673 0 000 1.346zm1.888 0a.673.673 0 10-.001-1.346.673.673 0 00.001 1.346zm1.888 0a.673.673 0 10-.002-1.346.673.673 0 00.002 1.346z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.585 12.878c0-.832.674-1.506 1.504-1.506h6.407c.83 0 1.504.674 1.504 1.506v2.965c0 .832-.673 1.507-1.504 1.507H15.97l-2.601 1.563a.602.602 0 01-.911-.517V17.35h-1.369c-.83 0-1.504-.675-1.504-1.507v-2.965zm1.504-.502a.502.502 0 00-.501.502v2.965c0 .277.224.502.501.502h1.62c.415 0 .751.338.751.754v.588l2.054-1.234a.75.75 0 01.387-.108h1.595a.502.502 0 00.501-.502v-2.965a.502.502 0 00-.501-.502h-6.407z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

RCSCapableIcon.displayName = 'RCSCapableIcon';
export {RCSCapableIcon};
