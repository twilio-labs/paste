/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PlayIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PlayIcon: React.FC<PlayIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `PlayIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[PlayIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.153 4.465a1.003 1.003 0 011.277-.368l.102.056 8.002 5.002a.99.99 0 01.096 1.616l-.095.067-8.002 5.01c-.16.099-.344.152-.533.152a.998.998 0 01-.993-.878L6 15.006V4.994a.99.99 0 01.153-.529zm.847.53v10.01l8.002-5.009L7 4.994z"
        />
      </svg>
    </IconWrapper>
  );
};

PlayIcon.displayName = 'PlayIcon';
export {PlayIcon};
