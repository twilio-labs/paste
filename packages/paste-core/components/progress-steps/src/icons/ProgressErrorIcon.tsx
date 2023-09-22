/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';
import { IconWrapper } from '@twilio-paste/icons/esm/helpers/IconWrapper';
import type { IconWrapperProps } from '@twilio-paste/icons/esm/helpers/IconWrapper';

export interface ProgressErrorIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProgressErrorIcon = React.forwardRef<HTMLElement, ProgressErrorIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProgressErrorIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProgressErrorIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          fill="none"
          height="100%"
          viewBox="0 0 20 20"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            clipRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.985 5h.03c.916.011 1.609.889 1.466 1.866l-.641 3.357c-.061.444-.418.777-.835.777h-.01c-.418 0-.774-.333-.835-.777l-.642-3.357C8.376 5.889 9.078 5 9.985 5zM10 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            fillRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProgressErrorIcon.displayName = 'ProgressErrorIcon';
export { ProgressErrorIcon };
