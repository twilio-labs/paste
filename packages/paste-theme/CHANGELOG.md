# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.1...@twilio-paste/theme@2.0.2) (2019-11-18)


### Bug Fixes

* **design-tokens:** change color-text-link token values ([#172](https://github.com/twilio-labs/paste/issues/172)) ([f0a215c](https://github.com/twilio-labs/paste/commit/f0a215cb283f74f268387e744099e337c6489ebd))





## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@2.0.0...@twilio-paste/theme@2.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/theme





# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@1.0.1...@twilio-paste/theme@2.0.0) (2019-11-11)


### Bug Fixes

* global styles by passing props ([#169](https://github.com/twilio-labs/paste/issues/169)) ([65c15c0](https://github.com/twilio-labs/paste/commit/65c15c090c88279faaa2d2c07f91ae8d845e3e20))


### Features

* **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
* enable theme switching on the docsite ([#124](https://github.com/twilio-labs/paste/issues/124)) ([df797e5](https://github.com/twilio-labs/paste/commit/df797e57ff1268367053d717f3b3c2ca48a0aa4f))


### BREAKING CHANGES

* **icons:** removed all the inherited icons since we're moving to a new system

* chore(icons): update icon list for storybook

* fix(spinner): use new icon

* fix(storybook): use new icon for story

* fix(story): button icons should be 24px

* fix: adjust icon size tokens

* feat: add iconSizes as separate key in theme-tokens

* feat(icons): icons package to use tokens and update icons

* fix(spinner): update to use tokens and new icons

* fix(button): use correct spinner size

* fix(icons): major icons package fixes

- huge overhaul to build process
- now uses rollup
- builds into cjs and esm directories
- made the package publishable to npm
- moved svg folder out of src, now src only holds react stuff
- updated scripts to use new paths and cleaned up the code
- programmatically generates rollup config from the icon-list command

* chore: add new icons dist folders to gitignore

* fix: spinner and button icon usage

* feat(icons): add rollup icon list cache file

* fix(core-bundle): sort packages for consistent builds

* chore: use `esm` instead of `es` in rollup for correctness

* chore: yarn.lock

* fix(spinner): lint error

* chore(icons): move rollup icon list

* chore(spinner): use types package in story

* fix(spinner): swap out destructured props for explicit props





## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@1.0.0...@twilio-paste/theme@1.0.1) (2019-10-31)

**Note:** Version bump only for package @twilio-paste/theme





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@0.4.1...@twilio-paste/theme@1.0.0) (2019-10-29)


### Features

* design token and theme package documentation ([#103](https://github.com/twilio-labs/paste/issues/103)) ([3060113](https://github.com/twilio-labs/paste/commit/30601132ccdec8f0fee79e0f293c80d0c0cff335))
* **box:** polish and fix ([#125](https://github.com/twilio-labs/paste/issues/125)) ([d151bad](https://github.com/twilio-labs/paste/commit/d151badadfa4db8ade1425df9336e0155ce09619))
* upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))


### BREAKING CHANGES

* **box:** many Box API changes

* fix(theme-tokens): add sizes key for styled-system responsiveness

* fix(absolute): update to newer Box

* fix(types): allow for responsive values via array

* fix(box): update story and light tweaks to OverflowProps

* chore: update yarn.lock file

* fix(types): many more types fixes

refactor: moved ValueOf into types package

* fix(box): eslint error in story

* fix(box): using the correct BorderProps definition

fix: we shouldn't allow users to pass the `border` shorthand, it circumvents tokens

* fix: lint errors

* fix(website): update box docs

* fix(storybook): use theme breakpoints





## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/theme@0.4.0...@twilio-paste/theme@0.4.1) (2019-09-16)


### Bug Fixes

* **design-tokens:** fix SendGrid token values ([#71](https://github.com/twilio-labs/paste/issues/71)) ([396fccf](https://github.com/twilio-labs/paste/commit/396fccf))





# 0.4.0 (2019-08-15)


### Bug Fixes

* change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))


### Features

* ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
* **website:** [DSYS-1046] website structure and navigation ([306586e](https://github.com/twilio-labs/paste/commit/306586e))
