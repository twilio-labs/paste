<!-- STORY -->

# Theme Provider

Paste Components require you to wrap your application in the Paste Theme provider to apply the theme tokens to the components you use, and provide a way to access Paste Design Tokens in your custom components.

The Paste Theme Provider is a wrapper around the [Emotion Theme Provider](https://emotion.sh/docs/emotion-theming) and comes with a default theme.

You should place the `Theme.Provider` around the root of your React application.

```js
import {Theme} from '@twilio-paste/theme';

<Theme.Provider>
  ...
</Theme.Provider>
```

## Using tokens in custom components

Sometimes you will need to create something custom that is not available in Paste but you need that component to still look like it's from Paste. The use of Paste Tokens in your styles is the way that you can access global design properties used in all Paste Components.

### Emotion Styled Component

By using the `Theme.Provider`, when you create a custom component using Emotion CSS, the theme object is available on `props` via context. You can access those via the [Styled-System `themeGet` utility](https://styled-system.com/api#themeget) or props object directly.

This is the preferred method.

```js
import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';

const custom = styled.div`
  background-color: ${themeGet('backgrounds.primary')};
  padding: ${props => props.theme.spacing.spacing20};
`
```

### Paste ThemeConsumer

Paste Theme provides a React Context Consumer for the theme called `Theme.Consumer`. The `Theme.Consumer` takes a function as a child, which provides the theme object as an argument.

```js
import {Theme} from '@twilio-paste/theme';

<Theme.Consumer>
  {({theme}) => {
    return <p>What is the default text color {theme.textColors.colorText}</p>;
  }}
</Theme.Consumer>
```

### Paste useTheme Hook

Paste Theme provides a React Hook called `useTheme` which returns the theme object from the React Context via the Theme Provider.

```js
import React from 'react';
import { useTheme } from '@twilio-paste/theme';

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p>What is the default text color {theme.textColors.colorText}</p>;
};
```

### Higher Order Component

Paste also provides a HOC Component, which is a wrapper around the Emotion [HOC Component](https://emotion.sh/docs/emotion-theming#withthemecomponent-reactcomponenttype-reactcomponenttype) to be able to access the theme object.

```js
import React from 'react';
import { withTheme } from '@twilio-paste/theme';

const ExampleComponent = ({theme}) => (
  <p>What is the default text color {theme.textColors.colorText}</p>
);
const ExampleComponentwithTheme = withTheme(ExampleComponent);
```
