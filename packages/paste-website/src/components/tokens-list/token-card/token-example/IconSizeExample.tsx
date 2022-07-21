import * as React from 'react';
import type {Properties} from 'csstype';
import type {InformationIconProps} from '@twilio-paste/icons/esm/InformationIcon';

type IconSizeExampleProps = Pick<InformationIconProps, 'size'> & {
  color: Properties['color'];
};

export const IconSizeExample: React.FC<IconSizeExampleProps> = ({size, color}) => {
  return (
    <span style={{lineHeight: 0}}>
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 20 20"
        color={color}
        height={size as string}
        width={size as string}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM10 9a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z"
        ></path>
      </svg>
    </span>
  );
};
