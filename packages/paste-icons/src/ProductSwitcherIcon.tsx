/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductSwitcherIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSwitcherIcon = React.forwardRef<HTMLElement, ProductSwitcherIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductSwitcherIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductSwitcherIcon]: Missing a title for non-decorative icon.');
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
            d="M1.4 1.4H9V9H1.4V1.4zm1.2 1.2v5.2h5.2V2.6H2.6zM11 1.4h7.6V9H11V1.4zm1.2 1.2v5.2h5.2V2.6h-5.2zM1.4 11H9v7.6H1.4V11zm1.2 1.2v5.2h5.2v-5.2H2.6zM11 11h7.6v7.6H11V11zm1.2 1.2v5.2h5.2v-5.2h-5.2z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ProductSwitcherIcon.displayName = 'ProductSwitcherIcon';
export {ProductSwitcherIcon};
