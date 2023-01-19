/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface HammerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HammerIcon = React.forwardRef<HTMLElement, HammerIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `HammerIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[HammerIcon]: Missing a title for non-decorative icon.');
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
            d="M6.392 3.476a5.38 5.38 0 016.887.272l.022.017.052.046a47.86 47.86 0 01.53.515c.312.31.692.69.968.967a1.167 1.167 0 01.26 1.255l-.003.006a.5.5 0 00.822.538l.004-.005a.833.833 0 011.182 0l.705.707h.001a1.168 1.168 0 010 1.655L15.46 11.81h-.001a1.169 1.169 0 01-1.654 0l-.708-.707a.838.838 0 01-.182-.91.834.834 0 01.181-.271.504.504 0 00-.712-.712l-.918.92a.54.54 0 01-.025.027l-6.471 6.47a1.837 1.837 0 11-2.6-2.597l6.444-6.444a.508.508 0 01.026-.027l.892-.893c.048-.047.051-.072.052-.077.002-.01.003-.044-.025-.113-.064-.154-.22-.348-.447-.575a3.162 3.162 0 00-2.382-.928.836.836 0 01-.822-.552.833.833 0 01.283-.945zm2.803 5.145l1.184 1.184-6.116 6.116a.838.838 0 01-1.185-1.184L9.195 8.62zM7.418 3.985a4.158 4.158 0 012.603 1.21c.233.233.516.546.662.898.077.184.126.403.092.64a1.13 1.13 0 01-.335.64l-.539.54 1.184 1.184.592-.592a1.504 1.504 0 012.421.418l.826-.825a1.506 1.506 0 01-.787-.91 1.5 1.5 0 01.044-1.01v.001l.002-.006-.002.004A.167.167 0 0014.144 6a251.278 251.278 0 00-1.357-1.347 6.981 6.981 0 00-.11-.106l-.004-.003a.515.515 0 01-.043-.035 4.38 4.38 0 00-5.212-.524zm9.107 3.926l-2.604 2.603.593.592a.167.167 0 00.236 0h.001l2.364-2.365.001-.001a.168.168 0 00.037-.182.168.168 0 00-.037-.055l-.001-.001-.59-.591zm-3.203-3.417z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

HammerIcon.displayName = 'HammerIcon';
export {HammerIcon};
