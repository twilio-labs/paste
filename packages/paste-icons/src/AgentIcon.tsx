/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AgentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AgentIcon: React.FC<AgentIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `AgentIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[AgentIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.484 2.483a6.845 6.845 0 013.336 5.663c.492.106.941.389 1.252.813.333.454.473 1.023.388 1.58l-.414 2.738a2.105 2.105 0 01-2.477 1.768 6.831 6.831 0 01-3.943 2.427 1.842 1.842 0 01-3.493-.835 1.85 1.85 0 011.845-1.856 1.85 1.85 0 011.821 1.555 5.758 5.758 0 002.787-1.766 2.132 2.132 0 01-.709-1.927l.414-2.738a2.104 2.104 0 011.573-1.744l-.104.03a5.785 5.785 0 00-11.564-.013A2.1 2.1 0 015.708 9.9l.415 2.743a2.133 2.133 0 01-.388 1.58 2.105 2.105 0 01-3.78-.942l-.415-2.742a2.129 2.129 0 01.387-1.58c.302-.412.734-.69 1.21-.804a6.845 6.845 0 0110.347-5.673zM9.978 15.84a.79.79 0 00-.785.796c0 .44.353.795.785.795a.79.79 0 00.785-.795.79.79 0 00-.785-.796zM3.754 9.166a1.044 1.044 0 00-.971.42 1.069 1.069 0 00-.195.794l.416 2.746a1.044 1.044 0 001.875.47c.168-.229.238-.514.195-.794l-.416-2.748a1.044 1.044 0 00-.78-.865zm13.462.42a1.044 1.044 0 00-1.876.473l-.414 2.743c-.043.28.027.565.194.793a1.044 1.044 0 001.877-.473l.414-2.743a1.069 1.069 0 00-.195-.793z"
        />
      </svg>
    </IconWrapper>
  );
};

AgentIcon.displayName = 'AgentIcon';
export {AgentIcon};
