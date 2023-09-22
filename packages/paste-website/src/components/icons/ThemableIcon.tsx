import { IconWrapper } from '@twilio-paste/icons/esm/helpers/IconWrapper';
import type { IconWrapperProps } from '@twilio-paste/icons/esm/helpers/IconWrapper';
import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

export interface ThemableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ThemableIcon: React.FC<React.PropsWithChildren<ThemableIconProps>> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ThemableIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ThemableIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 25 25" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.00355 0.947754C6.22679 0.94776 6.43242 1.06684 6.54301 1.26015L11.4792 9.88906C11.5898 10.0824 11.5885 10.3207 11.4758 10.5141C11.3631 10.7075 11.1561 10.8266 10.9328 10.8266H0.964032C0.740714 10.8266 0.535026 10.7075 0.424463 10.5141C0.3139 10.3207 0.315264 10.0824 0.428041 9.88903L5.46061 1.26012C5.57335 1.06682 5.78031 0.947748 6.00355 0.947754ZM2.05379 9.57666H9.85697L5.9931 2.82227L2.05379 9.57666ZM17.5895 10.0579C17.8321 9.81234 18.2277 9.81015 18.473 10.053L23.8187 15.3442C24.064 15.587 24.0662 15.9829 23.8236 16.2284L18.5295 21.5861C18.2869 21.8317 17.8913 21.8339 17.646 21.591L12.3003 16.2998C12.055 16.057 12.0528 15.6611 12.2954 15.4156L17.5895 10.0579ZM18.0386 11.3818L13.6231 15.8504L18.0804 20.2622L22.4959 15.7937L18.0386 11.3818ZM1.25024 19.8525C1.25024 17.7924 2.93987 16.1111 5.03807 16.1111C7.13627 16.1111 8.8259 17.7924 8.8259 19.8525C8.8259 21.9127 7.13627 23.594 5.03807 23.594C2.93987 23.594 1.25024 21.9127 1.25024 19.8525ZM5.03807 14.8611C2.262 14.8611 0.000244141 17.0896 0.000244141 19.8525C0.000244141 22.6154 2.262 24.844 5.03807 24.844C7.81415 24.844 10.0759 22.6154 10.0759 19.8525C10.0759 17.0896 7.81415 14.8611 5.03807 14.8611Z"
          fill="currentColor"
        />
      </svg>
    </IconWrapper>
  );
};

ThemableIcon.displayName = 'ThemableIcon';
export { ThemableIcon };
