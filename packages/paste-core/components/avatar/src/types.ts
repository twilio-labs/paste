import type {IconSize} from '@twilio-paste/style-props';
import type {GenericIconProps} from '@twilio-paste/icons/esm/types';

type AvatarImage = {
  src?: string;
  icon?: never;
};
type AvatarIcon = {
  src?: never;
  icon?: React.FC<GenericIconProps>;
};

export type AvatarProps = React.HTMLAttributes<'div'> &
  (AvatarImage | AvatarIcon) & {
    name: string;
    size?: IconSize;
    element: string;
  };
