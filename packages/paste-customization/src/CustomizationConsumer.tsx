import * as React from 'react';
import {Theme} from '@twilio-paste/theme';

import type {CustomTheme} from './types/CustomTheme';

export interface CustomizationConsumerProps {
  children: ({theme}: {theme: CustomTheme}) => React.ReactNode;
}

export const CustomizationConsumer: React.FC<React.PropsWithChildren<CustomizationConsumerProps>> = (props) => {
  return <Theme.Consumer {...props} />;
};

CustomizationConsumer.displayName = 'PasteCustomizationConsumer';
