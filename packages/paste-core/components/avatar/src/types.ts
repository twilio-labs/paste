import type {IconSize} from '@twilio-paste/style-props';

export interface AvatarProps extends React.HTMLAttributes<'div'> {
  name: string;
  size: IconSize;
  src?: string;
}
