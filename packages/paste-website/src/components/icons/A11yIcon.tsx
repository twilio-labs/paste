/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from '@twilio-paste/icons/esm/helpers/IconWrapper';
import type {IconWrapperProps} from '@twilio-paste/icons/esm/helpers/IconWrapper';

export interface A11yIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const A11yIcon: React.FC<A11yIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `A11yIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[A11yIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 24 24" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          d="M16.5934 21.8367C7.56275 19.6381 -0.379343 12.8795 2.65989 7.14446C3.32032 5.96182 4.3736 5.05313 5.63344 4.57909C6.89329 4.10505 8.27854 4.09619 9.54423 4.55409C11.4695 5.25096 12.6816 6.77462 12.9683 7.99487C13.5964 10.6678 11.2339 11.4254 10.7907 8.4985C10.6352 7.41573 10.789 6.31062 11.2342 5.31313C11.6793 4.31564 12.3972 3.46726 13.3035 2.86775C14.2098 2.26824 15.2667 1.94252 16.35 1.92891C17.4333 1.9153 18.4979 2.21437 19.4187 2.79093C24.1021 5.86175 21.9241 13.6283 16.7923 19.7629"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};

A11yIcon.displayName = 'A11yIcon';
export {A11yIcon};
