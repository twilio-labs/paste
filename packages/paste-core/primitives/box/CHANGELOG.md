# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.10...@twilio-paste/box@2.1.11) (2020-02-28)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.9...@twilio-paste/box@2.1.10) (2020-02-26)


### Bug Fixes

* package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))





## [2.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.8...@twilio-paste/box@2.1.9) (2020-02-14)


### Bug Fixes

* **box:** add missing peer deps ([2281923](https://github.com/twilio-labs/paste/commit/2281923bd7ab169a99cefb2dd2a9d995d8751a02))





## [2.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.7...@twilio-paste/box@2.1.8) (2020-02-13)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.6...@twilio-paste/box@2.1.7) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.5...@twilio-paste/box@2.1.6) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.4...@twilio-paste/box@2.1.5) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.3...@twilio-paste/box@2.1.4) (2020-02-03)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.2...@twilio-paste/box@2.1.3) (2020-01-24)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.1...@twilio-paste/box@2.1.2) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/box





## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.1.0...@twilio-paste/box@2.1.1) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/box





# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.4...@twilio-paste/box@2.1.0) (2019-12-19)


### Features

* **box:** use style-props package, create method to safelySpreadProps ([dc9f7fb](https://github.com/twilio-labs/paste/commit/dc9f7fbc89d7ccfc382dc74185e8a699c658d55e))





## [2.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.3...@twilio-paste/box@2.0.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/box





## [2.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.2...@twilio-paste/box@2.0.3) (2019-11-20)

**Note:** Version bump only for package @twilio-paste/box





## [2.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.1...@twilio-paste/box@2.0.2) (2019-11-18)


### Bug Fixes

* **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))
* **website:** remove vague anchor do dont ([#177](https://github.com/twilio-labs/paste/issues/177)) ([8530c56](https://github.com/twilio-labs/paste/commit/8530c5679b48da46ddc82a9a7154bca78cacc30a))





## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@2.0.0...@twilio-paste/box@2.0.1) (2019-11-12)


### Bug Fixes

* prettier updated, updating formatting ([8644831](https://github.com/twilio-labs/paste/commit/86448312b017f13720735525e516f086704b1813))





# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@1.1.0...@twilio-paste/box@2.0.0) (2019-11-11)


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





# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@1.0.0...@twilio-paste/box@1.1.0) (2019-10-31)


### Features

* update types package to styled-system v5 format ([#154](https://github.com/twilio-labs/paste/issues/154)) ([117c41e](https://github.com/twilio-labs/paste/commit/117c41e463b11440582e740c28cc067c06d16e67))





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@0.3.1...@twilio-paste/box@1.0.0) (2019-10-29)


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





## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/box@0.3.0...@twilio-paste/box@0.3.1) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/box





# 0.3.0 (2019-08-15)


### Bug Fixes

* change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))


### Features

* ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
* **website:** Add the tokens page ([#19](https://github.com/twilio-labs/paste/issues/19)) ([878d3c5](https://github.com/twilio-labs/paste/commit/878d3c5))
