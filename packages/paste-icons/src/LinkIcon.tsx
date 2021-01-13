/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LinkIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LinkIcon: React.FC<LinkIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `LinkIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[LinkIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.106 8.868a3.175 3.175 0 013.98-.222l.324.233.075.06a.836.836 0 01-1.056 1.295l-.322-.232-.108-.071a1.505 1.505 0 00-1.835.23l-2.139 2.14-.084.09a1.503 1.503 0 00.082 2.037l.09.083c.59.5 1.475.472 2.034-.086l1.298-1.295.073-.065a.835.835 0 011.108.064.835.835 0 01-.004 1.18l-1.298 1.296-.118.112a3.173 3.173 0 01-4.368-.108l-.112-.118a3.174 3.174 0 01.12-4.369l2.14-2.14zm3.581-3.922a3.173 3.173 0 014.368.108l.112.118a3.174 3.174 0 01-.12 4.369l-2.14 2.14-.12.114a3.175 3.175 0 01-3.981.222l-.323-.232-.076-.062a.836.836 0 011.056-1.295l.323.233.108.071c.585.35 1.343.261 1.835-.23l2.139-2.14.084-.09a1.503 1.503 0 00-.082-2.037l-.09-.083a1.504 1.504 0 00-2.034.086l-1.298 1.295-.073.065a.835.835 0 01-1.108-.064.835.835 0 01.004-1.18l1.298-1.296z"
        />
      </svg>
    </IconWrapper>
  );
};

LinkIcon.displayName = 'LinkIcon';
export {LinkIcon};
