import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';

import {TokenCard} from '../../src/components/tokens-list/token-card';

export default {
  title: 'Website/TokenCard/Background Colors',
  component: TokenCard,
};

// Test the border appears correctly on this specific background color since it matches the card bg
export const ColorBackground: React.FC = () => {
  const theme = useTheme();
  return (
    <TokenCard
      category="background-colors"
      value={theme.backgroundColors.colorBackgroundBody}
      name="$color-background-body"
      comment={`Background color used for the main page body.`}
    />
  );
};

// Test any other value for no border
export const ColorBackgroundAvailable: React.FC = () => {
  const theme = useTheme();
  return (
    <TokenCard
      category="background-colors"
      value={theme.backgroundColors.colorBackgroundAvailable}
      name="$color-background-available"
      comment={`Background color used to represent an entity or person as "available".`}
    />
  );
};
