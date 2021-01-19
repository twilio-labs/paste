/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface UnpinIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnpinIcon: React.FC<UnpinIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `UnpinIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[UnpinIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.793 4.007a1.2 1.2 0 01.98.344l2.876 2.877a1.2 1.2 0 01-.205 1.86l-2.95 1.877.02.121c.105.828-.041 1.67-.423 2.418l-.11.202a1.2 1.2 0 01-1.883.24L8.4 12.25l-3.613 3.615a.461.461 0 01-.706-.589l.053-.064 3.614-3.615-1.694-1.693a1.2 1.2 0 01-.353-.864l.01-.138a1.2 1.2 0 01.585-.884 4.164 4.164 0 012.617-.531l.12.018 1.878-2.95a1.2 1.2 0 01.747-.525z"
        />
      </svg>
    </IconWrapper>
  );
};

UnpinIcon.displayName = 'UnpinIcon';
export {UnpinIcon};
