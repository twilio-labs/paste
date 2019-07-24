# Button

## Installation

```
yarn add @twilio-paste/button
```

## Usage

```js
import {Button} from '@twilio-paste/button';

<Button variant="secondary" size="small" onClick={() => {}}>
  Submit
</Button>;
```

### Props

| Prop           | Type                                   | Description                                                                         | Default   |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------- | --------- |
| type?          | string                                 | If the button is inside a `<form>`: use 'submit'. Otherwise use 'button' (default). | 'button'  |
| as?            | string                                 | The HTML tag to replace the default `<button>` tag.                                 | 'button'  |
| href?          | string                                 | A URL to route to. Must use `as="a"` for this prop to work.                         | null      |
| variant?       | ButtonVariants                         | 'primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset'          | 'primary' |
| size?          | ButtonSizes                            | 'default', 'small', 'icon', 'reset'                                                 | 'default' |
| fullWidth      | boolean                                | Sets the button width to 100% of the parent container.                              | false     |
| disabled?      | boolean                                | Prevent actions from firing on this button                                          | false     |
| loading?       | boolean                                | Prevent actions and show a loading spinner                                          | false     |
| onClick?       | (event: React.MouseEvent<HTMLElement>) |                                                                                     | null      |
| onMouseDown?   | (event: React.MouseEvent<HTMLElement>) |                                                                                     | null      |
| onMouseUp?     | (event: React.MouseEvent<HTMLElement>) |                                                                                     | null      |
| onMouseEnter?  | (event: React.MouseEvent<HTMLElement>) |                                                                                     | null      |
| onMouseLeave?  | (event: React.MouseEvent<HTMLElement>) |                                                                                     | null      |
| onFocus?       | (event: React.FocusEvent<HTMLElement>) |                                                                                     | null      |
| onBlur?        | (event: React.FocusEvent<HTMLElement>) |                                                                                     | null      |
| aria-expanded? | boolean                                | A11y: For accordions                                                                | null      |
| aria-haspopup? | {'true', 'dialog', 'menu'}             | A11y: For modals and menus                                                          | null      |
| aria-controls? | string                                 | A11y: For modals and menus                                                          | null      |
| data-test?     | string                                 | To detect the element to run tests against.                                         | null      |

## Changes from react-components-button

- The `btnStyle` prop is renamed to `variant`. The new values are:
  - "primary" (blue, filled)
  - "secondary" (blue, outlined)
  - "destructive" (red, filled)
  - "destructive_link" (a red link)
  - "link" (a blue link)
  - "reset" (all default styles removed)
- The `btnSize` prop is renamed to `size`. The new values are:
  - "default" (normal size, grows to content)
  - "small" (less padding than auto, grows to content)
  - "icon" (used for icon buttons only, balanced padding on all sides)
  - "reset" (no padding or any additional sizing is applied)
- The `ButtonPlus` component has been deprecated.
- Our new button component can be used as a link.
