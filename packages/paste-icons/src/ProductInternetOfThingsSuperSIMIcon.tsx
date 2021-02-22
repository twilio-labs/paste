/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductInternetOfThingsSuperSIMIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsSuperSIMIcon: React.FC<ProductInternetOfThingsSuperSIMIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ProductInternetOfThingsSuperSIMIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductInternetOfThingsSuperSIMIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 21 20"
        fill="none"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.31 1.975c.056.062.1.134.128.212a.625.625 0 01-.375.813l-1.625.5 1 1.375a.663.663 0 01-.125.875.887.887 0 01-.375.125 1.013 1.013 0 01-.625-.25l-1-1.375-1 1.375a.57.57 0 01-.5.25.887.887 0 01-.376-.125.675.675 0 01-.124-.875l1-1.375-1.625-.5a.626.626 0 01-.376-.813.626.626 0 01.813-.374l1.625.5V.625a.625.625 0 111.25 0v1.688l1.625-.5a.625.625 0 01.685.162zM5.5 16.25V10a.625.625 0 01.625-.625h5a.625.625 0 01.625.625v6.25a.624.624 0 01-.625.625h-5a.625.625 0 01-.625-.625zm3.375-5.625L10.5 12.25v-1.625H8.875zm-.5 5L6.75 14v1.625h1.625zM6.75 12.25l3.375 3.375h.375V14l-3.375-3.375H6.75v1.625zm4.875-7.875c.28.01.546.121.75.313l1.563 1.625c.189.18.301.426.312.687v10.813a1.563 1.563 0 01-1.563 1.562H4.563A1.563 1.563 0 013 17.812V5.938a1.562 1.562 0 011.563-1.562h7.062zm-7.063 13.75h8.125a.313.313 0 00.313-.313V7.126l-1.5-1.5H4.562a.312.312 0 00-.312.313v11.875a.313.313 0 00.313.312z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductInternetOfThingsSuperSIMIcon.displayName = 'ProductInternetOfThingsSuperSIMIcon';
export {ProductInternetOfThingsSuperSIMIcon};
