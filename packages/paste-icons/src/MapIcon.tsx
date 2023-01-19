/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface MapIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MapIcon = React.forwardRef<HTMLElement, MapIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `MapIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[MapIcon]: Missing a title for non-decorative icon.');
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
            d="M12.368 3.325c-.11.01-.22.033-.32.065-.023.007-1.02.404-2.218.882-1.197.479-2.194.875-2.217.881a.583.583 0 01-.23 0c-.022-.006-.928-.367-2.014-.801a518.973 518.973 0 00-2.026-.81.957.957 0 00-.348-.058.982.982 0 00-.89.554.99.99 0 00-.087.246l-.015.062-.002 4.896c-.001 3.604 0 4.915.006 4.97.018.19.061.342.146.514.148.302.392.545.688.688.077.037 4.138 1.662 4.212 1.685.275.087.583.09.865.009.046-.014.925-.362 2.252-.893a282.35 282.35 0 012.216-.88.593.593 0 01.236.002c.025.007.814.32 1.753.695 2.276.91 2.306.921 2.38.94.102.025.17.032.283.028a.954.954 0 00.522-.169c.086-.057.21-.18.266-.265.09-.135.143-.274.168-.441.005-.035.007-1.628.009-5.891 0-3.214 0-5.412-.003-4.884-.002.569-.006.938-.009.906a1.506 1.506 0 00-.816-1.175c-.1-.05-4.15-1.67-4.245-1.698a1.608 1.608 0 00-.242-.052 2.054 2.054 0 00-.32-.006zM2.003 9.286c0 2.693 0 3.794.002 2.446a4488.917 4488.917 0 00-.002-2.446zM3 9.31v4.828l.015.05a.504.504 0 00.267.326c.027.013 3.299 1.324 3.685 1.477l.03.012-.001-4.96-.002-4.961-1.974-.79-1.999-.8-.024-.009L3 9.31zm6.999-4.028l-1.995.798v9.923l.02-.008 1.997-.799 1.975-.79V4.484l-1.997.798zM13 9.447c0 3.176.003 4.963.007 4.963.003 0 .9.357 1.993.793 1.093.437 1.99.794 1.994.794.005 0 .006-1.591.005-4.824l-.002-4.824-.014-.05a.513.513 0 00-.25-.317 692.053 692.053 0 00-3.702-1.487l-.03-.012v4.964z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

MapIcon.displayName = 'MapIcon';
export {MapIcon};
