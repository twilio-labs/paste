/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductRegionalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductRegionalIcon: React.FC<ProductRegionalIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductRegionalIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductRegionalIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.343 13.167c.03-.068.055-.138.083-.207a7.905 7.905 0 00.56-2.695c.003-.088.014-.175.014-.265 0-.11-.012-.217-.017-.326-.004-.108-.007-.216-.016-.323a7.97 7.97 0 00-.08-.638 7.915 7.915 0 00-.598-1.992c-.022-.048-.046-.096-.07-.144a7.976 7.976 0 00-.42-.77c-.026-.043-.05-.086-.077-.128a8.027 8.027 0 00-.267-.385c-.016-.021-.03-.044-.046-.066a.493.493 0 00-.033-.04 7.99 7.99 0 00-14.217 3.21V8.4a8.116 8.116 0 00-.11.713l-.014.152a8.002 8.002 0 00.003 1.529l.006.052c.054.518.16 1.029.313 1.526l.003.009a7.93 7.93 0 00.996 2.072l.019.027c.273.403.583.779.925 1.125.038.039.077.076.117.114.126.123.257.242.392.357l.157.134c.017.013.032.028.049.042.008.006.017.008.026.014a7.981 7.981 0 0012.02-2.516l.011-.015c.1-.187.188-.377.271-.57zm-.37-2.647c-.006.09-.01.18-.02.269-.02.173-.047.345-.08.514-.015.083-.034.166-.052.248-.03.13-.063.258-.1.385-.017.063-.033.126-.053.188a6.94 6.94 0 01-.193.526c-.024.06-.05.118-.077.177-.026.06-.056.117-.084.175h-.967a.498.498 0 01-.494-.418l-.527-3.166A.5.5 0 0013.833 9H12.78a.5.5 0 01-.485-.621l.5-2A.499.499 0 0113.28 6h2.454a6.899 6.899 0 01.29.455c.067.112.133.226.193.342.128.25.24.505.336.766.016.043.033.086.048.13a7 7 0 01.327 1.36 7.058 7.058 0 01.066.838c.002.1-.001.2-.004.3-.003.11-.008.22-.017.33zM5.508 12.402l-.5 2.499a7.054 7.054 0 01-.424-.47A6.965 6.965 0 013 10.014v-.027c0-.228.012-.454.034-.677l.008-.067c.009-.082.025-.162.037-.243h3.14c.229 0 .43.156.484.379l.501 2.002a.5.5 0 01-.486.619h-.719a.5.5 0 00-.49.402zM9.998 17a6.955 6.955 0 01-4.12-1.353L6.409 13h.31a1.502 1.502 0 001.455-1.864l-.5-2A1.498 1.498 0 006.218 8H3.293a6.99 6.99 0 0111.596-3h-1.61c-.688 0-1.288.468-1.454 1.136l-.5 2A1.501 1.501 0 0012.78 10h.63l.457 2.75c.119.723.746 1.254 1.48 1.252h.388A6.994 6.994 0 019.999 17z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductRegionalIcon.displayName = 'ProductRegionalIcon';
export {ProductRegionalIcon};
