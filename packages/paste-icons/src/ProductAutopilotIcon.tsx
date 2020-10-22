/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAutopilotIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAutopilotIcon: React.FC<ProductAutopilotIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProductAutopilotIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductAutopilotIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.75 10.533c.69 0 1.25.597 1.25 1.334v4.8c0 .736-.56 1.333-1.25 1.333h-.835c-.398 0-.779-.17-1.06-.47l-.895-.949-1.165 1.238a.485.485 0 01-.35.16.5.5 0 01-.465-.33.56.56 0 01.11-.582l1.165-1.243-1.11-1.179a.561.561 0 010-.757.48.48 0 01.71 0l2.705 2.89c.094.1.222.156.355.155h.835c.138 0 .25-.12.25-.266v-4.8c0-.148-.112-.267-.25-.267H4.25c-.138 0-.25.12-.25.267v4.8c0 .147.112.266.25.266h.835c.133.001.26-.055.355-.154l2.705-2.891a.48.48 0 01.485-.139.52.52 0 01.355.38.56.56 0 01-.13.516l-1.11 1.179 1.15 1.227a.56.56 0 01.104.579.5.5 0 01-.459.327.484.484 0 01-.355-.154L7.04 16.58l-.895.95c-.281.3-.662.469-1.06.469H4.25C3.56 18 3 17.403 3 16.667v-4.8c0-.737.56-1.334 1.25-1.334h11.5zM10.5 2c.276 0 .5.239.5.533v.534h4.75c.69 0 1.25.597 1.25 1.333v3.733c0 .737-.56 1.334-1.25 1.334H4.25C3.56 9.467 3 8.87 3 8.133V4.4c0-.736.56-1.333 1.25-1.333H9v-.534C9 2.24 9.224 2 9.5 2zm5.25 2.133H4.25c-.138 0-.25.12-.25.267v3.733c0 .148.112.267.25.267h11.5c.138 0 .25-.12.25-.267V4.4c0-.147-.112-.267-.25-.267zM7 5.2c.552 0 1 .478 1 1.067s-.448 1.066-1 1.066-1-.477-1-1.066c0-.59.448-1.067 1-1.067zm6 0c.552 0 1 .478 1 1.067s-.448 1.066-1 1.066-1-.477-1-1.066c0-.59.448-1.067 1-1.067z"
        />
      </svg>
    </IconWrapper>
  );
};

ProductAutopilotIcon.displayName = 'ProductAutopilotIcon';
export {ProductAutopilotIcon};
