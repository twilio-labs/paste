/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ArrowDownIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.897 17.99l.06.008.054.002a.503.503 0 00.063-.005L12 18a.49.49 0 00.103-.01l.056-.016.084-.037.015-.01.026-.016.07-.057 3.535-3.536a.5.5 0 00-.638-.765l-.069.058-2.683 2.683.001-8.781A.506.506 0 0012 7a.504.504 0 00-.492.42l-.008.093v8.779l-2.682-2.681a.5.5 0 00-.638-.058l-.07.058a.5.5 0 00-.057.638l.058.069 3.535 3.536.047.04.064.042c.02.012.04.022.062.03l.078.023z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ArrowDownIcon.displayName = 'ArrowDownIcon';
export {ArrowDownIcon};
