/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ThumbsDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ThumbsDownIcon = React.forwardRef<HTMLElement, ThumbsDownIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ThumbsDownIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ThumbsDownIcon]: Missing a title for non-decorative icon.');
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
            d="M13.5 12.55c-.194.215-.406.451-.628.707-.799.921-1.608 1.972-1.898 2.838-.314.938-1.139 1.487-1.966 1.395a1.57 1.57 0 01-1.085-.621c-.277-.363-.423-.85-.423-1.43 0-.327.081-.645.174-.924.062-.186.139-.383.208-.56l.088-.226c.092-.245.15-.432.166-.582.014-.134-.01-.19-.033-.222l-.001-.001a.416.416 0 00-.1-.058 1.902 1.902 0 00-.371-.11 7.35 7.35 0 00-1.152-.124 22.958 22.958 0 00-1.634.002 14.2 14.2 0 01-.345.008c-.25 0-.731-.008-1.158-.218a1.451 1.451 0 01-.603-.537c-.159-.257-.239-.567-.239-.924 0-1.218.524-3.648 1.553-5.696.31-.616.693-.884 1.18-1.192C5.807 3.71 6.378 3.5 7 3.5h3c1.116 0 2.204.417 3.002.883.178.104.345.212.498.321v-.37a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V13a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-.45zm-3.474 3.227c-.186.554-.611.752-.909.72a.571.571 0 01-.399-.234c-.114-.15-.218-.409-.218-.824a2 2 0 01.123-.61c.054-.16.113-.312.177-.475.034-.086.07-.176.105-.272.095-.252.194-.542.225-.828.032-.296-.005-.635-.23-.934a1.23 1.23 0 00-.491-.367 2.874 2.874 0 00-.571-.176 8.31 8.31 0 00-1.317-.144c-.676-.029-1.381-.008-1.767.003-.118.003-.206.006-.254.006-.25 0-.519-.018-.717-.115a.452.452 0 01-.194-.168c-.044-.07-.089-.19-.089-.396 0-1.04.476-3.316 1.447-5.247.184-.366.375-.515.82-.796.468-.296.855-.42 1.233-.42h3c.884 0 1.796.337 2.498.747.349.203.628.414.813.59.093.09.152.16.184.208l.005.007v4.98a7.245 7.245 0 01-.329.39 54.1 54.1 0 01-.308.342c-.223.247-.483.534-.746.838-.788.909-1.73 2.096-2.091 3.175zM14.5 12.5h2V4.833h-2V12.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ThumbsDownIcon.displayName = 'ThumbsDownIcon';
export { ThumbsDownIcon };
