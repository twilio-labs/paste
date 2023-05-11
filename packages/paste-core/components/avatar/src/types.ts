import type {IconSize} from '@twilio-paste/style-props';
import type {GenericIconProps} from '@twilio-paste/icons/esm/types';
import type {BoxProps} from '@twilio-paste/box';

export type ColorVariants = 'default' | 'decorative10' | 'decorative20' | 'decorative30' | 'decorative40';
export type AvatarVariants = 'user' | 'entity';

export type AvatarProps = React.HTMLAttributes<'div'> &
  Pick<BoxProps, 'element'> & {
    name: string;
    size?: IconSize;
    icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
    src?: string;
    color?: ColorVariants;
    variant?: AvatarVariants;
  };

export type AvatarContentProps = {
  name: string;
  size?: IconSize;
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
  src?: string;
};

export type AvatarGroupProps = React.HTMLAttributes<'div'> &
  Pick<BoxProps, 'element'> & {
    size: IconSize;
    variant: AvatarVariants;
    children: NonNullable<React.ReactNode>;
  };
