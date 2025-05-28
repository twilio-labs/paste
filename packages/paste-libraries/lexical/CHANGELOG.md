# Change Log

## 5.1.0

### Minor Changes

- [`404eeec61`](https://github.com/twilio-labs/paste/commit/404eeec6110f4a1f2f413cf10de16b3055c798f7) [#4327](https://github.com/twilio-labs/paste/pull/4327) Thanks [@nkrantz](https://github.com/nkrantz)! - [Lexical] add export for the LexicalTypeaheadMenuPlugin plugin.

## 5.0.1

### Patch Changes

- [`262c1b715`](https://github.com/twilio-labs/paste/commit/262c1b71503e735ef98a4bdb6491ad5277cc2597) [#4281](https://github.com/twilio-labs/paste/pull/4281) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: add use client directive to the components and icons. This will make paste library compatible with server components

## 5.0.0

### Major Changes

- [`f48211e56`](https://github.com/twilio-labs/paste/commit/f48211e5681a0c7afc5055842fe98273174fde2a) [#4258](https://github.com/twilio-labs/paste/pull/4258) Thanks [@PixeledCode](https://github.com/PixeledCode)! - [all packages]: Upgrade to React 19 and drop support for React 16. Paste only supports the three latest versions of React. If you're using Paste in a React 17, 18, or 19 app, you should be able to upgrade with full backwards compatibility. If you experience any issues, please let us know on Github.

## 4.3.0

### Minor Changes

- [`932a03f23`](https://github.com/twilio-labs/paste/commit/932a03f2313f6a743729bd19e8222eeb704f7721) [#4173](https://github.com/twilio-labs/paste/pull/4173) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Lexical Library] exported additional helper functions and commands to allow advanced editor node manipulation programatically

## 4.2.0

### Minor Changes

- [`7779a24e5`](https://github.com/twilio-labs/paste/commit/7779a24e5a3173811e52675c7d5a9f8dcf608361) [#3964](https://github.com/twilio-labs/paste/pull/3964) Thanks [@krisantrobus](https://github.com/krisantrobus)! - [Lexical] added export for EditorRefPlugin

## 4.1.0

### Minor Changes

- [`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85) [#3442](https://github.com/twilio-labs/paste/pull/3442) Thanks [@TheSisb](https://github.com/TheSisb)! - Removed all run-time [prop-type checking](https://www.npmjs.com/package/prop-types)from Paste components. Paste now ships with only TypeScript types.

  **ACTION NEEDED**: None. This should be 100% backwards compatible.

## 4.0.0

### Major Changes

- [`c72b4b538`](https://github.com/twilio-labs/paste/commit/c72b4b538f6903b5b8766e14dc09edb689522d90) [#3426](https://github.com/twilio-labs/paste/pull/3426) Thanks [@SiTaggart](https://github.com/SiTaggart)! - [Lexical Library] Update lexical to version v0.12.0 This includes some breaking changes as listed in their [Changelog](https://github.com/facebook/lexical/releases)

## 3.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

## 2.0.0

### Major Changes

- [`3c89fd83d`](https://github.com/twilio-labs/paste/commit/3c89fd83d09c0f49e362c4d33ade4d3688d7381a) [#2965](https://github.com/twilio-labs/paste/pull/2965) Thanks [@Niznikr](https://github.com/Niznikr)! - Add support for React 18

## 1.1.0

### Minor Changes

- [`b742fa207`](https://github.com/twilio-labs/paste/commit/b742fa207b6a6c249eae225d2af08296134da6e8) [#2859](https://github.com/twilio-labs/paste/pull/2859) Thanks [@shleewhite](https://github.com/shleewhite)! - [Lexical Library] add export for: CLEAR_EDITOR_COMMAND, CLEAR_EDITOR_COMMAND, KEY_ENTER_COMMAND, COMMAND_PRIORITY_CRITICAL, COMMAND_PRIORITY_HIGH, COMMAND_PRIORITY_NORMAL, COMMAND_PRIORITY_LOW, and COMMAND_PRIORITY_EDITOR

## 1.0.0

### Major Changes

- [`9c85685cb`](https://github.com/twilio-labs/paste/commit/9c85685cbb3675b9cc5a06776f08acbb70e2de63) [#2825](https://github.com/twilio-labs/paste/pull/2825) Thanks [@shleewhite](https://github.com/shleewhite)! - [Lexical Library] Creates a new library that re-exports lexical.
