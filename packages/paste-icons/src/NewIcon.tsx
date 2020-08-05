/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface NewIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const NewIcon: React.FC<NewIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[NewIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8.991 9.507c.003-.679 1.021-.675 1.019.004-.012 2.956 1.388 4.41 4.492 4.48.673.016.66 1.021-.013 1.019-2.898-.011-4.327 1.446-4.48 4.506-.033.658-1.01.639-1.018-.02-.03-3.027-1.382-4.49-4.481-4.486-.675 0-.682-1.009-.008-1.019 3.02-.042 4.478-1.452 4.49-4.484zm.505 2.757l-.115.242c-.459.9-1.166 1.558-2.115 1.976l.176.08c.973.465 1.664 1.211 2.083 2.22l.02.05.088-.192c.464-.973 1.173-1.685 2.123-2.124l.039-.018-.118-.05c-.963-.435-1.667-1.117-2.113-2.034l-.068-.15zm10.357-8.12c.174.17.194.434.058.625l-.058.068-1.954 1.905 1.954 1.908a.482.482 0 010 .694.512.512 0 01-.641.056l-.07-.056-1.954-1.908-1.954 1.908a.511.511 0 01-.71 0 .482.482 0 01-.058-.626l.058-.068 1.954-1.908-1.954-1.905a.482.482 0 010-.693.512.512 0 01.64-.057l.07.057 1.954 1.905 1.954-1.905a.511.511 0 01.71 0z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

NewIcon.displayName = 'NewIcon';
export {NewIcon};
