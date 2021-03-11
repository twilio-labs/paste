import type {IconSize} from '@twilio-paste/style-props';
import type {GenericIconProps} from '@twilio-paste/icons/esm/types';

export interface AvatarProps extends React.HTMLAttributes<'div'> {
  name: string;
  size: IconSize;
  src?: string;
  icon?: React.FC<GenericIconProps>;
}
