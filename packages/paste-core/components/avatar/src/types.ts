import type {IconSize} from '@twilio-paste/style-props';
import type {GenericIconProps} from '@twilio-paste/icons/esm/types';
import type {BoxProps} from '@twilio-paste/box';

type AvatarImage = {
  src?: string;
  icon?: never;
};
type AvatarIcon = {
  src?: never;
  icon?: React.FC<GenericIconProps>;
};

export type AvatarProps = React.HTMLAttributes<'div'> &
  Pick<BoxProps, 'element'> &
  (AvatarImage | AvatarIcon) & {
    name: string;
    size?: IconSize;
  };

export type AvatarContentProps = (AvatarImage | AvatarIcon) & {
  name: string;
  size?: IconSize;
};
