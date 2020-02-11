# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.11...@twilio-paste/absolute@2.0.12) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.10...@twilio-paste/absolute@2.0.11) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.9...@twilio-paste/absolute@2.0.10) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.8...@twilio-paste/absolute@2.0.9) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.7...@twilio-paste/absolute@2.0.8) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.6...@twilio-paste/absolute@2.0.7) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.5...@twilio-paste/absolute@2.0.6) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.4...@twilio-paste/absolute@2.0.5) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.3...@twilio-paste/absolute@2.0.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.2...@twilio-paste/absolute@2.0.3) (2019-11-20)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.1...@twilio-paste/absolute@2.0.2) (2019-11-18)

**Note:** Version bump only for package @twilio-paste/absolute





## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@2.0.0...@twilio-paste/absolute@2.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/absolute





# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@1.1.0...@twilio-paste/absolute@2.0.0) (2019-11-11)


### Features

* **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))


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





# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@1.0.0...@twilio-paste/absolute@1.1.0) (2019-10-31)


### Features

* update types package to styled-system v5 format ([#154](https://github.com/twilio-labs/paste/issues/154)) ([117c41e](https://github.com/twilio-labs/paste/commit/117c41e463b11440582e740c28cc067c06d16e67))





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@0.2.0...@twilio-paste/absolute@1.0.0) (2019-10-29)


### Features

* **box:** polish and fix ([#125](https://github.com/twilio-labs/paste/issues/125)) ([d151bad](https://github.com/twilio-labs/paste/commit/d151badadfa4db8ade1425df9336e0155ce09619))
* finalise the Text component ([#151](https://github.com/twilio-labs/paste/issues/151)) ([b51c272](https://github.com/twilio-labs/paste/commit/b51c272cf420380f73c31c3474ebdf23cb7cad3a))
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





# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/absolute@0.1.0...@twilio-paste/absolute@0.2.0) (2019-09-16)


### Features

* **website:** site header ([#33](https://github.com/twilio-labs/paste/issues/33)) ([cb044c4](https://github.com/twilio-labs/paste/commit/cb044c4))





# 0.1.0 (2019-08-15)


### Features

* add Absolute component ([#24](https://github.com/twilio-labs/paste/issues/24)) ([ff2f1d9](https://github.com/twilio-labs/paste/commit/ff2f1d9))
