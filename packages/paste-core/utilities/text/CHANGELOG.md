# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.3...@twilio-paste/text@1.0.4) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/text





## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.2...@twilio-paste/text@1.0.3) (2019-11-20)


### Bug Fixes

* remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))





## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.1...@twilio-paste/text@1.0.2) (2019-11-18)


### Bug Fixes

* **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))
* **website:** remove vague anchor do dont ([#177](https://github.com/twilio-labs/paste/issues/177)) ([8530c56](https://github.com/twilio-labs/paste/commit/8530c5679b48da46ddc82a9a7154bca78cacc30a))





## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@1.0.0...@twilio-paste/text@1.0.1) (2019-11-12)


### Bug Fixes

* prettier updated, updating formatting ([8644831](https://github.com/twilio-labs/paste/commit/86448312b017f13720735525e516f086704b1813))





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.6.0...@twilio-paste/text@1.0.0) (2019-11-11)


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





# [0.6.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.5.0...@twilio-paste/text@0.6.0) (2019-10-31)


### Features

* update types package to styled-system v5 format ([#154](https://github.com/twilio-labs/paste/issues/154)) ([117c41e](https://github.com/twilio-labs/paste/commit/117c41e463b11440582e740c28cc067c06d16e67))





# [0.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.4.1...@twilio-paste/text@0.5.0) (2019-10-29)


### Features

* finalise the Text component ([#151](https://github.com/twilio-labs/paste/issues/151)) ([b51c272](https://github.com/twilio-labs/paste/commit/b51c272cf420380f73c31c3474ebdf23cb7cad3a))
* upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))





## [0.4.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/text@0.4.0...@twilio-paste/text@0.4.1) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/text





# 0.4.0 (2019-08-15)


### Bug Fixes

* change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))


### Features

* ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
* **website:** Add the tokens page ([#19](https://github.com/twilio-labs/paste/issues/19)) ([878d3c5](https://github.com/twilio-labs/paste/commit/878d3c5))
