# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.7...@twilio-paste/anchor@1.1.8) (2020-04-08)


### Bug Fixes

* **anchor:** package dependencies updated to be correct ([233ebb8](https://github.com/twilio-labs/paste/commit/233ebb8a44fd79e258ffb28826f4919dd112c906))





## [1.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.6...@twilio-paste/anchor@1.1.7) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.5...@twilio-paste/anchor@1.1.6) (2020-04-07)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.4...@twilio-paste/anchor@1.1.5) (2020-04-02)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.3...@twilio-paste/anchor@1.1.4) (2020-03-24)


### Bug Fixes

* **anchor:** switch from theme-tokens to theme package dep ([b5451f4](https://github.com/twilio-labs/paste/commit/b5451f462c32954e9ae83b05f71ccfaabc403a1d))





## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.2...@twilio-paste/anchor@1.1.3) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.1...@twilio-paste/anchor@1.1.2) (2020-03-17)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.1.0...@twilio-paste/anchor@1.1.1) (2020-03-11)

**Note:** Version bump only for package @twilio-paste/anchor





# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.7...@twilio-paste/anchor@1.1.0) (2020-03-11)


### Features

* **anchor:** add style props for layout and space ([7d46ed5](https://github.com/twilio-labs/paste/commit/7d46ed521e68bdd22ec780af363bf4976fb87b17))





## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.6...@twilio-paste/anchor@1.0.7) (2020-02-26)


### Bug Fixes

* package dependencies and deprecation warnings ([#334](https://github.com/twilio-labs/paste/issues/334)) ([0e88338](https://github.com/twilio-labs/paste/commit/0e88338511e6835a79eb0a9cea8d5b3a1cdf0a88))





## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.5...@twilio-paste/anchor@1.0.6) (2020-02-11)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.4...@twilio-paste/anchor@1.0.5) (2020-02-07)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.3...@twilio-paste/anchor@1.0.4) (2020-01-17)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.2...@twilio-paste/anchor@1.0.3) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/anchor





## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.1...@twilio-paste/anchor@1.0.2) (2019-11-18)


### Bug Fixes

* **design-tokens:** change color-text-link token values ([#172](https://github.com/twilio-labs/paste/issues/172)) ([f0a215c](https://github.com/twilio-labs/paste/commit/f0a215cb283f74f268387e744099e337c6489ebd))
* **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))





## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@1.0.0...@twilio-paste/anchor@1.0.1) (2019-11-12)


### Bug Fixes

* **anchor:** fix hover color ([#178](https://github.com/twilio-labs/paste/issues/178)) ([ba37e97](https://github.com/twilio-labs/paste/commit/ba37e9786797d167bf1806ba21ad30eca609b548))





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.2.1...@twilio-paste/anchor@1.0.0) (2019-11-11)


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





## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.2.0...@twilio-paste/anchor@0.2.1) (2019-10-31)


### Bug Fixes

* **anchor:** change hover styles ([#155](https://github.com/twilio-labs/paste/issues/155)) ([5172b0b](https://github.com/twilio-labs/paste/commit/5172b0bb761e6c8334aac7fd94e615cac705d242))
* **anchor:** export types and add tests ([#153](https://github.com/twilio-labs/paste/issues/153)) ([4086ee2](https://github.com/twilio-labs/paste/commit/4086ee28da829820ca8f791e4bddf2768bd8b2f9))





# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.1.5...@twilio-paste/anchor@0.2.0) (2019-10-29)


### Features

* **website:** SiteLink Component, replace Link with SiteLink ([#135](https://github.com/twilio-labs/paste/issues/135)) ([1295a33](https://github.com/twilio-labs/paste/commit/1295a33862b3ad283c4af793e0566f4b0fcba4b5))
* upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))





## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/anchor@0.1.4...@twilio-paste/anchor@0.1.5) (2019-09-16)


### Bug Fixes

* **anchor:** set children as non-nullable, remove child null error ([#91](https://github.com/twilio-labs/paste/issues/91)) ([1c6d6c5](https://github.com/twilio-labs/paste/commit/1c6d6c5))





## 0.1.4 (2019-08-15)


### Bug Fixes

* change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
