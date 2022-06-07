import type {IconSize} from '@twilio-paste/style-props';
import type {GenericIconProps} from '@twilio-paste/icons/esm/types';
import type {BoxProps} from '@twilio-paste/box';

export type AvatarProps = React.HTMLAttributes<'div'> &
  Pick<BoxProps, 'element'> & {
    name: string;
    size?: IconSize;
    icon?: React.FC<GenericIconProps>;
    src?: string;
  };

export type AvatarContentProps = {
  name: string;
  size?: IconSize;
  icon?: React.FC<GenericIconProps>;
  src?: string;
};
