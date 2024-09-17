# Contributing

## Organization

- All top level packages must be prefixed by the word `paste-` to distinguish them from sub-folders.
- All system level packages should be placed at the top level (icons, theme, website)
- All primitive elements should be placed within the `paste-core` folder.

## Package Requirements

![Image of good structure](https://cdn.discordapp.com/attachments/293855810063302657/599371250925699072/unknown.png)

- [ ] a `package.json` file with the following sub-requirements:
  - The following scripts: `build, build:dev, clean, type-check, prepublishOnly`.
  - Author must be `Twilio Inc.`
  - You must define the `main`, `module`, `types`, and `main:dev` (src entrypoint file for storybook to find and hot-reload on changes)
  - You package should be sideEffects free (`"sideEffects": false,`). A "side effect" is defined as code that performs a special behavior when imported, other than exposing one or more exports. An example of this are polyfills, which affect the global scope and usually do not provide an export. This allows tree-shaking to work. [Additional reading](https://webpack.js.org/guides/tree-shaking/).
  - You must define the `"files"` to be simply `"dist"`. This way no source files get downloaded by consumers of the package.
  - You must define the `"status"` of the component to be one of:
    - `"backlog"`
    - `"alpha"`
    - `"beta"`
    - `"stable"`
  - You must define the `"category"` that best desribes the components usage to be one of:
    - `"graphic"`
    - `"layout"`
    - `"typography"`
    - `"interaction"`
    - `"overlays"`
    - `"user input"`
    - `"data display"`
    - `"feedback"`
    - `"navigation"`
- [ ] a `tsconfig.json` file (they're all similar).
- [ ] a `tsconfig.build.json` file (they're all similar and the build tools manage the "references" upkeep so you don't have to).
- [ ] a `src/` folder with all your package's code.
- [ ] a `stories/` folder with your storybook stories named as `*.stories.ts(x)`. Give your stories knobs and make them cover all use-cases.
- [ ] a `__tests__` folder with your package's tests.
- [ ] a `build.js` file defining how to build the package. Similar to other packages usually.
- [ ] a `CHANGELOG.md`. Note: this is kept up to date automatically so you don't need to manually edit it.
- [ ] a `README.md` to detail more information about working on that package's code, if necessary.

## Standard Operating Procedures

All contributions must abide by our [Standard Operating Procedures](https://github.com/twilio-labs/paste/blob/main/internal-docs/engineering/standard-operating-procedures.md). This helps us mitigate errors caused by oversight or forgetfulness by leaning on lessons learned through past mistakes.
