import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ProductDebuggerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductDebuggerIcon = React.forwardRef<HTMLElement, ProductDebuggerIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProductDebuggerIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductDebuggerIcon]: Missing a title for non-decorative icon.');
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
            d="M17.466 11.678a.533.533 0 100-1.064h-1.067a6.35 6.35 0 00-.272-1.835 3.176 3.176 0 011.328-.292h.01a.533.533 0 10.003-1.064h-.013c-.594 0-1.182.124-1.725.365l-.017-.036-.008-.016a6.426 6.426 0 00-2.278-2.507c1.202-.861 1.344-1.86 1.344-3.697a.533.533 0 00-1.066 0c0 1.905-.126 2.458-1.386 3.136a6.33 6.33 0 00-4.67.012c-1.282-.683-1.41-1.232-1.41-3.148a.533.533 0 00-1.067 0c0 1.85.145 2.85 1.371 3.715a6.427 6.427 0 00-2.248 2.489l-.008.016-.017.036a4.244 4.244 0 00-1.725-.365h-.013a.533.533 0 10.013 1.064c.459 0 .912.1 1.328.292a6.35 6.35 0 00-.272 1.835H2.534a.533.533 0 100 1.064h1.163c.144.857.463 1.676.938 2.405a3.196 3.196 0 01-2.098.788h-.003a.533.533 0 100 1.065h.003a4.261 4.261 0 002.753-1.014 6.374 6.374 0 009.42 0 4.261 4.261 0 002.753 1.014h.003a.533.533 0 100-1.065h-.003c-.772 0-1.517-.28-2.098-.788a6.32 6.32 0 00.938-2.405h1.163zM10 5.292c.69 0 1.375.135 2.014.397a.53.53 0 00.206.092 5.35 5.35 0 012.036 1.64H5.744A5.326 5.326 0 0110 5.29zm-5.333 5.322c0-.733.153-1.458.449-2.13h4.35v7.425a5.333 5.333 0 01-4.799-5.295zm5.866 5.295V8.485h4.351a5.306 5.306 0 01-.28 4.818 5.327 5.327 0 01-4.07 2.606z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductDebuggerIcon.displayName = 'ProductDebuggerIcon';
export { ProductDebuggerIcon };
