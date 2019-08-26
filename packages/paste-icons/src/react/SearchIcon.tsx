/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SearchIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const SearchIcon: React.FC<SearchIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M657.329 735.281c-96.441 0-184.814-40.184-257.146-112.516-144.63-136.594-144.63-369.66 0-514.292 144.631-144.63 369.662-144.63 514.293 0 144.63 144.631 144.63 369.662 0 514.292-72.332 72.332-160.705 112.516-257.147 112.516m0-650.886c-72.331 0-144.63 24.11-200.888 80.368-112.515 112.515-112.515 289.293 0 401.777 112.515 112.483 289.293 112.515 401.777 0 112.483-112.516 112.515-289.294 0-401.777-56.258-56.258-128.589-80.368-200.889-80.368M1.5 967.168l267.065-267.064 56.831 56.831L58.332 1024 1.5 967.168"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

SearchIcon.defaultProps = {
  title: 'Search Icon',
  decorative: true,
};

SearchIcon.displayName = 'SearchIcon';

export {SearchIcon};
