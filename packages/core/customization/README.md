# Customization

The Paste `CustomizationProvider` leverages React's [Context](https://reactjs.org/docs/context.html) to provide the theme object to any descendant components in the tree. For that reason, we recommend wrapping your application at the root level with the Paste `CustomizationProvider`. This allows all sub-components to retrieve the correct token value for the supplied theme.

```js
import {CustomizationProvider} from '@twilio-paste/customization';

<CustomizationProvider theme={{}}>
  <App />
</CustomizationProvider>
```
