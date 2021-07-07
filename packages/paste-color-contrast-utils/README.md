## Utils

Design Tokens provides a number of utility methods that you can use to determine the accessibility of a given theme of Design Tokens.

Here, as an example, you can inspect the current theme of the application you are in by grabbing the theme context, converting it to Design Tokens and passing it through the utils.

```tsx
import {generateTokensFromTheme, useTheme} from '@twilio-paste/core/theme';
import {
  getContrastRatingsOfTokensWithTextContrastRequirements,
  getContrastRatingsOfTokensWithUIControlContrastRequirements,
  getNumberOfTextFailures,
  getNumberOfUIControlFailures,
} from '@twilio-paste/design-tokens/dist/contrast-rating/utils';

const SomewhereInYourApp = () => {
  const theme = useTheme();
  const designTokens = generateTokensFromTheme(theme);

  const textContrastRating = getContrastRatingsOfTokensWithTextContrastRequirements(designTokens);
  const uiControlContrastRating = getContrastRatingsOfTokensWithUIControlContrastRequirements(designTokens);

  const numberOfTextFailures = getNumberOfTextFailures(textContrastRating);
  const numberOfUIControlFailures = getNumberOfUIControlFailures(uiControlContrastRating);

  return <div />;
};
```

When used as a child of the Paste Theme or Customization provider, these utilities will enable you to rate each foreground / background design token pairing for it's accessibility.

```tsx
import {CustomizationProvider} from '@twilio-paste/core/customization';

const App = () => {
  return (
    <CustomizationProvider theme={{}}>
      <SomewhereInYourApp />
    </CustomizationProvider>
  );
};
```
