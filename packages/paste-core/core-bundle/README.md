# @twilio-paste/core

One bundle containing every package within paste-core.

## How it works

### Procedure (happens in pre-build; see tools/generate.js)

1- Use lerna to fetch all the packages (see /tools/.cache/packages.json).
2- Filter out all packages that aren't productionized or not in core

(For the remaining packages:)

1- Add them to this package's dependencies.
2- Add the export lines to the index.tsx file.

### When this procedure is triggered

This happens automatically during prebuild.
