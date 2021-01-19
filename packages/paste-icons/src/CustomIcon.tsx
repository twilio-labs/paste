/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface CustomIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CustomIcon: React.FC<CustomIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `CustomIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[CustomIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.499 5a.5.5 0 01.09.991L9.499 6h-5a.5.5 0 00-.492.41l-.008.09v10a.5.5 0 00.41.492l.09.008h10a.5.5 0 00.492-.41l.008-.09v-5a.5.5 0 01.992-.09l.008.09v5a1.5 1.5 0 01-1.356 1.493L14.5 18h-10a1.5 1.5 0 01-1.493-1.355l-.007-.145v-10a1.5 1.5 0 011.355-1.493L4.5 5h5zm7.114-2.922a8.613 8.613 0 011.892-.036.5.5 0 01.443.44c.307 2.7-.796 4.997-2.75 6.443-1.507 1.115-3.301 1.517-4.374.948l-2.151 2.152a.5.5 0 01-.765-.638l.058-.07 2.152-2.152c-.828-1.58.522-4.69 2.604-6.08.827-.553 1.817-.872 2.891-1.007zm1.25.929a8.342 8.342 0 00-1.125.064c-.932.117-1.778.389-2.46.845-1.568 1.048-2.628 3.33-2.39 4.479l2.967-2.967a.5.5 0 01.765.638l-.058.07L12.6 9.099c.724.15 1.929-.182 3.005-.978 1.548-1.146 2.466-2.9 2.39-4.995l-.007-.117z"
        />
      </svg>
    </IconWrapper>
  );
};

CustomIcon.displayName = 'CustomIcon';
export {CustomIcon};
