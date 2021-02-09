/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductEventStreamsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductEventStreamsIcon: React.FC<ProductEventStreamsIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductEventStreamsIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductEventStreamsIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 32 32" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <g fill="currentColor" data-name="Rounder Expanded Red">
          <path
            fill="currentColor"
            d="M29.5 24.663V20a4.981 4.981 0 00-2.03-4 4.981 4.981 0 002.03-4V7.337a3.5 3.5 0 10-2 0V12a3.003 3.003 0 01-3 3h-2v-4.15a3.003 3.003 0 00-3-3h-6a3.003 3.003 0 00-3 3V12a1 1 0 002 0v-1.15a1.001 1.001 0 011-1h6a1.001 1.001 0 011 1V21a1.001 1.001 0 01-1 1h-6a1.001 1.001 0 01-1-1v-1.075a1 1 0 00-2 0V21a3.003 3.003 0 003 3h6a3.003 3.003 0 003-3v-4h2a3.003 3.003 0 013 3v4.663a3.5 3.5 0 102 0z"
          />
          <path
            fill="currentColor"
            d="M8.5 17h4.967a1 1 0 000-2H8.5a3.003 3.003 0 01-3-3V7.858a4 4 0 10-2 0V12a4.981 4.981 0 002.03 4 4.981 4.981 0 00-2.03 4v4.142a4 4 0 102 0V20a3.003 3.003 0 013-3zm-6-13a2 2 0 112 2 2.002 2.002 0 01-2-2zm4 24a2 2 0 11-2-2 2.002 2.002 0 012 2z"
          />
          <path
            fill="currentColor"
            d="M14.533 18.152a1 1 0 101.414 1.414l1.874-1.874a2.5 2.5 0 000-3.535l-1.874-1.874a1 1 0 10-1.414 1.414l1.874 1.874a.5.5 0 010 .707z"
          />
        </g>
      </svg>
    </IconWrapper>
  );
};

ProductEventStreamsIcon.displayName = 'ProductEventStreamsIcon';
export {ProductEventStreamsIcon};
