/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface AmazonKinesisIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AmazonKinesisIcon: React.FC<AmazonKinesisIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `AmazonKinesisIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[AmazonKinesisIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        height="100%"
        width="100%"
        viewBox="0 0 55 66"
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <use xlinkHref="#prefix__a" x={0.5} y={0.5} />
        <symbol id="prefix__a" overflow="visible">
          <g fill="currentColor" stroke="none" fillRule="nonzero">
            <path fill="currentColor" d="M26.535 47.935l26.526-12.2-26.526-1.1-26.526 1.1z" />
            <path fill="currentColor" d="M0 13.247v18.72h31.903V2.656L26.635 0z" />
            <path fill="currentColor" d="M26.635 64l26.526-18.818-26.6-3.887-26.56 3.887z" />
            <g fill="currentColor">
              <path fill="currentColor" d="M26.635 13.28v18.688h14.024v-19.95l-4.124-1.654z" />
              <path fill="currentColor" d="M36.535 19.4v12.567h10.85V19.012l-3.1-.907z" />
              <path fill="currentColor" d="M44.275 17.07v14.9h8.777l.097-14.964-2.656-1.07z" />
            </g>
            <path
              fill="currentColor"
              d="M31.903 31.968V2.656L26.635 0v31.968zm8.745 0v-19.95l-4.113-1.654v21.603zm6.737 0V19.012l-3.1-.907v13.862zm3.1 0V15.935l2.656 1.07V31.97zm2.568 3.757v5.603l-26.518 6.607V38.38zm.097 14.963v-5.506l-26.615 9.393V64z"
            />
            <path fill="currentColor" d="M0 50.753v-5.57l26.535 9.327v9.5zm0-9.425v-5.603l26.535 2.655v9.555z" />
          </g>
        </symbol>
      </svg>
    </IconWrapper>
  );
};

AmazonKinesisIcon.displayName = 'AmazonKinesisIcon';
export {AmazonKinesisIcon};
