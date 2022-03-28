# Anchor

## Installation

```
yarn add @twilio-paste/anchor
```

## Usage

```js
import {Anchor} from '@twilio-paste/anchor';

<Anchor href="/app">
  Link Text
</Anchor>
```

### Props

| Prop           | Type                                   | Description                                                                         | Default   |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------------- | --------- |
| href?          | string                                 | A URL to route to. Required.                                                                             | null      |
| tabindex?      | AnchorTabIndexes                       | '0', '-1'                                                                                                | null      |
| target?        | AnchorTargets                          | '_self', '_blank', '_parent', '_top'.  If external href, defaults to '_blank'. Can be overwritten.       | null      |
| rel?           | string                                 | Sets the anchor rel attribute. If external href, defaults to 'noreferrer noopener'. Can be overwritten.  | false     |
| onClick?       | (event: React.MouseEvent<HTMLElement>) |                                                                                                          | null      |
| onFocus?       | (event: React.FocusEvent<HTMLElement>) |                                                                                                          | null      |
| onBlur?        | (event: React.FocusEvent<HTMLElement>) |                                                                                                          | null      |
