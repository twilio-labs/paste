/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronDisclosureIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDisclosureIcon: React.FC<ChevronDisclosureIconProps> = ({
  as,
  display,
  size,
  iconColor,
  title,
  decorative,
}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronDisclosureIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M16.258 14.882l3.67-4.371a.305.305 0 00-.052-.442.34.34 0 00-.206-.069h-7.34c-.182 0-.33.14-.33.314 0 .072.026.141.072.197l3.67 4.371a.341.341 0 00.516 0z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronDisclosureIcon.displayName = 'ChevronDisclosureIcon';
export {ChevronDisclosureIcon};
