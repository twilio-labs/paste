/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ThumbsUpIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ThumbsUpIcon: React.FC<ThumbsUpIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ThumbsUpIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ThumbsUpIcon]: Missing a title for non-decorative icon.');
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
          d="M6.5 7.45c.194-.216.406-.451.628-.707.799-.922 1.608-1.972 1.898-2.838.314-.938 1.139-1.487 1.966-1.395a1.57 1.57 0 011.085.621c.277.363.423.85.423 1.43 0 .327-.081.645-.174.924-.062.186-.139.383-.208.56l-.088.226c-.092.245-.15.432-.166.582-.014.134.01.19.033.222l.001.001a.415.415 0 00.1.058 1.9 1.9 0 00.371.11c.32.068.725.106 1.152.124.632.026 1.237.01 1.634-.002.147-.004.265-.008.345-.008.25 0 .731.008 1.158.218.224.11.443.28.603.537.159.256.239.567.239.924 0 1.218-.524 3.647-1.553 5.695-.31.616-.693.885-1.18 1.193-.574.364-1.145.575-1.767.575h-3c-1.116 0-2.204-.418-3.002-.883a6.393 6.393 0 01-.498-.322v.372a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V7a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v.45zm3.474-3.228c.186-.554.611-.751.909-.718a.57.57 0 01.399.233c.114.15.218.409.218.824 0 .17-.044.37-.123.61a9.287 9.287 0 01-.177.474c-.034.087-.07.177-.105.273-.095.252-.194.542-.225.827-.032.297.005.636.23.935.135.178.322.291.491.367.175.078.372.134.571.176.4.084.869.125 1.317.144.676.028 1.382.008 1.767-.003.118-.003.206-.006.254-.006.25 0 .519.018.717.115.088.044.15.098.194.168.044.07.089.19.089.396 0 1.04-.476 3.316-1.447 5.246-.184.367-.375.516-.82.797-.468.296-.855.42-1.233.42h-3c-.884 0-1.796-.338-2.498-.747a4.464 4.464 0 01-.813-.591 1.36 1.36 0 01-.184-.207l-.005-.008V8.968a7.331 7.331 0 01.329-.39l.308-.343c.223-.246.483-.534.746-.837.788-.909 1.73-2.097 2.091-3.176zM5.5 7.5h-2v7.667h2V7.5z"
        />
      </svg>
    </IconWrapper>
  );
};

ThumbsUpIcon.displayName = 'ThumbsUpIcon';
export {ThumbsUpIcon};
