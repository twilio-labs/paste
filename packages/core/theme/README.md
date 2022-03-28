<!-- STORY -->

# ThemeProvider

The Paste `ThemeProvider` leverages React's [Context](https://reactjs.org/docs/context.html) to provide the theme object to any descendant components in the tree. For that reason, we recommend wrapping your application at the root level with the Paste `ThemeProvider`. This allows all sub-components to retrieve the correct token value for the supplied theme.

```js
import {Theme} from '@twilio-paste/theme';

<Theme.Provider theme="default">
  <App />
</Theme.Provider>;
```

## Using tokens in custom components

Sometimes you will need to create something custom that is not available in Paste but you need that component to still look like it's from Paste. The use of Paste Tokens in your styles is the way that you can access global design properties used in all Paste Components.

### Styled Component

By using the `Theme.Provider`, when you create a custom component using Styling-Library, the theme object is available on `props` via context. You can access those via the [`css` utility](https://github.com/styled-system/styled-system/blob/master/packages/css/README.md) or props object directly.

This is the preferred method.

```js
import {styled, css} from '@twilio-paste/styling-library';

const custom = styled.div(
  css({
    backgroundColor: 'colorBackgroundPrimary',
    padding: 'spacing20',
  })
);
```

### Paste ThemeConsumer

Paste Theme provides a React Context Consumer for the theme called `Theme.Consumer`. The `Theme.Consumer` takes a function as a child, which provides the theme object as an argument.

```js
import {Theme} from '@twilio-paste/theme';

<Theme.Consumer>
  {({theme}) => {
    return <p>What is the default text color {theme.textColors.colorText}</p>;
  }}
</Theme.Consumer>;
```

### Paste useTheme Hook

Paste Theme provides a React Hook called `useTheme` which returns the theme object from the React Context via the Theme Provider.

```js
import React from 'react';
import {useTheme} from '@twilio-paste/theme';

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p>What is the default text color {theme.textColors.colorText}</p>;
};
```

### Higher Order Component (HoC)

Paste also provides a HoC to be able to access the theme object.

```js
import React from 'react';
import {withTheme} from '@twilio-paste/theme';

const ExampleComponent = ({theme}) => <p>What is the default text color {theme.textColors.colorText}</p>;

// Provides this component with the theme object as a prop
const ExampleComponentwithTheme = withTheme(ExampleComponent);
```

## useThemeContrastCheck

Import the `useThemeContrastCheck` hook into any Paste app and have it automatically detect color contrast ratio issues
with the currently used theme, based on the Paste Design Token pairing requirements.

```tsx
import {useThemeContrastCheck} from '@twilio-paste/core/theme-utils';

const SomewhereInYourApp = () => {
  const {
    textContrastRating,
    uiControlContrastRating,
    numberOfTextFailures,
    numberOfUIControlFailures,
    totalFailures,
  } = useThemeContrastCheck();

  return <div />;
};
```

Use your component when it is a child of the Paste theme provider, or Customization Provider.

```tsx
import {Theme} from '@twilio-paste/core/theme';

const App = () => {
  return (
    <Theme.Provider theme="default">
      <SomewhereInYourApp />
    </Theme.Provider>
  );
};
```
