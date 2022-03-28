# @twilio-paste/core

One bundle containing every package within paste except icons.

## How it works

### Procedure (happens in pre-build; see tools/generate.js)

1- Use lerna to fetch all the packages (see /tools/.cache/packages.json).
2- Filter out all packages that aren't productionized or not in core

(For the remaining packages:)

1- Add them to this package's dependencies.
2- Add the export lines to the index.tsx file.
3- Create individual export files in ./dist/ (unbarreled exports, 1 per package)
4- Create fake packages pointing to the dist file in the root folder of this package (for easier importing)

### When is this procedure is triggered?

This happens automatically during prebuild, to guarantee correctness on releases.
