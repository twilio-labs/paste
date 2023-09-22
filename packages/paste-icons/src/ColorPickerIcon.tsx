import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ColorPickerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ColorPickerIcon = React.forwardRef<HTMLElement, ColorPickerIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ColorPickerIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ColorPickerIcon]: Missing a title for non-decorative icon.');
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
            d="M10.011 3.53C9.246 4.598 8.253 6.014 7.39 7.47c-.873 1.476-1.582 2.943-1.814 4.113-.477 2.398 1.428 4.894 4.437 4.894 2.99 0 4.836-2.484 4.434-4.91-.082-.492-.318-1.141-.668-1.887a27.423 27.423 0 00-1.258-2.325 60.408 60.408 0 00-2.508-3.824zm-.799-.614a.976.976 0 011.6.002 61.422 61.422 0 012.562 3.904c.48.803.94 1.636 1.306 2.416.362.771.647 1.524.752 2.158.51 3.08-1.841 6.104-5.42 6.104-3.561 0-6.035-3.011-5.417-6.12.269-1.354 1.056-2.948 1.939-4.439.89-1.503 1.908-2.953 2.678-4.025z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ColorPickerIcon.displayName = 'ColorPickerIcon';
export { ColorPickerIcon };
