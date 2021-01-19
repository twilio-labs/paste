/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductTaskRouterIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTaskRouterIcon: React.FC<ProductTaskRouterIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductTaskRouterIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductTaskRouterIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15 12l3 1.5-3 1.5v-3zM5 6c1.95 0 3.1 1.45 4 3 .9-1.55 2.05-3 4-3h.5a.5.5 0 01.5.5l-.008.09A.5.5 0 0113.5 7H13c-1.6 0-2.5 1.4-3.4 3 .9 1.6 1.8 3 3.4 3h.5a.5.5 0 110 1H13c-1.95 0-3.1-1.45-4-3-.9 1.55-2.05 3-4 3H2.5a.5.5 0 110-1H5c1.6 0 2.5-1.4 3.4-3C7.5 8.4 6.6 7 5 7H2.5a.5.5 0 010-1zm10-1l3 1.5L15 8V5z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductTaskRouterIcon.displayName = 'ProductTaskRouterIcon';
export {ProductTaskRouterIcon};
