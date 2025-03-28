# @twilio-paste/react-spectrum-library

## 3.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 3.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

## 2.2.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 2.1.0

### Minor Changes

- [`feeaa90fa`](https://github.com/twilio-labs/paste/commit/feeaa90fa4fff395ffc8a817f4ca358713d5d9be) [#3421](https://github.com/twilio-labs/paste/pull/3421) Thanks [@TheSisb](https://github.com/TheSisb)! - [React Spectrum Library] export the `useProgressBar` hook and the `useMeter` hook

## 2.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

## 1.0.0

### Major Changes

- [`c4a70d95b`](https://github.com/twilio-labs/paste/commit/c4a70d95bf8d61649e5fb3cb9b67148438d27662) [#3371](https://github.com/twilio-labs/paste/pull/3371) Thanks [@TheSisb](https://github.com/TheSisb)! - [React-Spectrum-Library] Add wrapper around react-spectrum which exposes the `useSlider`, `useSliderThumb`, and `useSliderState` hooks.
