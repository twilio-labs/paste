import type {IconSize, TextColor} from '@twilio-paste/style-props';

export interface AvatarProps extends React.HTMLAttributes<'div'> {
  name: string;
  size: IconSize;
  src?: string;
  icon?: React.FC<{decorative: boolean; title: string; size: IconSize; color: TextColor}>;
}
