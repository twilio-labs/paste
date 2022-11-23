/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductSendGridIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSendGridIcon = React.forwardRef<HTMLElement, ProductSendGridIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductSendGridIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductSendGridIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M5.168 19.3h5.144v-5.144H5.168zm-5.14-5.144h5.14v-5.14H.028zm0 0"
            fillRule="evenodd"
          />
          <path fill="currentColor" d="M.027 19.3h5.141v-5.144H.028zm0 0" fillRule="evenodd" />
          <path
            fill="currentColor"
            d="M10.313 14.156h5.144v-5.14h-5.145zm-5.145-5.14h5.144V3.87H5.168zm0 0"
            fillRule="evenodd"
          />
          <path fill="currentColor" d="M5.168 14.156h5.144v-5.14H5.168zm0 0" fillRule="evenodd" />
          <path fill="currentColor" d="M10.313 9.016h5.144V3.87h-5.145zm0 0" fillRule="evenodd" />
        </svg>
      </IconWrapper>
    );
  }
);

ProductSendGridIcon.displayName = 'ProductSendGridIcon';
export {ProductSendGridIcon};
