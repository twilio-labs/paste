import type { GenericIconProps } from '@twilio-paste/icons/esm/types';

export interface IconComponent {
  [key: string]: React.FunctionComponent<React.PropsWithChildren<GenericIconProps>>;
}

export interface IconObject {
  name: string;
  esm: string;
  cjs: string;
  Component: React.FunctionComponent<React.PropsWithChildren<GenericIconProps>>;
}

export interface IconsListProps {
  icons: IconObject[];
}

export interface GroupedList {
  logos: IconObject[];
  ui: IconObject[];
}
