/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowUpIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ArrowUpIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
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
              d="M12 7h.01c.022 0 .043.002.064.005L12 7a.49.49 0 01.16.026l.025.01c.02.007.04.016.058.027l.015.01a.14.14 0 01.026.016l.07.057 3.535 3.536a.5.5 0 01-.638.765l-.069-.058-2.683-2.683.001 8.781A.506.506 0 0112 18a.504.504 0 01-.492-.42l-.008-.093V8.708l-2.682 2.681a.5.5 0 01-.638.058l-.07-.058a.5.5 0 01-.057-.638l.058-.069 3.535-3.536a.501.501 0 01.096-.074l.015-.008a.344.344 0 01.062-.03l.017-.006a.406.406 0 01.09-.022A.486.486 0 0112 7z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ArrowUpIcon.displayName = 'ArrowUpIcon';
export {ArrowUpIcon};
