# Change Log

## 9.6.3

### Patch Changes

- [`e43dec0e`](https://github.com/twilio-labs/paste/commit/e43dec0e611defd3ab3e89614b4d57bb33cf481d) [#1594](https://github.com/twilio-labs/paste/pull/1594) Thanks [@TheSisb](https://github.com/TheSisb)! - Minifies output to commonJS and ES6 token files

- Updated dependencies [[`e43dec0e`](https://github.com/twilio-labs/paste/commit/e43dec0e611defd3ab3e89614b4d57bb33cf481d)]:
  - @twilio-paste/design-tokens@6.9.1

## 9.6.2

### Patch Changes

- [`a7954e29`](https://github.com/twilio-labs/paste/commit/a7954e290af91fa7deba991e554c3ecb838612da) [#1567](https://github.com/twilio-labs/paste/pull/1567) Thanks [@TheSisb](https://github.com/TheSisb)! - **Tabs**: Horizontal tabs now have center-aligned inner text.

- Updated dependencies [[`a7954e29`](https://github.com/twilio-labs/paste/commit/a7954e290af91fa7deba991e554c3ecb838612da)]:
  - @twilio-paste/tabs@2.0.5

## 9.6.1

### Patch Changes

- [`5e770d20`](https://github.com/twilio-labs/paste/commit/5e770d200ebef1f18b67e6861407e8c092503c57) [#1558](https://github.com/twilio-labs/paste/pull/1558) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixes a bug where Toasts may not display using the provided Toaster for users with the system flag "prefers-reduced-motion"

- Updated dependencies [[`5e770d20`](https://github.com/twilio-labs/paste/commit/5e770d200ebef1f18b67e6861407e8c092503c57)]:
  - @twilio-paste/toast@5.0.2

## 9.6.0

### Minor Changes

- [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Created the Date Picker component

### Patch Changes

- [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Added type 'date' to Input types for date picker component

* [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d) [#1499](https://github.com/twilio-labs/paste/pull/1499) Thanks [@nkrantz](https://github.com/nkrantz)! - Added type 'date' to Input-Box types for date picker component

* Updated dependencies [[`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d), [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d), [`ed8e7ccf`](https://github.com/twilio-labs/paste/commit/ed8e7ccfc8a0d4a6aa18e8741796496690459b5d)]:
  - @twilio-paste/input@3.0.7
  - @twilio-paste/input-box@4.0.6
  - @twilio-paste/date-picker@0.1.0

## 9.5.0

### Minor Changes

- [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Added two new icons for light and dark mode

* [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Adding a body background color for purposes of applying the color background body design token so that you can see the affect it has when theming the website

- [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04) [#1434](https://github.com/twilio-labs/paste/pull/1434) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design-tokens]: Added two extra brand based background tokens. Update the new design tokens for better dark mode contrast.

  Renamed black aliases in the dark theme as they are not palette colors.

  Updated meta data for weak and strong design tokens to reflect their new naming convention

### Patch Changes

- [`2db8bf96`](https://github.com/twilio-labs/paste/commit/2db8bf963c2fc34e191aa3bfec5c0a0e95e7c72f) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Changed disabled box shadows to use correct shadow-border-weak token.

* [`fa48e8dd`](https://github.com/twilio-labs/paste/commit/fa48e8ddf03325d0effb4b1a0201dbf5fd207e71) [#1489](https://github.com/twilio-labs/paste/pull/1489) Thanks [@richbachman](https://github.com/richbachman)! - Added missing dependencies.

- [`f551079a`](https://github.com/twilio-labs/paste/commit/f551079ad141a06532e4d1bcd1c0d4ef7f6f226d) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Fixed shadow-border, shadow-border-weak, shadow-border-weaker, shadow-border-strong values to match respective color-border-\* values in all themes.

  Shadow-border-stronger token has been removed in all themes.

  **Default theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border-weak   | NA                   | palette-gray-30 |
  | shadow-border-weaker | NA                   | palette-gray-20 |
  | shadow-border-strong | palette-gray-30      | palette-gray-60 |

  **Console theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border-weak   | NA                   | palette-gray-50 |
  | shadow-border-weaker | NA                   | palette-gray-40 |
  | shadow-border-strong | palette-gray-40      | palette-gray-60 |

  **Dark theme**

  | Token                | Original color value | New color value |
  | -------------------- | -------------------- | --------------- |
  | shadow-border        | palette-gray-50      | palette-gray-60 |
  | shadow-border-weak   | NA                   | palette-gray-70 |
  | shadow-border-weaker | NA                   | palette-gray-80 |
  | shadow-border-strong | palette-gray-90      | palette-gray-50 |

* [`f640550a`](https://github.com/twilio-labs/paste/commit/f640550a7306806feaedfd7c3184cad4327cc8a8) [#1489](https://github.com/twilio-labs/paste/pull/1489) Thanks [@richbachman](https://github.com/richbachman)! - Changed box-shadow for ModalDialogContent to use shadow token instead of shadow-card.

- [`104628b3`](https://github.com/twilio-labs/paste/commit/104628b358b773df6f5afc885252eaa64f311c97) [#1505](https://github.com/twilio-labs/paste/pull/1505) Thanks [@richbachman](https://github.com/richbachman)! - Changed default and disabled secondary button box shadow and text color styles to match Figma design files.

- Updated dependencies [[`2db8bf96`](https://github.com/twilio-labs/paste/commit/2db8bf963c2fc34e191aa3bfec5c0a0e95e7c72f), [`fa48e8dd`](https://github.com/twilio-labs/paste/commit/fa48e8ddf03325d0effb4b1a0201dbf5fd207e71), [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04), [`c42f86ca`](https://github.com/twilio-labs/paste/commit/c42f86ca2b652e7876188e94a8acab63d486ab04), [`f551079a`](https://github.com/twilio-labs/paste/commit/f551079ad141a06532e4d1bcd1c0d4ef7f6f226d), [`f640550a`](https://github.com/twilio-labs/paste/commit/f640550a7306806feaedfd7c3184cad4327cc8a8), [`104628b3`](https://github.com/twilio-labs/paste/commit/104628b358b773df6f5afc885252eaa64f311c97)]:
  - @twilio-paste/input-box@4.0.5
  - @twilio-paste/alert-dialog@0.1.1
  - @twilio-paste/theme@5.2.0
  - @twilio-paste/design-tokens@6.9.0
  - @twilio-paste/modal@7.1.1
  - @twilio-paste/button@7.0.4

## 9.4.0

### Minor Changes

- [`d27dc745`](https://github.com/twilio-labs/paste/commit/d27dc7455c221daefb8ee8cf9b209ebb16833e4e) [#1484](https://github.com/twilio-labs/paste/pull/1484) Thanks [@gloriliale](https://github.com/gloriliale)! - Created an alert dialog component

* [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3) [#1509](https://github.com/twilio-labs/paste/pull/1509) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [customization]: add ability for customization provider to accept an elements prop which it then merges into the styled theme context.

  Also add the ability to choose which base theme is used when customizing a theme, for use in programmable apps. You can choose from Default or Dark theme as your starting point.

- [`f6f26815`](https://github.com/twilio-labs/paste/commit/f6f26815528b073237b7fd591064abee29f48427) [#1484](https://github.com/twilio-labs/paste/pull/1484) Thanks [@gloriliale](https://github.com/gloriliale)! - Created style file for stylings of the Modal so they can be used in other components, like Alert Dialog.

### Patch Changes

- [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3) [#1509](https://github.com/twilio-labs/paste/pull/1509) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [styling-library]: export some types from styled-system to help with custom styling tasks

- Updated dependencies [[`d27dc745`](https://github.com/twilio-labs/paste/commit/d27dc7455c221daefb8ee8cf9b209ebb16833e4e), [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3), [`5b26f9bf`](https://github.com/twilio-labs/paste/commit/5b26f9bf2c7000b0fdf655a3ab79482c210b94c3), [`f6f26815`](https://github.com/twilio-labs/paste/commit/f6f26815528b073237b7fd591064abee29f48427)]:
  - @twilio-paste/alert-dialog@0.1.0
  - @twilio-paste/customization@2.1.0
  - @twilio-paste/styling-library@0.3.3
  - @twilio-paste/modal@7.1.0

## 9.3.5

### Patch Changes

- [`79a9dfba`](https://github.com/twilio-labs/paste/commit/79a9dfbaf60c13bd4985c7d30017d9db5b8c7c76) [#1487](https://github.com/twilio-labs/paste/pull/1487) Thanks [@TheSisb](https://github.com/TheSisb)! - DisclosureHeading now gracefully handles children and doesn't impose flex behavior. This makes it easier to pass MediaObjects and Truncate as children.

* [`eab3fd93`](https://github.com/twilio-labs/paste/commit/eab3fd9384510a7aa35c6f5244e8d0431144197b) [#1501](https://github.com/twilio-labs/paste/pull/1501) Thanks [@richbachman](https://github.com/richbachman)! - MenuItem now renders as a `button` by default. In order to render it as an `a`, and `href` needs to be passed.

* Updated dependencies [[`79a9dfba`](https://github.com/twilio-labs/paste/commit/79a9dfbaf60c13bd4985c7d30017d9db5b8c7c76), [`eab3fd93`](https://github.com/twilio-labs/paste/commit/eab3fd9384510a7aa35c6f5244e8d0431144197b)]:
  - @twilio-paste/disclosure@5.0.6
  - @twilio-paste/menu@7.0.2

## 9.3.4

### Patch Changes

- [`b1dd8b0c`](https://github.com/twilio-labs/paste/commit/b1dd8b0c385e59c35c4655479d862864db4d8e7b) [#1478](https://github.com/twilio-labs/paste/pull/1478) Thanks [@richbachman](https://github.com/richbachman)! - Fixed the `required` prop not being passed to the `textbox` inside Combobox.

* [`45c24b01`](https://github.com/twilio-labs/paste/commit/45c24b01aeabf3db34868c4f0ae91b49a0493169) [#1479](https://github.com/twilio-labs/paste/pull/1479) Thanks [@TheSisb](https://github.com/TheSisb)! - Fix a bug where `null` children to a Stack causes extra margin to be appended at the end.

* Updated dependencies [[`b1dd8b0c`](https://github.com/twilio-labs/paste/commit/b1dd8b0c385e59c35c4655479d862864db4d8e7b), [`45c24b01`](https://github.com/twilio-labs/paste/commit/45c24b01aeabf3db34868c4f0ae91b49a0493169)]:
  - @twilio-paste/combobox@7.0.3
  - @twilio-paste/stack@2.0.4

## 9.3.3

### Patch Changes

- [`b9e74f3a`](https://github.com/twilio-labs/paste/commit/b9e74f3ab15066381f2c99db5d49cc9adb960572) [#1466](https://github.com/twilio-labs/paste/pull/1466) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Flex]: correctly allow layout style props to be applied to the Flex component including width and height

- Updated dependencies [[`b9e74f3a`](https://github.com/twilio-labs/paste/commit/b9e74f3ab15066381f2c99db5d49cc9adb960572)]:
  - @twilio-paste/flex@2.0.4

## 9.3.2

### Patch Changes

- [`456e7210`](https://github.com/twilio-labs/paste/commit/456e72109c31677adad53383084cd052f22b1e52) [#1464](https://github.com/twilio-labs/paste/pull/1464) Thanks [@richbachman](https://github.com/richbachman)! - Bumped the version of React-Spring to 9.1.2 in order to fix a TS issue.

* [`dd759feb`](https://github.com/twilio-labs/paste/commit/dd759febfa25e5d6823f280a1896635be2ba6376) [#1464](https://github.com/twilio-labs/paste/pull/1464) Thanks [@richbachman](https://github.com/richbachman)! - Bumped the version of Reach/Dialog to 0.15.0

* Updated dependencies [[`456e7210`](https://github.com/twilio-labs/paste/commit/456e72109c31677adad53383084cd052f22b1e52), [`dd759feb`](https://github.com/twilio-labs/paste/commit/dd759febfa25e5d6823f280a1896635be2ba6376)]:
  - @twilio-paste/animation-library@0.3.2
  - @twilio-paste/modal-dialog-primitive@0.2.3

## 9.3.1

### Patch Changes

- [`46495f48`](https://github.com/twilio-labs/paste/commit/46495f48ec005ff0971fb41e5fa76df53503aa84) [#1454](https://github.com/twilio-labs/paste/pull/1454) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add a background color to disclosure content for when it is placed on top of a background color that is not the body color

- Updated dependencies [[`46495f48`](https://github.com/twilio-labs/paste/commit/46495f48ec005ff0971fb41e5fa76df53503aa84)]:
  - @twilio-paste/disclosure@5.0.5

## 9.3.0

### Minor Changes

- [`62f7fd3e`](https://github.com/twilio-labs/paste/commit/62f7fd3e3da78bca128aa2287c61d19248a2025d) [#1451](https://github.com/twilio-labs/paste/pull/1451) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [design-tokens] Adding for availability tokens to display entity status such as available, offline and busy

### Patch Changes

- Updated dependencies [[`62f7fd3e`](https://github.com/twilio-labs/paste/commit/62f7fd3e3da78bca128aa2287c61d19248a2025d)]:
  - @twilio-paste/design-tokens@6.8.0

## 9.2.4

### Patch Changes

- [`2086d9a2`](https://github.com/twilio-labs/paste/commit/2086d9a2cc592a4c9ac7ce07ab00a8592bcdba6a) [#1448](https://github.com/twilio-labs/paste/pull/1448) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Fix coloring the checkmark of a checkbox when interacting with it

* [`80529764`](https://github.com/twilio-labs/paste/commit/8052976482f1a7ad412e68959e5bf7e186a5c318) [#1431](https://github.com/twilio-labs/paste/pull/1431) Thanks [@richbachman](https://github.com/richbachman)! - Added a margin reset (`margin: space0`) to fix a bug in Safari where a 2px margin is added by the browser.

* Updated dependencies [[`2086d9a2`](https://github.com/twilio-labs/paste/commit/2086d9a2cc592a4c9ac7ce07ab00a8592bcdba6a), [`80529764`](https://github.com/twilio-labs/paste/commit/8052976482f1a7ad412e68959e5bf7e186a5c318)]:
  - @twilio-paste/checkbox@6.0.5
  - @twilio-paste/button@7.0.3
  - @twilio-paste/input@3.0.6
  - @twilio-paste/select@5.0.4

## 9.2.3

### Patch Changes

- [`b98b3713`](https://github.com/twilio-labs/paste/commit/b98b371315b09a5697be6f56611e428d0e6e377f) [#1426](https://github.com/twilio-labs/paste/pull/1426) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add the ability to warn consumers that they are using a deprecated Design Token using prop type validation on the Box and Text component

- Updated dependencies [[`b98b3713`](https://github.com/twilio-labs/paste/commit/b98b371315b09a5697be6f56611e428d0e6e377f)]:
  - @twilio-paste/box@4.0.7
  - @twilio-paste/text@4.0.4
  - @twilio-paste/style-props@3.0.6

## 9.2.2

### Patch Changes

- [`37f82857`](https://github.com/twilio-labs/paste/commit/37f82857ef5046156931a22e2431aed49629ff63) [#1424](https://github.com/twilio-labs/paste/pull/1424) Thanks [@TheSisb](https://github.com/TheSisb)! - Added the "overflowWrap" prop to Box

* [`3668591b`](https://github.com/twilio-labs/paste/commit/3668591bf9898b7770adb1f33c809c12798eb6e7) [#1424](https://github.com/twilio-labs/paste/pull/1424) Thanks [@TheSisb](https://github.com/TheSisb)! - Added overflowWrap to the Typography styled prop bucket

* Updated dependencies [[`37f82857`](https://github.com/twilio-labs/paste/commit/37f82857ef5046156931a22e2431aed49629ff63), [`3668591b`](https://github.com/twilio-labs/paste/commit/3668591bf9898b7770adb1f33c809c12798eb6e7)]:
  - @twilio-paste/box@4.0.6
  - @twilio-paste/style-props@3.0.5

## 9.2.1

### Patch Changes

- [`41a3da0e`](https://github.com/twilio-labs/paste/commit/41a3da0e00bc8bea9927ef38f59e84b606239320) [#1407](https://github.com/twilio-labs/paste/pull/1407) Thanks [@richbachman](https://github.com/richbachman)! - - Added background color to `PaginationArrow` on hover.
  - Added disabled prop to `PaginationArrow` which sets `aria-hidden` to true and `visibility: none`.
  - Added left and right padding to `PaginationNumbers` to help center with longer page labels.
- Updated dependencies [[`41a3da0e`](https://github.com/twilio-labs/paste/commit/41a3da0e00bc8bea9927ef38f59e84b606239320)]:
  - @twilio-paste/pagination@0.1.2

## 9.2.0

### Minor Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Add a dark theme to Paste

* [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Design tokens that are named using the light / dark nomenclature are being deprecated in favour of a new set of tokens based on a weak / strong nomenclature to accommodate light and dark modes.

  If you are using these tokens with our `Box` or `Text` component, these will still work for now but we will be removing them in the 2021.11.16 release of Paste. In most cases replacing `dark` for `strong` and `light` for `weak` is all that is required to transition.

  Design tokens that are being deprecated include:

  | old                                   | new                                    |
  | ------------------------------------- | -------------------------------------- |
  | color-background-dark                 | color-background-strong                |
  | color-background-darker               | color-background-stronger              |
  | color-background-darkest              | color-background-strongest             |
  | color-background-inverse-light        | color-background-inverse-weak          |
  | color-background-neutral-lightest     | color-background-neutral-weakest       |
  | color-background-success-lightest     | color-background-success-weakest       |
  | color-background-warning-lightest     | color-background-warning-weakest       |
  | color-background-error-dark           | color-background-error-strong          |
  | color-background-error-lightest       | color-background-error-weakest         |
  | color-background-primary-darkest      | color-background-primary-strongest     |
  | color-background-primary-darker       | color-background-primary-stronger      |
  | color-background-primary-dark         | color-background-primary-strong        |
  | color-background-primary-light        | color-background-primary-weak          |
  | color-background-primary-lighter      | color-background-primary-weaker        |
  | color-background-primary-lightest     | color-background-primary-weakest       |
  | color-background-destructive-darkest  | color-background-destructive-strongest |
  | color-background-destructive-darker   | color-background-destructive-stronger  |
  | color-background-destructive-dark     | color-background-destructive-strong    |
  | color-background-destructive-light    | color-background-destructive-weak      |
  | color-background-destructive-lighter  | color-background-destructive-weaker    |
  | color-background-destructive-lightest | color-background-destructive-weakest   |

  | old                              | new                                |
  | -------------------------------- | ---------------------------------- |
  | color-border-dark                | color-border-strong                |
  | color-border-light               | color-border-weak                  |
  | color-border-lighter             | color-border-weaker                |
  | color-border-inverse-darker      | color-border-inverse-weaker        |
  | color-border-inverse-lighter     | color-border-inverse-stronger      |
  | color-border-inverse-lightest    | color-border-inverse-strongest     |
  | color-border-primary-darkest     | color-border-primary-strongest     |
  | color-border-primary-darker      | color-border-primary-stronger      |
  | color-border-primary-dark        | color-border-primary-strong        |
  | color-border-primary-light       | color-border-primary-weak          |
  | color-border-primary-lighter     | color-border-primary-weaker        |
  | color-border-neutral-light       | color-border-neutral-weak          |
  | color-border-success-light       | color-border-success-weak          |
  | color-border-success-lightest    | color-border-success-weakest       |
  | color-border-warning-light       | color-border-warning-weak          |
  | color-border-warning-lightest    | color-border-warning-weakest       |
  | color-border-error-dark          | color-border-error-strong          |
  | color-border-error-light         | color-border-error-weak            |
  | color-border-error-lightest      | color-border-error-weakest         |
  | color-border-destructive-darkest | color-border-destructive-strongest |
  | color-border-destructive-darker  | color-border-destructive-stronger  |
  | color-border-destructive-dark    | color-border-destructive-strong    |
  | color-border-destructive-light   | color-border-destructive-weak      |
  | color-border-destructive-lighter | color-border-destructive-weaker    |

  | old                               | new                                |
  | --------------------------------- | ---------------------------------- |
  | shadow-border-lighter             | shadow-border-weaker               |
  | shadow-border-light               | shadow-border-weak                 |
  | shadow-border-primary-lighter     | shadow-border-primary-weaker       |
  | shadow-border-primary-light       | shadow-border-primary-weak         |
  | shadow-border-primary-dark        | shadow-border-primary-strong       |
  | shadow-border-primary-darker      | shadow-border-primary-stronger     |
  | shadow-border-destructive-lighter | shadow-border-destructive-weaker   |
  | shadow-border-destructive-light   | shadow-border-destructive-weak     |
  | shadow-border-destructive-darker  | shadow-border-destructive-stronger |
  | shadow-border-error-light         | shadow-border-error-weak           |
  | shadow-border-error-dark          | shadow-border-error-strong         |
  | shadow-border-inverse-darker      | shadow-border-inverse-weaker       |
  | shadow-border-inverse-light       | shadow-border-inverse-strong       |
  | shadow-border-inverse-lightest    | shadow-border-inverse-strongest    |

  | old                                | new                                  |
  | ---------------------------------- | ------------------------------------ |
  | color-text-link-light              | color-text-link-weak                 |
  | color-text-link-dark               | color-text-link-strong               |
  | color-text-link-darker             | color-text-link-stronger             |
  | color-text-link-destructive-light  | color-text-link-destructive-weak     |
  | color-text-link-destructive-dark   | color-text-link-destructive-strong   |
  | color-text-link-destructive-darker | color-text-link-destructive-stronger |
  | color-text-error-light             | color-text-error-weak                |
  | color-text-error-dark              | color-text-error-strong              |
  | color-text-warning-dark            | color-text-warning-strong            |

### Patch Changes

- [`87fc9178`](https://github.com/twilio-labs/paste/commit/87fc91784c86d25f619aa49a9f0586d9e3be97d0) [#1408](https://github.com/twilio-labs/paste/pull/1408) Thanks [@richbachman](https://github.com/richbachman)! - Fix disabled value color in Safari.

* [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a) [#1398](https://github.com/twilio-labs/paste/pull/1398) Thanks [@zahnster](https://github.com/zahnster)! - Updated font weights for all form components to make them bolder

- [`df6d8f1d`](https://github.com/twilio-labs/paste/commit/df6d8f1dcff6a17c96976b7b54a5702ec3d09f76) [#1408](https://github.com/twilio-labs/paste/pull/1408) Thanks [@richbachman](https://github.com/richbachman)! - Added `-webkit-text-fill-color` and enable it to use Paste textColor token values.

* [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - add ability to set transparent to color style prop

- Updated dependencies [[`87fc9178`](https://github.com/twilio-labs/paste/commit/87fc91784c86d25f619aa49a9f0586d9e3be97d0), [`4d3fd7df`](https://github.com/twilio-labs/paste/commit/4d3fd7dfbdd410bee1e91805382280cd879f141a), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca), [`df6d8f1d`](https://github.com/twilio-labs/paste/commit/df6d8f1dcff6a17c96976b7b54a5702ec3d09f76), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca), [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca)]:
  - @twilio-paste/input@3.0.5
  - @twilio-paste/textarea@3.0.5
  - @twilio-paste/base-radio-checkbox@6.0.3
  - @twilio-paste/checkbox@6.0.4
  - @twilio-paste/label@6.0.3
  - @twilio-paste/select@5.0.3
  - @twilio-paste/design-tokens@6.7.0
  - @twilio-paste/theme@5.1.0
  - @twilio-paste/styling-library@0.3.2
  - @twilio-paste/alert@7.0.1
  - @twilio-paste/anchor@5.0.3
  - @twilio-paste/button@7.0.2
  - @twilio-paste/card@3.0.4
  - @twilio-paste/combobox@7.0.2
  - @twilio-paste/disclosure@5.0.4
  - @twilio-paste/help-text@6.0.3
  - @twilio-paste/input-box@4.0.4
  - @twilio-paste/menu@7.0.1
  - @twilio-paste/modal@7.0.1
  - @twilio-paste/popover@6.0.1
  - @twilio-paste/pagination@0.1.1
  - @twilio-paste/radio-group@6.0.4
  - @twilio-paste/separator@2.0.4
  - @twilio-paste/table@2.0.4
  - @twilio-paste/tabs@2.0.4
  - @twilio-paste/toast@5.0.1
  - @twilio-paste/tooltip@4.0.3
  - @twilio-paste/aspect-ratio@4.0.4
  - @twilio-paste/grid@2.0.4
  - @twilio-paste/box@4.0.5
  - @twilio-paste/text@4.0.3
  - @twilio-paste/style-props@3.0.4

## 9.1.0

### Minor Changes

- [`ed40d4de`](https://github.com/twilio-labs/paste/commit/ed40d4decd4c04a1f0e77a1f9d8f0237a3a26610) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Pagination: added the pagination componenents, stories, and tests.

### Patch Changes

- [`0f6b4728`](https://github.com/twilio-labs/paste/commit/0f6b4728abb2de315d03c0c009c1872b7cece045) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Style-props: added `inherit` to the typed `border-color` options.

* [`8fe6a2f4`](https://github.com/twilio-labs/paste/commit/8fe6a2f45cb3b03643da70ad1b4c8dd1eda426d8) [#1368](https://github.com/twilio-labs/paste/pull/1368) Thanks [@richbachman](https://github.com/richbachman)! - Box: added `font-variant-numeric` prop so we can control the usage of alternate glyphs for numbers, fractions, and ordinal markers.

* Updated dependencies [[`0f6b4728`](https://github.com/twilio-labs/paste/commit/0f6b4728abb2de315d03c0c009c1872b7cece045), [`ed40d4de`](https://github.com/twilio-labs/paste/commit/ed40d4decd4c04a1f0e77a1f9d8f0237a3a26610), [`8fe6a2f4`](https://github.com/twilio-labs/paste/commit/8fe6a2f45cb3b03643da70ad1b4c8dd1eda426d8)]:
  - @twilio-paste/style-props@3.0.3
  - @twilio-paste/pagination@0.1.0
  - @twilio-paste/box@4.0.4

## 9.0.3

### Patch Changes

- [`7bfaff38`](https://github.com/twilio-labs/paste/commit/7bfaff381bc03a404aa0340cd487fba12527ad56) [#1390](https://github.com/twilio-labs/paste/pull/1390) Thanks [@TheSisb](https://github.com/TheSisb)! - Combobox: improve accessibility of hovered combobox option by keeping it the same color.

- Updated dependencies [[`7bfaff38`](https://github.com/twilio-labs/paste/commit/7bfaff381bc03a404aa0340cd487fba12527ad56)]:
  - @twilio-paste/combobox@7.0.1

## 9.0.2

### Patch Changes

- [`64edb7fc`](https://github.com/twilio-labs/paste/commit/64edb7fc6d1305c9fdf37b86933484732fab3ff7) [#1367](https://github.com/twilio-labs/paste/pull/1367) Thanks [@nkrantz](https://github.com/nkrantz)! - Restricted Avatar propTypes so that users cannot add both `src` and `icon` props to Avatar, only one or the other.

* [`174be6d9`](https://github.com/twilio-labs/paste/commit/174be6d968c5b4e4c8973a88e0491f45496b15d9) [#1363](https://github.com/twilio-labs/paste/pull/1363) Thanks [@TheSisb](https://github.com/TheSisb)! - Buttons that behave as links (`<Button as="a" href="">`) now correctly use the external link icon for external links.

- [`35d9dfda`](https://github.com/twilio-labs/paste/commit/35d9dfdafff3e5e7b05fa46d600d2d3f0851a6b1) [#1332](https://github.com/twilio-labs/paste/pull/1332) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixed truncation on Disclosure headings when using Truncate component

* [`fd8cbb89`](https://github.com/twilio-labs/paste/commit/fd8cbb89a9459fd5e012cba8f45060ad2e384e24) [#1345](https://github.com/twilio-labs/paste/pull/1345) Thanks [@gloriliale](https://github.com/gloriliale)! - Avatar: fixed size prop to make it optional and have a default of icon-size-70.

* Updated dependencies [[`64edb7fc`](https://github.com/twilio-labs/paste/commit/64edb7fc6d1305c9fdf37b86933484732fab3ff7), [`174be6d9`](https://github.com/twilio-labs/paste/commit/174be6d968c5b4e4c8973a88e0491f45496b15d9), [`35d9dfda`](https://github.com/twilio-labs/paste/commit/35d9dfdafff3e5e7b05fa46d600d2d3f0851a6b1), [`fd8cbb89`](https://github.com/twilio-labs/paste/commit/fd8cbb89a9459fd5e012cba8f45060ad2e384e24)]:
  - @twilio-paste/avatar@2.1.1
  - @twilio-paste/button@7.0.1
  - @twilio-paste/disclosure@5.0.3

## 9.0.1

### Patch Changes

- [`1a7bb349`](https://github.com/twilio-labs/paste/commit/1a7bb349186cdd2d131d44f0a22996a7df61e8c3) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [RadioGroup] Added optional `value` string prop which this component needs and is no longer on the extended `InlineControlGroup` interface.

* [`5e08f10d`](https://github.com/twilio-labs/paste/commit/5e08f10da50f13c057bb20a7208fcfb7ff08d6ad) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Checkbox] Remove unused `value` prop.

- [`9df657df`](https://github.com/twilio-labs/paste/commit/9df657df7e4994dee1b0dfa9071f8f50041adb0c) [#974](https://github.com/twilio-labs/paste/pull/974) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [InlineControlGroup] Adjusted the vertical spacing of `children`. This change improve the handling of RadioGroup and CheckboxGroup children.

* [`d000a4e4`](https://github.com/twilio-labs/paste/commit/d000a4e4c88bc0d3dd67532df937b805191fe4c0) [#1333](https://github.com/twilio-labs/paste/pull/1333) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Paragraph] allow for global HTML attriutes to be passed to the paragraph element

* Updated dependencies [[`1a7bb349`](https://github.com/twilio-labs/paste/commit/1a7bb349186cdd2d131d44f0a22996a7df61e8c3), [`5e08f10d`](https://github.com/twilio-labs/paste/commit/5e08f10da50f13c057bb20a7208fcfb7ff08d6ad), [`9df657df`](https://github.com/twilio-labs/paste/commit/9df657df7e4994dee1b0dfa9071f8f50041adb0c), [`d000a4e4`](https://github.com/twilio-labs/paste/commit/d000a4e4c88bc0d3dd67532df937b805191fe4c0)]:
  - @twilio-paste/radio-group@6.0.3
  - @twilio-paste/checkbox@6.0.3
  - @twilio-paste/inline-control-group@6.0.3
  - @twilio-paste/paragraph@4.0.3

## 9.0.0

### Major Changes

- [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200) [#1307](https://github.com/twilio-labs/paste/pull/1307) Thanks [@TheSisb](https://github.com/TheSisb)! - BREAKING CHANGES:

  Button components used as links (as="a" and href="") now automatically add an arrow icon if children is a string. This is a design breaking change that you should be aware of when upgrading.

  Button also adds additional validation to throw an error if the `disabled` or `loading` props are set to `true` for a Button as link. This is a functionality breaking change to existing disabled link buttons.

### Minor Changes

- [`3419ff64`](https://github.com/twilio-labs/paste/commit/3419ff64a07056ae365956d03ec62f1e5e619f29) [#1281](https://github.com/twilio-labs/paste/pull/1281) Thanks [@nkrantz](https://github.com/nkrantz)! - Created an 'icon' prop on Avatar so that users can display Paste icons inside of Avatar components.

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200), [`3419ff64`](https://github.com/twilio-labs/paste/commit/3419ff64a07056ae365956d03ec62f1e5e619f29)]:
  - @twilio-paste/alert@7.0.0
  - @twilio-paste/anchor@5.0.2
  - @twilio-paste/avatar@2.1.0
  - @twilio-paste/base-radio-checkbox@6.0.2
  - @twilio-paste/breadcrumb@4.0.2
  - @twilio-paste/button@7.0.0
  - @twilio-paste/card@3.0.3
  - @twilio-paste/checkbox@6.0.2
  - @twilio-paste/combobox@7.0.0
  - @twilio-paste/disclosure@5.0.2
  - @twilio-paste/heading@5.0.2
  - @twilio-paste/help-text@6.0.2
  - @twilio-paste/inline-control-group@6.0.2
  - @twilio-paste/input@3.0.4
  - @twilio-paste/input-box@4.0.3
  - @twilio-paste/label@6.0.2
  - @twilio-paste/list@2.0.2
  - @twilio-paste/menu@7.0.0
  - @twilio-paste/modal@7.0.0
  - @twilio-paste/paragraph@4.0.2
  - @twilio-paste/popover@6.0.0
  - @twilio-paste/radio-group@6.0.2
  - @twilio-paste/screen-reader-only@6.0.2
  - @twilio-paste/select@5.0.2
  - @twilio-paste/separator@2.0.3
  - @twilio-paste/spinner@7.0.2
  - @twilio-paste/table@2.0.3
  - @twilio-paste/tabs@2.0.3
  - @twilio-paste/textarea@3.0.4
  - @twilio-paste/toast@5.0.0
  - @twilio-paste/tooltip@4.0.2
  - @twilio-paste/truncate@6.0.2
  - @twilio-paste/aspect-ratio@4.0.3
  - @twilio-paste/flex@2.0.3
  - @twilio-paste/grid@2.0.3
  - @twilio-paste/media-object@4.0.3
  - @twilio-paste/stack@2.0.3
  - @twilio-paste/box@4.0.3
  - @twilio-paste/combobox-primitive@0.2.4
  - @twilio-paste/disclosure-primitive@0.3.4
  - @twilio-paste/menu-primitive@0.2.4
  - @twilio-paste/non-modal-dialog-primitive@0.3.4
  - @twilio-paste/sibling-box@3.0.3
  - @twilio-paste/tabs-primitive@0.2.3
  - @twilio-paste/text@4.0.2
  - @twilio-paste/tooltip-primitive@0.2.4
  - @twilio-paste/customization@2.0.2
  - @twilio-paste/style-props@3.0.2
  - @twilio-paste/theme@5.0.2

## 8.0.2

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/alert@6.0.1
  - @twilio-paste/anchor@5.0.1
  - @twilio-paste/avatar@2.0.2
  - @twilio-paste/base-radio-checkbox@6.0.1
  - @twilio-paste/breadcrumb@4.0.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/card@3.0.2
  - @twilio-paste/checkbox@6.0.1
  - @twilio-paste/combobox@6.0.1
  - @twilio-paste/disclosure@5.0.1
  - @twilio-paste/heading@5.0.1
  - @twilio-paste/help-text@6.0.1
  - @twilio-paste/inline-control-group@6.0.1
  - @twilio-paste/input@3.0.3
  - @twilio-paste/input-box@4.0.2
  - @twilio-paste/label@6.0.1
  - @twilio-paste/list@2.0.1
  - @twilio-paste/menu@6.0.1
  - @twilio-paste/modal@6.0.1
  - @twilio-paste/paragraph@4.0.1
  - @twilio-paste/popover@5.0.1
  - @twilio-paste/radio-group@6.0.1
  - @twilio-paste/screen-reader-only@6.0.1
  - @twilio-paste/select@5.0.1
  - @twilio-paste/separator@2.0.2
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/table@2.0.2
  - @twilio-paste/tabs@2.0.2
  - @twilio-paste/textarea@3.0.3
  - @twilio-paste/toast@4.0.2
  - @twilio-paste/tooltip@4.0.1
  - @twilio-paste/truncate@6.0.1
  - @twilio-paste/aspect-ratio@4.0.2
  - @twilio-paste/flex@2.0.2
  - @twilio-paste/grid@2.0.2
  - @twilio-paste/media-object@4.0.2
  - @twilio-paste/stack@2.0.2
  - @twilio-paste/box@4.0.2
  - @twilio-paste/sibling-box@3.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/customization@2.0.1
  - @twilio-paste/style-props@3.0.1

## 8.0.1

### Patch Changes

- Updated dependencies [[`22410172`](https://github.com/twilio-labs/paste/commit/224101728b1c55d31408b0dccecb489ce6cd2319)]:
  - @twilio-paste/toast@4.0.1

## 8.0.0

### Patch Changes

- Updated dependencies [[`169089ce`](https://github.com/twilio-labs/paste/commit/169089cee859f40bf863e471745b867fd91c5837), [`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/popover@5.0.0
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/alert@6.0.0
  - @twilio-paste/anchor@5.0.0
  - @twilio-paste/base-radio-checkbox@6.0.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/checkbox@6.0.0
  - @twilio-paste/combobox@6.0.0
  - @twilio-paste/disclosure@5.0.0
  - @twilio-paste/help-text@6.0.0
  - @twilio-paste/inline-control-group@6.0.0
  - @twilio-paste/menu@6.0.0
  - @twilio-paste/modal@6.0.0
  - @twilio-paste/radio-group@6.0.0
  - @twilio-paste/screen-reader-only@6.0.0
  - @twilio-paste/select@5.0.0
  - @twilio-paste/spinner@7.0.0
  - @twilio-paste/toast@4.0.0
  - @twilio-paste/tooltip@4.0.0
  - @twilio-paste/truncate@6.0.0
  - @twilio-paste/breadcrumb@4.0.0
  - @twilio-paste/label@6.0.0

## 7.0.2

### Patch Changes

- Updated dependencies [[`12a669a3`](https://github.com/twilio-labs/paste/commit/12a669a33292915a71c0b83c1f7cf24d4cd28b8b), [`953f88bb`](https://github.com/twilio-labs/paste/commit/953f88bbb5476e5fdb66af3397634b8de822769f), [`7f909087`](https://github.com/twilio-labs/paste/commit/7f90908780ae4bdca709efb0b70644daa5942954), [`8992af4b`](https://github.com/twilio-labs/paste/commit/8992af4b834222581927b855fb0eed62630fafd0), [`14d33968`](https://github.com/twilio-labs/paste/commit/14d339680a7d3fb53b62b70762e4d2e786b473d6)]:
  - @twilio-paste/checkbox@5.0.2
  - @twilio-paste/textarea@3.0.2
  - @twilio-paste/select@4.0.2
  - @twilio-paste/radio-group@5.0.2
  - @twilio-paste/input@3.0.2
  - @twilio-paste/combobox@5.0.2

## 7.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/alert@5.0.1
  - @twilio-paste/anchor@4.0.1
  - @twilio-paste/avatar@2.0.1
  - @twilio-paste/base-radio-checkbox@5.0.1
  - @twilio-paste/breadcrumb@3.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/card@3.0.1
  - @twilio-paste/checkbox@5.0.1
  - @twilio-paste/combobox@5.0.1
  - @twilio-paste/disclosure@4.0.1
  - @twilio-paste/help-text@5.0.1
  - @twilio-paste/inline-control-group@5.0.1
  - @twilio-paste/input@3.0.1
  - @twilio-paste/input-box@4.0.1
  - @twilio-paste/label@5.0.1
  - @twilio-paste/menu@5.0.1
  - @twilio-paste/modal@5.0.1
  - @twilio-paste/popover@4.0.1
  - @twilio-paste/radio-group@5.0.1
  - @twilio-paste/screen-reader-only@5.0.1
  - @twilio-paste/select@4.0.1
  - @twilio-paste/separator@2.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/table@2.0.1
  - @twilio-paste/tabs@2.0.1
  - @twilio-paste/textarea@3.0.1
  - @twilio-paste/toast@3.0.1
  - @twilio-paste/tooltip@3.0.1
  - @twilio-paste/truncate@5.0.1
  - @twilio-paste/aspect-ratio@4.0.1
  - @twilio-paste/flex@2.0.1
  - @twilio-paste/grid@2.0.1
  - @twilio-paste/media-object@4.0.1
  - @twilio-paste/stack@2.0.1
  - @twilio-paste/sibling-box@3.0.1
  - @twilio-paste/icons@5.0.1

## 7.0.0

### Patch Changes

- Updated dependencies [[`083b31d2`](https://github.com/twilio-labs/paste/commit/083b31d262b9350626bab9a926c95f91c99a4e43), [`b1b4ac39`](https://github.com/twilio-labs/paste/commit/b1b4ac39ac70ec70bd9e150f2b8f94a123f1e1a6), [`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/checkbox@5.0.0
  - @twilio-paste/label@5.0.0
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/base-radio-checkbox@5.0.0
  - @twilio-paste/combobox@5.0.0
  - @twilio-paste/inline-control-group@5.0.0
  - @twilio-paste/radio-group@5.0.0
  - @twilio-paste/alert@5.0.0
  - @twilio-paste/anchor@4.0.0
  - @twilio-paste/avatar@2.0.0
  - @twilio-paste/breadcrumb@3.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/card@3.0.0
  - @twilio-paste/disclosure@4.0.0
  - @twilio-paste/heading@5.0.0
  - @twilio-paste/help-text@5.0.0
  - @twilio-paste/input@3.0.0
  - @twilio-paste/input-box@4.0.0
  - @twilio-paste/list@2.0.0
  - @twilio-paste/menu@5.0.0
  - @twilio-paste/modal@5.0.0
  - @twilio-paste/paragraph@4.0.0
  - @twilio-paste/popover@4.0.0
  - @twilio-paste/screen-reader-only@5.0.0
  - @twilio-paste/select@4.0.0
  - @twilio-paste/separator@2.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/table@2.0.0
  - @twilio-paste/tabs@2.0.0
  - @twilio-paste/textarea@3.0.0
  - @twilio-paste/toast@3.0.0
  - @twilio-paste/tooltip@3.0.0
  - @twilio-paste/truncate@5.0.0
  - @twilio-paste/aspect-ratio@4.0.0
  - @twilio-paste/flex@2.0.0
  - @twilio-paste/grid@2.0.0
  - @twilio-paste/media-object@4.0.0
  - @twilio-paste/stack@2.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/sibling-box@3.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/customization@2.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 6.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/help-text@4.0.3
  - @twilio-paste/input@2.0.2
  - @twilio-paste/modal@4.0.3
  - @twilio-paste/screen-reader-only@4.0.3
  - @twilio-paste/separator@1.0.2
  - @twilio-paste/table@1.0.2
  - @twilio-paste/toast@2.0.3
  - @twilio-paste/truncate@4.0.3
  - @twilio-paste/aspect-ratio@3.0.2
  - @twilio-paste/flex@1.0.2
  - @twilio-paste/grid@1.0.2
  - @twilio-paste/stack@1.0.2
  - @twilio-paste/combobox-primitive@0.2.3
  - @twilio-paste/disclosure-primitive@0.3.3
  - @twilio-paste/menu-primitive@0.2.3
  - @twilio-paste/modal-dialog-primitive@0.2.2
  - @twilio-paste/non-modal-dialog-primitive@0.3.3
  - @twilio-paste/tooltip-primitive@0.2.3
  - @twilio-paste/base-radio-checkbox@4.0.3
  - @twilio-paste/checkbox@4.0.3
  - @twilio-paste/combobox@4.0.3
  - @twilio-paste/inline-control-group@4.0.3
  - @twilio-paste/radio-group@4.0.3
  - @twilio-paste/label@4.0.3
  - @twilio-paste/menu@4.0.3
  - @twilio-paste/tabs@1.0.2
  - @twilio-paste/button@4.0.3
  - @twilio-paste/disclosure@3.0.3
  - @twilio-paste/popover@3.0.3
  - @twilio-paste/tooltip@2.0.3
  - @twilio-paste/alert@4.0.3

## 6.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/alert@4.0.2
  - @twilio-paste/anchor@3.0.2
  - @twilio-paste/avatar@1.0.1
  - @twilio-paste/base-radio-checkbox@4.0.2
  - @twilio-paste/breadcrumb@2.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/card@2.0.1
  - @twilio-paste/checkbox@4.0.2
  - @twilio-paste/combobox@4.0.2
  - @twilio-paste/disclosure@3.0.2
  - @twilio-paste/heading@4.0.1
  - @twilio-paste/help-text@4.0.2
  - @twilio-paste/inline-control-group@4.0.2
  - @twilio-paste/input@2.0.1
  - @twilio-paste/input-box@3.0.1
  - @twilio-paste/label@4.0.2
  - @twilio-paste/list@1.0.1
  - @twilio-paste/menu@4.0.2
  - @twilio-paste/modal@4.0.2
  - @twilio-paste/paragraph@3.0.1
  - @twilio-paste/popover@3.0.2
  - @twilio-paste/radio-group@4.0.2
  - @twilio-paste/screen-reader-only@4.0.2
  - @twilio-paste/select@3.0.2
  - @twilio-paste/separator@1.0.1
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/table@1.0.1
  - @twilio-paste/tabs@1.0.1
  - @twilio-paste/textarea@2.0.1
  - @twilio-paste/toast@2.0.2
  - @twilio-paste/tooltip@2.0.2
  - @twilio-paste/truncate@4.0.2
  - @twilio-paste/aspect-ratio@3.0.1
  - @twilio-paste/flex@1.0.1
  - @twilio-paste/grid@1.0.1
  - @twilio-paste/media-object@3.0.1
  - @twilio-paste/stack@1.0.1
  - @twilio-paste/box@3.0.1
  - @twilio-paste/sibling-box@2.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/customization@1.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 6.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b), [`8e45efee`](https://github.com/twilio-labs/paste/commit/8e45efeecfba9599b3b049f196d60b5c6ee0da55)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/toast@2.0.1
  - @twilio-paste/alert@4.0.1
  - @twilio-paste/anchor@3.0.1
  - @twilio-paste/base-radio-checkbox@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/checkbox@4.0.1
  - @twilio-paste/combobox@4.0.1
  - @twilio-paste/disclosure@3.0.1
  - @twilio-paste/help-text@4.0.1
  - @twilio-paste/inline-control-group@4.0.1
  - @twilio-paste/menu@4.0.1
  - @twilio-paste/modal@4.0.1
  - @twilio-paste/popover@3.0.1
  - @twilio-paste/radio-group@4.0.1
  - @twilio-paste/screen-reader-only@4.0.1
  - @twilio-paste/select@3.0.1
  - @twilio-paste/spinner@5.0.1
  - @twilio-paste/tooltip@2.0.1
  - @twilio-paste/truncate@4.0.1
  - @twilio-paste/breadcrumb@2.0.1
  - @twilio-paste/label@4.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73), [`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/combobox@4.0.0
  - @twilio-paste/alert@4.0.0
  - @twilio-paste/anchor@3.0.0
  - @twilio-paste/avatar@1.0.0
  - @twilio-paste/base-radio-checkbox@4.0.0
  - @twilio-paste/breadcrumb@2.0.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/card@2.0.0
  - @twilio-paste/checkbox@4.0.0
  - @twilio-paste/disclosure@3.0.0
  - @twilio-paste/heading@4.0.0
  - @twilio-paste/help-text@4.0.0
  - @twilio-paste/inline-control-group@4.0.0
  - @twilio-paste/input@2.0.0
  - @twilio-paste/input-box@3.0.0
  - @twilio-paste/label@4.0.0
  - @twilio-paste/list@1.0.0
  - @twilio-paste/menu@4.0.0
  - @twilio-paste/modal@4.0.0
  - @twilio-paste/paragraph@3.0.0
  - @twilio-paste/popover@3.0.0
  - @twilio-paste/radio-group@4.0.0
  - @twilio-paste/screen-reader-only@4.0.0
  - @twilio-paste/select@3.0.0
  - @twilio-paste/separator@1.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/table@1.0.0
  - @twilio-paste/tabs@1.0.0
  - @twilio-paste/textarea@2.0.0
  - @twilio-paste/toast@2.0.0
  - @twilio-paste/tooltip@2.0.0
  - @twilio-paste/truncate@4.0.0
  - @twilio-paste/aspect-ratio@3.0.0
  - @twilio-paste/flex@1.0.0
  - @twilio-paste/grid@1.0.0
  - @twilio-paste/media-object@3.0.0
  - @twilio-paste/stack@1.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/sibling-box@2.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/customization@1.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 5.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Changed `generateVersionedDependencyList` function to use exact twilio-paste package versions.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/card@1.5.2
  - @twilio-paste/alert@3.0.1
  - @twilio-paste/inline-control-group@3.0.1
  - @twilio-paste/grid@0.6.2
  - @twilio-paste/customization@0.2.2
  - @twilio-paste/base-radio-checkbox@3.0.1
  - @twilio-paste/label@3.0.1
  - @twilio-paste/stack@0.3.2
  - @twilio-paste/menu-primitive@0.2.2
  - @twilio-paste/popover@2.0.1
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/table@0.2.2
  - @twilio-paste/tooltip@1.0.1
  - @twilio-paste/tabs-primitive@0.2.2
  - @twilio-paste/sibling-box@1.2.2
  - @twilio-paste/modal@3.0.1
  - @twilio-paste/aspect-ratio@2.1.2
  - @twilio-paste/select@2.0.1
  - @twilio-paste/breadcrumb@1.0.1
  - @twilio-paste/button@3.0.1
  - @twilio-paste/input-box@2.1.2
  - @twilio-paste/combobox-primitive@0.2.2
  - @twilio-paste/anchor@2.0.1
  - @twilio-paste/tabs@0.5.2
  - @twilio-paste/radio-group@3.0.1
  - @twilio-paste/list@0.3.2
  - @twilio-paste/flex@0.5.2
  - @twilio-paste/disclosure@2.0.1
  - @twilio-paste/tooltip-primitive@0.2.2
  - @twilio-paste/separator@0.4.2
  - @twilio-paste/menu@3.0.1
  - @twilio-paste/media-object@2.1.2
  - @twilio-paste/heading@3.1.2
  - @twilio-paste/non-modal-dialog-primitive@0.3.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/paragraph@2.1.2
  - @twilio-paste/avatar@0.4.2
  - @twilio-paste/input@1.2.3
  - @twilio-paste/box@2.13.2
  - @twilio-paste/screen-reader-only@3.0.1
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/textarea@1.2.2
  - @twilio-paste/combobox@3.0.1
  - @twilio-paste/help-text@3.0.1
  - @twilio-paste/checkbox@3.0.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/toast@1.0.1
  - @twilio-paste/spinner@4.0.1
  - @twilio-paste/truncate@3.0.1
  - @twilio-paste/disclosure-primitive@0.3.2

## 5.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/alert@3.0.0
  - @twilio-paste/anchor@2.0.0
  - @twilio-paste/base-radio-checkbox@3.0.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/checkbox@3.0.0
  - @twilio-paste/combobox@3.0.0
  - @twilio-paste/disclosure@2.0.0
  - @twilio-paste/help-text@3.0.0
  - @twilio-paste/inline-control-group@3.0.0
  - @twilio-paste/menu@3.0.0
  - @twilio-paste/modal@3.0.0
  - @twilio-paste/popover@2.0.0
  - @twilio-paste/radio-group@3.0.0
  - @twilio-paste/screen-reader-only@3.0.0
  - @twilio-paste/select@2.0.0
  - @twilio-paste/spinner@4.0.0
  - @twilio-paste/toast@1.0.0
  - @twilio-paste/tooltip@1.0.0
  - @twilio-paste/truncate@3.0.0
  - @twilio-paste/breadcrumb@1.0.0
  - @twilio-paste/label@3.0.0

## 4.3.3

### Patch Changes

- [`e5e21040`](https://github.com/twilio-labs/paste/commit/e5e2104046e1ebaad164845edbe857760c0289db) [#1063](https://github.com/twilio-labs/paste/pull/1063) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Exclude cra-template package from the core bundle

## 4.3.2

### Patch Changes

- Updated dependencies [[`b8265071`](https://github.com/twilio-labs/paste/commit/b82650716256de22aeff36e00d46577f71d1b3fd)]:
  - @twilio-paste/disclosure@1.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.3.0...@twilio-paste/core@4.3.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/core

# [4.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.14...@twilio-paste/core@4.3.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [4.2.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.13...@twilio-paste/core@4.2.14) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.12...@twilio-paste/core@4.2.13) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.11...@twilio-paste/core@4.2.12) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.10...@twilio-paste/core@4.2.11) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.9...@twilio-paste/core@4.2.10) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.8...@twilio-paste/core@4.2.9) (2021-01-12)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.7...@twilio-paste/core@4.2.8) (2021-01-08)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.6...@twilio-paste/core@4.2.7) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.5...@twilio-paste/core@4.2.6) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.4...@twilio-paste/core@4.2.5) (2021-01-06)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.3...@twilio-paste/core@4.2.4) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.2...@twilio-paste/core@4.2.3) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.1...@twilio-paste/core@4.2.2) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/core

## [4.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.2.0...@twilio-paste/core@4.2.1) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/core

# [4.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.15...@twilio-paste/core@4.2.0) (2020-12-11)

### Features

- **core:** add customization package to core ([637aba2](https://github.com/twilio-labs/paste/commit/637aba27e8901fc9db24327d5bcb0cf1bf522bc9))

## [4.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.14...@twilio-paste/core@4.1.15) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.13...@twilio-paste/core@4.1.14) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.12...@twilio-paste/core@4.1.13) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.11...@twilio-paste/core@4.1.12) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.10...@twilio-paste/core@4.1.11) (2020-11-25)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.9...@twilio-paste/core@4.1.10) (2020-11-19)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.8...@twilio-paste/core@4.1.9) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.7...@twilio-paste/core@4.1.8) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.6...@twilio-paste/core@4.1.7) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.5...@twilio-paste/core@4.1.6) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.4...@twilio-paste/core@4.1.5) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.3...@twilio-paste/core@4.1.4) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.2...@twilio-paste/core@4.1.3) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.1...@twilio-paste/core@4.1.2) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/core

## [4.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.1.0...@twilio-paste/core@4.1.1) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/core

# [4.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@4.0.0...@twilio-paste/core@4.1.0) (2020-11-02)

### Features

- **core:** add breadcrumb package to core ([06b35f8](https://github.com/twilio-labs/paste/commit/06b35f8d9d904ef27b3a2dec74522b21d7b86533))

# [4.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.13...@twilio-paste/core@4.0.0) (2020-11-02)

### chore

- **core:** remove absolute component ([84c22b4](https://github.com/twilio-labs/paste/commit/84c22b42ccdc5e924101b586592e93e1c8f19fba))

### BREAKING CHANGES

- **core:** The Absolute component has been deprecated. For a replacement
  use the Box component with absolute positioning.

## [3.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.12...@twilio-paste/core@3.0.13) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.11...@twilio-paste/core@3.0.12) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.10...@twilio-paste/core@3.0.11) (2020-10-28)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.9...@twilio-paste/core@3.0.10) (2020-10-27)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.8...@twilio-paste/core@3.0.9) (2020-10-27)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.7...@twilio-paste/core@3.0.8) (2020-10-26)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.6...@twilio-paste/core@3.0.7) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.5...@twilio-paste/core@3.0.6) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.4...@twilio-paste/core@3.0.5) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.3...@twilio-paste/core@3.0.4) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.2...@twilio-paste/core@3.0.3) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.1...@twilio-paste/core@3.0.2) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/core

## [3.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@3.0.0...@twilio-paste/core@3.0.1) (2020-10-13)

### Bug Fixes

- **core-bundle:** make react-uid a dependency for easier usage ([440237c](https://github.com/twilio-labs/paste/commit/440237c5a31a7acfb51bbffee7274c9ccd386443))

# [3.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.18.6...@twilio-paste/core@3.0.0) (2020-10-13)

### Features

- **core:** provide unbarreled exports ([fca4941](https://github.com/twilio-labs/paste/commit/fca49412c84a32a4605979027902b228741484ce))

### BREAKING CHANGES

- **core:** core no longer bundles the '@twilio-paste/form' package.

## [2.18.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.18.5...@twilio-paste/core@2.18.6) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/core

## [2.18.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.18.4...@twilio-paste/core@2.18.5) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/core

## [2.18.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.18.3...@twilio-paste/core@2.18.4) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.18.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.18.2...@twilio-paste/core@2.18.3) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.18.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.18.1...@twilio-paste/core@2.18.2) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.18.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.18.0...@twilio-paste/core@2.18.1) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/core

# [2.18.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.17.0...@twilio-paste/core@2.18.0) (2020-10-07)

### Features

- **core:** add table component package to core ([f0ff900](https://github.com/twilio-labs/paste/commit/f0ff900f7720b1222e7fa533bd5043be1424f3ca))

# [2.17.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.61...@twilio-paste/core@2.17.0) (2020-10-07)

### Features

- **core:** include form components individually ([fdce217](https://github.com/twilio-labs/paste/commit/fdce217fbaf51883b58d0cae6da20df0baeda50c))

## [2.16.61](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.60...@twilio-paste/core@2.16.61) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.60](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.59...@twilio-paste/core@2.16.60) (2020-09-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.59](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.58...@twilio-paste/core@2.16.59) (2020-09-23)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.58](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.57...@twilio-paste/core@2.16.58) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.56...@twilio-paste/core@2.16.57) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.55...@twilio-paste/core@2.16.56) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.54...@twilio-paste/core@2.16.55) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.53...@twilio-paste/core@2.16.54) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.52...@twilio-paste/core@2.16.53) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.51...@twilio-paste/core@2.16.52) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.50...@twilio-paste/core@2.16.51) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.49...@twilio-paste/core@2.16.50) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.48...@twilio-paste/core@2.16.49) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.47...@twilio-paste/core@2.16.48) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.46...@twilio-paste/core@2.16.47) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.45...@twilio-paste/core@2.16.46) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.44...@twilio-paste/core@2.16.45) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.43...@twilio-paste/core@2.16.44) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.42...@twilio-paste/core@2.16.43) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.41...@twilio-paste/core@2.16.42) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.40...@twilio-paste/core@2.16.41) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.39...@twilio-paste/core@2.16.40) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.38...@twilio-paste/core@2.16.39) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.37...@twilio-paste/core@2.16.38) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.36...@twilio-paste/core@2.16.37) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.35...@twilio-paste/core@2.16.36) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.34...@twilio-paste/core@2.16.35) (2020-08-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.33...@twilio-paste/core@2.16.34) (2020-08-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.32...@twilio-paste/core@2.16.33) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.31...@twilio-paste/core@2.16.32) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.30...@twilio-paste/core@2.16.31) (2020-08-21)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.29...@twilio-paste/core@2.16.30) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.28...@twilio-paste/core@2.16.29) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.27...@twilio-paste/core@2.16.28) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.26...@twilio-paste/core@2.16.27) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.25...@twilio-paste/core@2.16.26) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.24...@twilio-paste/core@2.16.25) (2020-08-11)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.23...@twilio-paste/core@2.16.24) (2020-08-11)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.22...@twilio-paste/core@2.16.23) (2020-08-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.21...@twilio-paste/core@2.16.22) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.20...@twilio-paste/core@2.16.21) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.19...@twilio-paste/core@2.16.20) (2020-08-05)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.18...@twilio-paste/core@2.16.19) (2020-08-05)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.17...@twilio-paste/core@2.16.18) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.16...@twilio-paste/core@2.16.17) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.15...@twilio-paste/core@2.16.16) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.14...@twilio-paste/core@2.16.15) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.13...@twilio-paste/core@2.16.14) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.12...@twilio-paste/core@2.16.13) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.11...@twilio-paste/core@2.16.12) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.10...@twilio-paste/core@2.16.11) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.9...@twilio-paste/core@2.16.10) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.8...@twilio-paste/core@2.16.9) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.7...@twilio-paste/core@2.16.8) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.6...@twilio-paste/core@2.16.7) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.5...@twilio-paste/core@2.16.6) (2020-07-15)

### Bug Fixes

- **core:** add avatar to core ([8636d8f](https://github.com/twilio-labs/paste/commit/8636d8fe0aae8f3612dcd6d0c71004a33cf18604))

## [2.16.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.4...@twilio-paste/core@2.16.5) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.3...@twilio-paste/core@2.16.4) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.2...@twilio-paste/core@2.16.3) (2020-07-13)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.1...@twilio-paste/core@2.16.2) (2020-07-08)

**Note:** Version bump only for package @twilio-paste/core

## [2.16.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.16.0...@twilio-paste/core@2.16.1) (2020-07-08)

**Note:** Version bump only for package @twilio-paste/core

# [2.16.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.15.2...@twilio-paste/core@2.16.0) (2020-07-02)

### Features

- **core:** add tooltip package to core ([475c26a](https://github.com/twilio-labs/paste/commit/475c26af917cf61d1ad565d80efad4dfc7544ae8))

## [2.15.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.15.1...@twilio-paste/core@2.15.2) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/core

## [2.15.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.15.0...@twilio-paste/core@2.15.1) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/core

# [2.15.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.14.4...@twilio-paste/core@2.15.0) (2020-07-01)

### Features

- **core:** add disclosure to the bundle ([ff41016](https://github.com/twilio-labs/paste/commit/ff410164b8ec926f82519841f8522405746e6e36))

## [2.14.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.14.3...@twilio-paste/core@2.14.4) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/core

## [2.14.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.14.2...@twilio-paste/core@2.14.3) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.14.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.14.1...@twilio-paste/core@2.14.2) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.14.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.14.0...@twilio-paste/core@2.14.1) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/core

# [2.14.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.13.4...@twilio-paste/core@2.14.0) (2020-06-25)

### Features

- **core:** add tooltip-primitive package to core ([84d61dc](https://github.com/twilio-labs/paste/commit/84d61dc8619e121c4af86c4f80fc85fde6fba859))

## [2.13.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.13.3...@twilio-paste/core@2.13.4) (2020-06-24)

**Note:** Version bump only for package @twilio-paste/core

## [2.13.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.13.2...@twilio-paste/core@2.13.3) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/core

## [2.13.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.13.1...@twilio-paste/core@2.13.2) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/core

## [2.13.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.13.0...@twilio-paste/core@2.13.1) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/core

# [2.13.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.12.1...@twilio-paste/core@2.13.0) (2020-06-16)

### Features

- **core:** add popover package to core ([c30974d](https://github.com/twilio-labs/paste/commit/c30974d44a05f28a832fc795f600b286a3c133e7))

## [2.12.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.12.0...@twilio-paste/core@2.12.1) (2020-06-12)

**Note:** Version bump only for package @twilio-paste/core

# [2.12.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.11.0...@twilio-paste/core@2.12.0) (2020-06-10)

### Features

- **core:** adding Tabs component ([1bd3702](https://github.com/twilio-labs/paste/commit/1bd37021fe06c1990601bd46f6683a781995a9a2))

# [2.11.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.10.3...@twilio-paste/core@2.11.0) (2020-06-09)

### Features

- **core:** add non-modal dialog primitive to core ([8917f44](https://github.com/twilio-labs/paste/commit/8917f444cf96264472112fc516e5ed7f24902c9b))

## [2.10.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.10.2...@twilio-paste/core@2.10.3) (2020-06-08)

**Note:** Version bump only for package @twilio-paste/core

## [2.10.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.10.1...@twilio-paste/core@2.10.2) (2020-06-05)

**Note:** Version bump only for package @twilio-paste/core

## [2.10.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.10.0...@twilio-paste/core@2.10.1) (2020-06-04)

**Note:** Version bump only for package @twilio-paste/core

# [2.10.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.7...@twilio-paste/core@2.10.0) (2020-06-01)

### Features

- **core-bundle:** add tabs-primitive ([b3b076b](https://github.com/twilio-labs/paste/commit/b3b076bb8f5f28cbe52995ab5774e08f3ff12ad0))

## [2.9.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.6...@twilio-paste/core@2.9.7) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/core

## [2.9.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.5...@twilio-paste/core@2.9.6) (2020-06-01)

**Note:** Version bump only for package @twilio-paste/core

## [2.9.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.4...@twilio-paste/core@2.9.5) (2020-06-01)

### Bug Fixes

- **core-bundle:** add animation-library peerDependency ([6c7da7a](https://github.com/twilio-labs/paste/commit/6c7da7aae212a8e0af6fdfe78e47276199a9bbed))

## [2.9.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.3...@twilio-paste/core@2.9.4) (2020-05-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.9.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.2...@twilio-paste/core@2.9.3) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/core

## [2.9.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.1...@twilio-paste/core@2.9.2) (2020-05-27)

**Note:** Version bump only for package @twilio-paste/core

## [2.9.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.9.0...@twilio-paste/core@2.9.1) (2020-05-26)

**Note:** Version bump only for package @twilio-paste/core

# [2.9.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.8.0...@twilio-paste/core@2.9.0) (2020-05-22)

### Features

- **core:** add combobox to core ([38fbcd6](https://github.com/twilio-labs/paste/commit/38fbcd6e89e1abb955fbd4a5419ee0358e29108b))

# [2.8.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.7.0...@twilio-paste/core@2.8.0) (2020-05-20)

### Features

- **core:** add menu and menu primitive ([eef81b2](https://github.com/twilio-labs/paste/commit/eef81b20b9a1adcd6442d18da23ddc69df122388))

# [2.7.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.6.0...@twilio-paste/core@2.7.0) (2020-05-20)

### Features

- **core:** add disclosure primitive dep and reakit-library peerDep ([f9cd5e0](https://github.com/twilio-labs/paste/commit/f9cd5e05ea24da304834c6a2922ac5d89a522308))

# [2.6.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.5.5...@twilio-paste/core@2.6.0) (2020-05-13)

### Features

- **core:** add combobox-primitive to core ([6e79ddc](https://github.com/twilio-labs/paste/commit/6e79ddc8fc53a5c20f71b62e08d0c31eea2ecabb))

## [2.5.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.5.4...@twilio-paste/core@2.5.5) (2020-05-11)

**Note:** Version bump only for package @twilio-paste/core

## [2.5.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.5.3...@twilio-paste/core@2.5.4) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.5.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.5.2...@twilio-paste/core@2.5.3) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.5.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.5.1...@twilio-paste/core@2.5.2) (2020-05-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.5.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.5.0...@twilio-paste/core@2.5.1) (2020-05-06)

**Note:** Version bump only for package @twilio-paste/core

# [2.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.11...@twilio-paste/core@2.5.0) (2020-05-05)

### Features

- **stack:** add stack component package ([#414](https://github.com/twilio-labs/paste/issues/414)) ([0ea3e4f](https://github.com/twilio-labs/paste/commit/0ea3e4f5ecc714396fcbca2434bde9d496d9c4b7))

## [2.4.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.10...@twilio-paste/core@2.4.11) (2020-05-04)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.9...@twilio-paste/core@2.4.10) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.8...@twilio-paste/core@2.4.9) (2020-05-01)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.7...@twilio-paste/core@2.4.8) (2020-04-29)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.6...@twilio-paste/core@2.4.7) (2020-04-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.5...@twilio-paste/core@2.4.6) (2020-04-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.4...@twilio-paste/core@2.4.5) (2020-04-24)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.3...@twilio-paste/core@2.4.4) (2020-04-24)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.2...@twilio-paste/core@2.4.3) (2020-04-22)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.1...@twilio-paste/core@2.4.2) (2020-04-20)

**Note:** Version bump only for package @twilio-paste/core

## [2.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.4.0...@twilio-paste/core@2.4.1) (2020-04-17)

**Note:** Version bump only for package @twilio-paste/core

# [2.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.20...@twilio-paste/core@2.4.0) (2020-04-15)

### Features

- **core:** include the separator component into core ([ea43f58](https://github.com/twilio-labs/paste/commit/ea43f58de9aea6a6a222976f2f9a712e23991621))

## [2.3.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.19...@twilio-paste/core@2.3.20) (2020-04-15)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.18...@twilio-paste/core@2.3.19) (2020-04-09)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.17...@twilio-paste/core@2.3.18) (2020-04-08)

### Bug Fixes

- **core:** include the modal package ([2885a73](https://github.com/twilio-labs/paste/commit/2885a73f9ff3b4df138b24cf79f36b404153fc56))

## [2.3.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.16...@twilio-paste/core@2.3.17) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.15...@twilio-paste/core@2.3.16) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.14...@twilio-paste/core@2.3.15) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.13...@twilio-paste/core@2.3.14) (2020-04-01)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.12...@twilio-paste/core@2.3.13) (2020-04-01)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.11...@twilio-paste/core@2.3.12) (2020-04-01)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.10...@twilio-paste/core@2.3.11) (2020-03-31)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.9...@twilio-paste/core@2.3.10) (2020-03-30)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.8...@twilio-paste/core@2.3.9) (2020-03-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.7...@twilio-paste/core@2.3.8) (2020-03-27)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.6...@twilio-paste/core@2.3.7) (2020-03-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.5...@twilio-paste/core@2.3.6) (2020-03-24)

### Bug Fixes

- **core:** switch from theme-tokens to theme package dep ([e2c7272](https://github.com/twilio-labs/paste/commit/e2c727222dca615caf055de077d89e3c37e222c9))

## [2.3.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.4...@twilio-paste/core@2.3.5) (2020-03-20)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.3...@twilio-paste/core@2.3.4) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.2...@twilio-paste/core@2.3.3) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.1...@twilio-paste/core@2.3.2) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/core

## [2.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.3.0...@twilio-paste/core@2.3.1) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/core

# [2.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.9...@twilio-paste/core@2.3.0) (2020-03-11)

### Features

- **core:** add form package ([f8ad15b](https://github.com/twilio-labs/paste/commit/f8ad15b0fb4ede9de5517f7d6d26fde4f84b5853))

## [2.2.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.8...@twilio-paste/core@2.2.9) (2020-03-06)

### Bug Fixes

- add missing transitive peerDep on '@styled-system/css' ([fdbb813](https://github.com/twilio-labs/paste/commit/fdbb81370cda71037348742a680299ce481eabfd))

## [2.2.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.7...@twilio-paste/core@2.2.8) (2020-03-04)

**Note:** Version bump only for package @twilio-paste/core

## [2.2.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.6...@twilio-paste/core@2.2.7) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/core

## [2.2.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.5...@twilio-paste/core@2.2.6) (2020-03-02)

**Note:** Version bump only for package @twilio-paste/core

## [2.2.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.4...@twilio-paste/core@2.2.5) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/core

## [2.2.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.3...@twilio-paste/core@2.2.4) (2020-02-26)

**Note:** Version bump only for package @twilio-paste/core

## [2.2.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.2...@twilio-paste/core@2.2.3) (2020-02-26)

### Bug Fixes

- package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))

## [2.2.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.1...@twilio-paste/core@2.2.2) (2020-02-21)

**Note:** Version bump only for package @twilio-paste/core

## [2.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.2.0...@twilio-paste/core@2.2.1) (2020-02-20)

**Note:** Version bump only for package @twilio-paste/core

# [2.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.20...@twilio-paste/core@2.2.0) (2020-02-19)

### Features

- **core:** add modal-dialog-primitive ([24dd707](https://github.com/twilio-labs/paste/commit/24dd707b136697c7d5faa36517a221fb8d4f6f65))

## [2.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.19...@twilio-paste/core@2.1.20) (2020-02-19)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.18...@twilio-paste/core@2.1.19) (2020-02-19)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.17...@twilio-paste/core@2.1.18) (2020-02-18)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.16...@twilio-paste/core@2.1.17) (2020-02-14)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.15...@twilio-paste/core@2.1.16) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.14...@twilio-paste/core@2.1.15) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.13...@twilio-paste/core@2.1.14) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.12...@twilio-paste/core@2.1.13) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.11...@twilio-paste/core@2.1.12) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.10...@twilio-paste/core@2.1.11) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.9...@twilio-paste/core@2.1.10) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.8...@twilio-paste/core@2.1.9) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.7...@twilio-paste/core@2.1.8) (2020-02-10)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.6...@twilio-paste/core@2.1.7) (2020-02-10)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.5...@twilio-paste/core@2.1.6) (2020-02-08)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.4...@twilio-paste/core@2.1.5) (2020-02-07)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.3...@twilio-paste/core@2.1.4) (2020-02-05)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.2...@twilio-paste/core@2.1.3) (2020-02-04)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.1...@twilio-paste/core@2.1.2) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/core

## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.1.0...@twilio-paste/core@2.1.1) (2020-01-30)

**Note:** Version bump only for package @twilio-paste/core

# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.0.3...@twilio-paste/core@2.1.0) (2020-01-30)

### Features

- **core:** add grid package ([facd57c](https://github.com/twilio-labs/paste/commit/facd57c927b3364edd73f5fdfd52b353583975bb))

## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.0.2...@twilio-paste/core@2.0.3) (2020-01-27)

**Note:** Version bump only for package @twilio-paste/core

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.0.1...@twilio-paste/core@2.0.2) (2020-01-25)

**Note:** Version bump only for package @twilio-paste/core

## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@2.0.0...@twilio-paste/core@2.0.1) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/core

# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.3.0...@twilio-paste/core@2.0.0) (2020-01-17)

### Bug Fixes

- **core:** remove typography component ([#252](https://github.com/twilio-labs/paste/issues/252)) ([ad4d512](https://github.com/twilio-labs/paste/commit/ad4d512dcd5488fd7e48e4e264900fdfe2ad17c0))

### Features

- **core:** add the alert component ([3be9ea7](https://github.com/twilio-labs/paste/commit/3be9ea7c998aa8fa2780678dbf494dc8bbea1f60))

### BREAKING CHANGES

- **core:** Typography component will no longer be a part of the core package

# [1.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.2.0...@twilio-paste/core@1.3.0) (2019-12-20)

### Bug Fixes

- **core:** missing dependency for flex component ([900e56b](https://github.com/twilio-labs/paste/commit/900e56b8ea28c9e0a980370670712ee387bbf93a))

### Features

- **core:** add card to core package ([306876a](https://github.com/twilio-labs/paste/commit/306876ad910fedb45f6e15d6489599ddd599d0b2))
- **core:** add flex ([0d48965](https://github.com/twilio-labs/paste/commit/0d48965677c587f9b9dfdb9c77e8e7d49bfad28e))

# [1.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.1.4...@twilio-paste/core@1.2.0) (2019-12-19)

### Bug Fixes

- **website:** mobile experience of website ([#226](https://github.com/twilio-labs/paste/issues/226)) ([203159e](https://github.com/twilio-labs/paste/commit/203159e33c859c5eb45638707c392c7e3831b0b9))

### Features

- **core:** add the list component ([bcc14fb](https://github.com/twilio-labs/paste/commit/bcc14fb3fd66a43850836b1c4d2c073504554034))

## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.1.3...@twilio-paste/core@1.1.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/core

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.1.2...@twilio-paste/core@1.1.3) (2019-11-27)

### Bug Fixes

- **button:** defensively set hover/focus/active styles from legacy globals ([#205](https://github.com/twilio-labs/paste/issues/205)) ([2a9ce57](https://github.com/twilio-labs/paste/commit/2a9ce57a61a0ef9c1aadc0cfe0c9c112b4bc784e))

## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.1.1...@twilio-paste/core@1.1.2) (2019-11-21)

**Note:** Version bump only for package @twilio-paste/core

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.1.0...@twilio-paste/core@1.1.1) (2019-11-20)

### Bug Fixes

- remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.0.1...@twilio-paste/core@1.1.0) (2019-11-18)

### Features

- **card:** card component ([#145](https://github.com/twilio-labs/paste/issues/145)) ([9049c5f](https://github.com/twilio-labs/paste/commit/9049c5f8953b8ebee68596fedbcd58f6054ef166))

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.0.0...@twilio-paste/core@1.0.1) (2019-11-12)

### Bug Fixes

- paragraph package deps incorrect ([90ad6bc](https://github.com/twilio-labs/paste/commit/90ad6bca9628b2ac85990053d738c92450b4c798))

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@0.2.0...@twilio-paste/core@1.0.0) (2019-11-11)

### Features

- **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
- **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))

### BREAKING CHANGES

- **icons:** removed all the inherited icons since we're moving to a new system

- chore(icons): update icon list for storybook

- fix(spinner): use new icon

- fix(storybook): use new icon for story

- fix(story): button icons should be 24px

- fix: adjust icon size tokens

- feat: add iconSizes as separate key in theme-tokens

- feat(icons): icons package to use tokens and update icons

- fix(spinner): update to use tokens and new icons

- fix(button): use correct spinner size

- fix(icons): major icons package fixes

* huge overhaul to build process
* now uses rollup
* builds into cjs and esm directories
* made the package publishable to npm
* moved svg folder out of src, now src only holds react stuff
* updated scripts to use new paths and cleaned up the code
* programmatically generates rollup config from the icon-list command

- chore: add new icons dist folders to gitignore

- fix: spinner and button icon usage

- feat(icons): add rollup icon list cache file

- fix(core-bundle): sort packages for consistent builds

- chore: use `esm` instead of `es` in rollup for correctness

- chore: yarn.lock

- fix(spinner): lint error

- chore(icons): move rollup icon list

- chore(spinner): use types package in story

- fix(spinner): swap out destructured props for explicit props

# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@0.1.0...@twilio-paste/core@0.2.0) (2019-10-31)

### Bug Fixes

- **anchor:** export types and add tests ([#153](https://github.com/twilio-labs/paste/issues/153)) ([4086ee2](https://github.com/twilio-labs/paste/commit/4086ee28da829820ca8f791e4bddf2768bd8b2f9))

### Features

- **core:** add typography ([593de2a](https://github.com/twilio-labs/paste/commit/593de2a4e1511220c2845b48ff35201382c1f4f1))

# 0.1.0 (2019-10-29)

### Features

- **core:** a core bundle ([#138](https://github.com/twilio-labs/paste/issues/138)) ([f6ab2eb](https://github.com/twilio-labs/paste/commit/f6ab2eb924c29235d6889fb55960c788b96fdf01))
