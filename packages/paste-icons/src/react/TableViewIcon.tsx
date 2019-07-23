/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface TableViewIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const TableViewIcon: React.FC<TableViewIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 16 16">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M8 4V2H2v2h6zm1-3h7v4H1V1h8zm0 1v2h6V2H9zM8 9V7H2v2h6zm1-3h7v4H1V6h8zm0 1v2h6V7H9zm-1 7v-2H2v2h6zm1-3h7v4H1v-4h8zm0 1v2h6v-2H9z"
            fillRule="nonzero"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

TableViewIcon.defaultProps = {
  title: 'Table View Icon',
  decorative: true,
};

export {TableViewIcon};
