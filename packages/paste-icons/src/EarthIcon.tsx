/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface EarthIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const EarthIcon = React.forwardRef<HTMLElement, EarthIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `EarthIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[EarthIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.343 13.167c.03-.068.055-.138.082-.207a7.9 7.9 0 00.562-2.695c.003-.088.013-.175.013-.265 0-.11-.012-.217-.017-.326-.004-.108-.007-.216-.016-.323a7.91 7.91 0 00-.08-.638 7.918 7.918 0 00-.598-1.992c-.022-.048-.046-.096-.07-.144a7.962 7.962 0 00-.42-.77c-.026-.043-.05-.086-.077-.128a8.03 8.03 0 00-.267-.385c-.016-.021-.03-.044-.046-.066a.514.514 0 00-.033-.04 7.99 7.99 0 00-14.217 3.21V8.4a8.118 8.118 0 00-.11.713l-.014.152a8.002 8.002 0 00.003 1.529l.006.053c.054.517.16 1.028.313 1.525l.003.009a7.95 7.95 0 00.996 2.072l.019.027c.273.402.583.779.925 1.125.038.039.077.076.117.114a8.1 8.1 0 00.392.357l.157.134.049.042c.008.006.017.008.026.014a7.982 7.982 0 0012.02-2.516l.011-.015c.1-.187.188-.377.271-.57zm-.37-2.647c-.006.09-.01.18-.02.269a6.959 6.959 0 01-.232 1.147c-.017.063-.033.126-.053.188a6.986 6.986 0 01-.193.526c-.024.06-.05.118-.077.177-.026.06-.056.117-.084.175h-.967a.498.498 0 01-.493-.418l-.528-3.166A.5.5 0 0013.833 9H12.78a.5.5 0 01-.485-.621l.5-2A.499.499 0 0113.28 6h2.454a6.974 6.974 0 01.29.455c.067.112.133.226.192.342h.001c.128.25.24.505.337.766l.047.13a7.012 7.012 0 01.327 1.36 7.043 7.043 0 01.066.838c.002.1-.001.2-.004.3a7 7 0 01-.016.33zM5.509 12.402l-.5 2.499a7.044 7.044 0 01-.424-.47A6.965 6.965 0 013 10.014v-.027c0-.228.012-.454.034-.677l.008-.067c.009-.082.025-.162.037-.243h3.14c.229 0 .43.156.484.379l.501 2.002a.5.5 0 01-.486.619h-.719a.5.5 0 00-.49.402zM9.998 17a6.955 6.955 0 01-4.12-1.353L6.409 13h.31a1.502 1.502 0 001.455-1.864l-.5-2A1.498 1.498 0 006.218 8H3.293a6.99 6.99 0 0111.596-3h-1.61c-.688 0-1.288.468-1.454 1.136l-.5 2A1.501 1.501 0 0012.78 10h.63l.457 2.75a1.496 1.496 0 001.48 1.252h.388A6.994 6.994 0 019.998 17z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

EarthIcon.displayName = 'EarthIcon';
export {EarthIcon};
