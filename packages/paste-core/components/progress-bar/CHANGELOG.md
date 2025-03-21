# @twilio-paste/progress-bar

## 2.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 2.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

### Patch Changes

- Updated dependencies [[`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a)]:
  - @twilio-paste/label@14.0.0
  - @twilio-paste/screen-reader-only@14.0.0
  - @twilio-paste/skeleton-loader@7.0.0
  - @twilio-paste/media-object@11.0.0
  - @twilio-paste/box@11.0.0
  - @twilio-paste/text@11.0.0
  - @twilio-paste/customization@9.0.0
  - @twilio-paste/icons@13.0.0
  - @twilio-paste/animation-library@3.0.0
  - @twilio-paste/react-spectrum-library@3.0.0
  - @twilio-paste/styling-library@4.0.0
  - @twilio-paste/uid-library@3.0.0
  - @twilio-paste/style-props@10.0.0
  - @twilio-paste/theme@12.0.0
  - @twilio-paste/types@7.0.0

## 1.1.0

### Minor Changes

- [`72ec59143`](https://github.com/twilio-labs/paste/commit/72ec5914375231ac37c4c2989633615b914fbad1) [#3549](https://github.com/twilio-labs/paste/pull/3549) Thanks [@TheSisb](https://github.com/TheSisb)! - [ProgressBar] Added new features and updated the design.

  The ProgressBarLabel component has the following new props:

  - `valueLabel` which displays a plain text value on the right side of the label.
  - `disabled` which applies disabled styling on the label.

  The ProgressBar component has updated styling and the following new props:

  - `hasError` which displays error styling.
  - `disabled` which displays disabled styling.

### Patch Changes

- [`3f33da826`](https://github.com/twilio-labs/paste/commit/3f33da826be1f339dc960bd91ae07b6186c87bb8) [#3557](https://github.com/twilio-labs/paste/pull/3557) Thanks [@nkrantz](https://github.com/nkrantz)! - [Progress Bar] Improve TsDoc type annotations

## 1.0.0

### Major Changes

- [`424fa78d5`](https://github.com/twilio-labs/paste/commit/424fa78d559b8820b6bd8f221652ce24540a3608) [#3435](https://github.com/twilio-labs/paste/pull/3435) Thanks [@TheSisb](https://github.com/TheSisb)! - [Progress Bar] add new Progress Bar package. A Progress Bar visually displays the progression/duration of a system operation such as downloading, uploading, or processing information.
