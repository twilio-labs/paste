# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.0.2...@twilio-paste/button@1.1.0) (2019-11-20)


### Bug Fixes

* remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))


### Features

* **icons:** make decorative required + icon docs ([#165](https://github.com/twilio-labs/paste/issues/165)) ([15ccbc2](https://github.com/twilio-labs/paste/commit/15ccbc2e0f259d60af83bf8503c8ee18a1191cb8))





## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.0.1...@twilio-paste/button@1.0.2) (2019-11-18)


### Bug Fixes

* correct button heights add new default icon size ([#186](https://github.com/twilio-labs/paste/issues/186)) ([2e54478](https://github.com/twilio-labs/paste/commit/2e54478f975cb1930bd6d397d1214947db97c2a3))
* **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))
* update destructive button styles to be filled ([#189](https://github.com/twilio-labs/paste/issues/189)) ([c29b7ca](https://github.com/twilio-labs/paste/commit/c29b7cae1e4999ddcee75ba1897e3cf09c17e6df))





## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@1.0.0...@twilio-paste/button@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/button





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.3.1...@twilio-paste/button@1.0.0) (2019-11-11)


### Bug Fixes

* **button:** add font-weight semibold to small buttons ([#166](https://github.com/twilio-labs/paste/issues/166)) ([582245b](https://github.com/twilio-labs/paste/commit/582245b10fe397bb5530dc7349a5b6b08b61d54e))
* **website:** update button docs with loading and icon states ([#167](https://github.com/twilio-labs/paste/issues/167)) ([7380889](https://github.com/twilio-labs/paste/commit/73808897ef181da087a5a80a17a80a74409a6c3c))


### Features

* **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
* **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))
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





## [0.3.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.3.0...@twilio-paste/button@0.3.1) (2019-10-31)

**Note:** Version bump only for package @twilio-paste/button





# [0.3.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.2.1...@twilio-paste/button@0.3.0) (2019-10-29)


### Bug Fixes

* **button:** border-color should transition with background-color ([#130](https://github.com/twilio-labs/paste/issues/130)) ([fda61ba](https://github.com/twilio-labs/paste/commit/fda61ba05973a7ff9b652f7f234b2ed8a678bed4))
* remove the underline from button states ([#147](https://github.com/twilio-labs/paste/issues/147)) ([70d4c15](https://github.com/twilio-labs/paste/commit/70d4c1534b5a026e2e24ba80fd9ec9bda062a762)), closes [#54](https://github.com/twilio-labs/paste/issues/54)


### Features

* upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))





## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/button@0.2.0...@twilio-paste/button@0.2.1) (2019-09-16)


### Bug Fixes

* **button:** adding some polish ([#67](https://github.com/twilio-labs/paste/issues/67)) ([2644657](https://github.com/twilio-labs/paste/commit/2644657))
* **button:** adjust primary, secondary, desctructive styles ([#72](https://github.com/twilio-labs/paste/issues/72)) ([670faef](https://github.com/twilio-labs/paste/commit/670faef))





# 0.2.0 (2019-08-15)


### Bug Fixes

* change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
* run eslint across the right files and fix any issues that arise. ([#21](https://github.com/twilio-labs/paste/issues/21)) ([2fcc872](https://github.com/twilio-labs/paste/commit/2fcc872))


### Features

* add Absolute component ([#24](https://github.com/twilio-labs/paste/issues/24)) ([ff2f1d9](https://github.com/twilio-labs/paste/commit/ff2f1d9))
