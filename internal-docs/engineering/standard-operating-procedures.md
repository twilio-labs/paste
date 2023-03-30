# Standard Operating Procedures

- [Standard Operating Procedures](#standard-operating-procedures)
  - [Terminology](#terminology)
  - [Checklist](#checklist)
    - [Is this manner of consuming the product ergonomic and consistent?](#is-this-manner-of-consuming-the-product-ergonomic-and-consistent)
    - [Is this manner of developing the product maintainable?](#is-this-manner-of-developing-the-product-maintainable)
    - [Component Library specific](#component-library-specific)

These questions are ordered for a more natural progression.

## Terminology

- A "consumer" is an individual, a team, or an organization that has a focused scope of concern and their own environment.
- A "product" is any project, code snippet, or deliverable to be leveraged by **consumers**.

A good example of developing a product for multiple consumers would be the `React` library.

## Checklist

First we start by thinking of how this product will be consumed

### Is this manner of consuming the product ergonomic and consistent?

- [ ] Evaluate several possible usage patterns (look around the corner). Analyze their pros and cons, their consistencies and inconsistencies.
- [ ] Did we take into account multiple **consumers** in the design of this product?
- [ ] Document the selected pattern.
- [ ] Document _why_ the selected pattern was chosen.

Then we think about the development and technical debt incurred by this product.

### Is this manner of developing the product maintainable?

- [ ] This product passes our ESLint validator.
- [ ] This product is built using Typescript and can be compiled using our project's Typescript settings.
- [ ] This product has adequate tests.
- [ ] This product uses our tokens where appropriate.
- [ ] This product follows semver.
- [ ] This product has a changelog.
- [ ] This product is documented.
- [ ] This product is accessible.
- [ ] Is the solution future proof?
  - [ ] Throughout technology changes?
  - [ ] Throughout version changes?
  - [ ] Throughout feature additions, removals, or modifications?
  - [ ] What kind of updates could we make in the future? (look around the corner)
- [ ] If any future work is expected, documented the plan so that the future maintainer can gain context.

### Component Library specific

- The `package.json` file contains
  - [ ] the required yarn scripts: `[build, build:js, clean, tsc]`.
  - [ ] the following keys: `[name, version, category, status, description, author, license (MIT), main:dev, main, module, types, sideEffects, files]`
- [ ] The components have defined a `displayName` static.
- [ ] The package is compiled with esbuild and typescript.
- [ ] The `@twilio-paste/*` dependencies are marked as `peerDependencies`.
- [ ] The `@twilio-paste/*` peerDependencies are also listed under devDependencies.
