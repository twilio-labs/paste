/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface DataTableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataTableIcon: React.FC<DataTableIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `DataTableIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[DataTableIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5.5A1.5 1.5 0 014.5 4h11A1.5 1.5 0 0117 5.5v9a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 14.5v-9zm1 2.389V11h4V7.889H4zm5 0V11h7V7.889H9zm7-1H4V5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v1.389zM4 14.5V12h4v3H4.5a.5.5 0 01-.5-.5zM9 12v3h6.5a.5.5 0 00.5-.5V12H9z"
        />
      </svg>
    </IconWrapper>
  );
};

DataTableIcon.displayName = 'DataTableIcon';
export {DataTableIcon};
