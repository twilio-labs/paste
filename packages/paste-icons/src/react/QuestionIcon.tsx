/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface QuestionIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const QuestionIcon: React.FC<QuestionIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 20 20">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.263 6.873a5.617 5.617 0 00-2.002-2.1A5.19 5.19 0 0010.5 4a5.19 5.19 0 00-2.762.774 5.616 5.616 0 00-2.001 2.099A5.854 5.854 0 005 9.768c0 1.046.246 2.011.738 2.895a5.618 5.618 0 002.001 2.1 5.19 5.19 0 002.761.773 5.19 5.19 0 002.76-.774 5.617 5.617 0 002.002-2.099A5.856 5.856 0 0016 9.768a5.856 5.856 0 00-.737-2.895zm-3.846 6.5a.24.24 0 01-.065.173.217.217 0 01-.164.067H9.813a.218.218 0 01-.165-.067.24.24 0 01-.064-.173V11.93a.24.24 0 01.064-.173.218.218 0 01.165-.067h1.375c.067 0 .122.022.164.067a.24.24 0 01.065.173v1.442zm1.744-4.439c-.06.186-.127.337-.2.455-.075.117-.181.238-.32.36a3.01 3.01 0 01-.33.263c-.08.053-.197.124-.35.214a1.23 1.23 0 00-.39.372c-.103.152-.154.276-.154.372a.24.24 0 01-.065.172.217.217 0 01-.164.068H9.813a.218.218 0 01-.165-.068.24.24 0 01-.064-.172v-.271c0-.335.125-.65.376-.943.25-.292.526-.509.827-.65.229-.11.391-.222.487-.337a.694.694 0 00.143-.458c0-.166-.09-.313-.269-.444a1.014 1.014 0 00-.612-.195c-.248 0-.453.06-.616.18-.157.12-.363.351-.616.691a.208.208 0 01-.179.09.196.196 0 01-.136-.044l-.945-.751c-.11-.09-.129-.196-.057-.316.61-1.066 1.496-1.6 2.656-1.6.416 0 .822.103 1.218.309.396.205.727.495.992.87a2.081 2.081 0 01.308 1.833z"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

QuestionIcon.defaultProps = {
  title: 'Question Icon',
  decorative: true,
};

QuestionIcon.displayName = 'QuestionIcon';

export {QuestionIcon};
