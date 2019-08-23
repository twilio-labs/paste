/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LearnIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const LearnIcon: React.FC<LearnIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M5.81 12.024a6.214 6.214 0 1112.428 0 6.212 6.212 0 01-4.286 5.901v.765a.5.5 0 01-.5.5h-2.857a.5.5 0 01-.5-.5v-.765a6.21 6.21 0 01-4.285-5.901zm7.142 5.526a.5.5 0 01.375-.484 5.213 5.213 0 003.911-5.042 5.215 5.215 0 00-10.428 0 5.21 5.21 0 003.91 5.042.5.5 0 01.375.484v.64h1.857v-.64zM12.5 22c.276 0 .5.236.5.528a.514.514 0 01-.5.527h-.952a.514.514 0 01-.5-.527c0-.292.223-.528.5-.528h.952zm.952-1.905c.277 0 .5.236.5.528a.514.514 0 01-.5.527h-2.857a.514.514 0 01-.5-.527c0-.292.224-.528.5-.528h2.857zM11.524 2.5c0-.276.236-.5.527-.5.292 0 .528.224.528.5v1.905c0 .276-.236.5-.528.5a.514.514 0 01-.527-.5V2.5zm10.024 9.024c.276 0 .5.236.5.527a.514.514 0 01-.5.528h-1.905a.514.514 0 01-.5-.528c0-.291.224-.527.5-.527h1.905zM2.5 12.579a.514.514 0 01-.5-.528c0-.291.224-.527.5-.527h1.905c.276 0 .5.236.5.527a.514.514 0 01-.5.528H2.5zm1.761-7.61a.5.5 0 11.708-.707l2.02 2.021a.5.5 0 11-.707.707l-2.02-2.02zm14.816-.707a.5.5 0 01.707.707l-2.02 2.021a.5.5 0 01-.708-.707l2.021-2.02z"
            fillRule="nonzero"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

LearnIcon.defaultProps = {
  title: 'Learn Icon',
  decorative: true,
};

LearnIcon.displayName = 'LearnIcon';

export {LearnIcon};
