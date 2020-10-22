/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CheckboxCheckIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CheckboxCheckIcon: React.FC<CheckboxCheckIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `CheckboxCheckIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[CheckboxCheckIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.59 5.916a1.386 1.386 0 00-1.98 0l-5.04 5.138L6.39 8.83a1.38 1.38 0 00-1.98 0 1.448 1.448 0 000 2.018l3.171 3.233a1.382 1.382 0 001.98 0l6.03-6.148a1.448 1.448 0 000-2.018z"
        />
      </svg>
    </IconWrapper>
  );
};

CheckboxCheckIcon.displayName = 'CheckboxCheckIcon';
export {CheckboxCheckIcon};
