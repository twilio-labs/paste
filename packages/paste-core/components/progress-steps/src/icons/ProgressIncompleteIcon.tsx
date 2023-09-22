/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';
import { IconWrapper } from '@twilio-paste/icons/esm/helpers/IconWrapper';
import type { IconWrapperProps } from '@twilio-paste/icons/esm/helpers/IconWrapper';

export interface ProgressIncompleteIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProgressIncompleteIcon = React.forwardRef<HTMLElement, ProgressIncompleteIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ProgressIncompleteIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProgressIncompleteIcon]: Missing a title for non-decorative icon.');
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
            d="M9.993 2h.014a1.23 1.23 0 01-.002 2.462h-.01A1.23 1.23 0 019.993 2zm2.321 1.518a1.23 1.23 0 011.681-.45l.013.007a1.23 1.23 0 01-1.235 2.13l-.008-.005a1.23 1.23 0 01-.45-1.682zm-4.628 0a1.23 1.23 0 01-.45 1.682l-.009.004a1.23 1.23 0 01-1.235-2.13l.012-.006a1.23 1.23 0 011.682.45zm7.557 2.027a1.23 1.23 0 011.682.447l.007.012A1.23 1.23 0 1114.8 7.235l-.004-.008a1.23 1.23 0 01.447-1.682zm-10.486 0a1.23 1.23 0 01.447 1.682l-.004.008a1.23 1.23 0 01-2.132-1.23l.007-.013a1.23 1.23 0 011.682-.447zm12.011 3.218c.68 0 1.231.55 1.232 1.23v.014a1.23 1.23 0 01-2.461-.002v-.01c-.001-.68.55-1.231 1.23-1.232zm-13.536 0c.68 0 1.23.552 1.23 1.232v.01A1.23 1.23 0 012 10.007v-.014c0-.68.552-1.23 1.232-1.23zm13.25 3.551c.588.34.79 1.093.45 1.681l-.007.013a1.23 1.23 0 01-2.13-1.235l.005-.008a1.23 1.23 0 011.682-.45zm-12.964 0a1.23 1.23 0 011.682.45l.004.009a1.23 1.23 0 01-2.13 1.235l-.006-.012a1.23 1.23 0 01.45-1.682zm2.027 2.93a1.23 1.23 0 011.682-.448l.008.004a1.23 1.23 0 01-1.23 2.132l-.013-.007a1.23 1.23 0 01-.447-1.682zm8.91 0a1.23 1.23 0 01-.447 1.681l-.012.007a1.23 1.23 0 11-1.231-2.132l.008-.004a1.23 1.23 0 011.682.447zm-5.692 1.524c0-.68.552-1.23 1.232-1.23h.01A1.23 1.23 0 1110.007 18h-.014a1.23 1.23 0 01-1.23-1.232z"
            fillRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProgressIncompleteIcon.displayName = 'ProgressIncompleteIcon';
export { ProgressIncompleteIcon };
