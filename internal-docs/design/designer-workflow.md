# Designer workflow

**Last updated:** January 25, 2022

These guidelines are specific to our testing and release workflow in Figma.

---

- [Designer workflow](#designer-workflow)
  - [Starting new work](#starting-new-work)
  - [Requesting review](#requesting-review)
  - [Testing work](#testing-work)
  - [Finalizing work](#finalizing-work)
  - [Publishing the changes](#publishing-the-changes)
  - [Announcing releases](#announcing-releases)
  - [Publishing to Figma](#publishing-to-figma)
    - [Figma Plugins](#figma-plugins)
    - [Figma Community](#figma-community)
      - [Community files](#community-files)
      - [How to release](#how-to-release)
  - [Release notes template](#release-notes-template)
    - [Figma description template](#figma-description-template)
    - [Slack update template](#slack-update-template)
    - [Newsletter template](#newsletter-template)
  - [Figma branching](#figma-branching)
    - [Format](#format)
    - [Types](#types)
    - [Examples](#examples)

## Starting new work

When you are starting new work in the Paste Figma libraries, be sure to:

- First, create a branch off of the file you want to make changes to. Scroll to this section for [branch naming conventions](#figma-branching).
- If you’re working with library updates from another library, pull those updates into a new branch rather than the main branch.
- Put a “🚧” emoji at the start of the page name for any in-progress component (e.g. “🚧 Button”).
- Be sure you are keeping our [library standards](./design-library-standards.md) in mind when you are working in any Paste Figma libraries.
- For particularly complex components, consider drafting a blueprint (directly on the component page in Figma) to map out what component parts you will need, what props will be available at each layer of the component, and what other components in the library this component might be used in.

## Requesting review

When you are ready to request review:

- Request a review from **@dsys-pd** on your branch in Figma. You need 2 reviews from @dsys-pd before finalizing the work and publishing changes.
- Use the 'ready for dev' Figma functionality to highlight all the components and variables that were edited.
- Post in **#plz-design-systems** and tag **@dsys-pd** to request review.
- Sprinkle comments throughout the page in Figma if there are specific things you need the teams’ thoughts on.

## Testing work

When you have been tagged in to review a component:

- Check that token usage, heights, widths, and auto-layout configuration match the styles and functionality of the coded component as closely as possible.
- Ensure all styles are using text and layer styles from the Paste Default Theme library.
- Review prop naming and functionality, layer names, descriptions, and documentation links to ensure that all adhere to [our standards](./design-library-standards.md).
- Stress test with unhappy cases. Try to break it. Test with extra long and extra short blocks of text, switch back and forth between all variants, go wild resizing it.
- Ensure any text or size overrides remain when switching back and forth between variants.
- If this component is used in other components in the library, test those components too (e.g. Button is used in Modal, so Button changes should be tested on Modal).
- Reply to the original post in **#plz-design-systems** when you’ve finished your review.

## Finalizing work

After your work has been tested and approved:

- Turn off the "ready for dev" functionality in all components that had it enabled.
- Resolve any remaining comments in Figma to keep the file tidy.
- Create a sticker sheet of all the component variants
- Delete the blueprint, if you created one.
- Merge your branch into the main file branch on Figma. Make sure to merge before publishing changes.

## Publishing the changes

When work is final, it’s time to publish!

- If the component is not for publishing (i.e. a sub-component), add a period `. `before the component layer’s name to hide it from the publishing modal. ([ref](https://help.figma.com/hc/en-us/articles/360025508373-Publish-styles-and-components#private))
- Be sure only to publish the changes that you’ve been working on. Uncheck any other changes, as the work may still be in progress.
- In the optional description, include a bulleted list of the changes that are being published using [the template](#release-notes-template). This will appear for designers when updating the library in their projects.

## Announcing releases

After the new work has been published:

- Post in **#team-ux** that a new version of the library has been published with a summary of the changes using the [template](#release-notes-template). _We can update this guidance if/when we automate a Slackbot to post these updates for us._

- Copy/paste the release notes into the [running Paste Newsletter doc](https://drive.google.com/drive/folders/1sRSUjL-ZVl3V7excTSNVBD9y3GMiFLDF) for the given time period.

## Publishing to Figma

### Figma Plugins

To publish a Figma plugin to Twilio’s Figma Community page, the plugin has to be published by the @twilio organization account. If another creator publishes the plugin, the organization will have to re-publish and add that creator as a co-creator for the plugin to show up on the Twilio Figma community page.

### Figma Community

To publish a file to Figma Community, you need to have an ADMIN role in the @twilio organization on Figma.

When publishing to Figma Community, Figma takes a [snapshot of the file](https://help.figma.com/hc/en-us/articles/360040035974-Publish-Community-files) to update the community file. The community file doesn’t update unless we manually publish a new snapshot of the internal file.

#### Community files

We currently have one Figma files available to the Community:

1. [Twilio Components]([https://www.figma.com/community/file/1012844215105752327/Twilio-Components](https://www.figma.com/community/file/1207476064127503112/twilio-paste-components)) (internally: Paste Components)

#### How to release

1. Click the blue “Share” button in the top right corner of the Figma file
2. Navigate to the “Publish to Community” tab
3. Click “Publish update…”
4. A modal will appear to update the content. If you’re just updating the community file to match the internal file, you can ignore the content and click “Publish”.

---

## Release notes template

### Figma description template

```
- 🚀 New: [summary of new thing]
- ✨ Improved: [summary of improved thing]
- 🐛 Fixed: [summary of bug fix]
- ❗️ Breaking: [summary of breaking change*]
```

### Slack update template

```
:figma: Figma update coming at ya! The following changes were just published in the [library name] library:

- 🚀 New: [summary of new thing]
- ✨ Improved: [summary of improved thing]
- 🐛 Fixed: [summary of bug fix]
- ❗️ Breaking: [summary of breaking change*]

You should now see these updates available in your projects. Please reach out with questions or feedback!
```

### Newsletter template

_Added to the “Figma updates” section_

```
Release date
- 🚀 New: [summary of new thing]
- ✨ Improved: [summary of improved thing]
- 🐛 Fixed: [summary of bug fix]
- ❗️ NOTE: [summary of breaking change*]
```

\*A breaking change for a component is one where it would require manual work to upgrade to the new version (e.g. props are removed that may need to be reconfigured, sizing changed so layouts may break).

---

## Figma branching

[Figma](https://www.figma.com/best-practices/branching-in-figma/#naming-your-branches) suggests following similar branch naming conventions to your development team. Since merged branches are visible in the file version history, it’d be nice to closely follow the commit naming conventions in our [developer workflow](../engineering/developer-workflow.md).

### Format

- type(component): description

### Types

- feat: feature, generally additive, large or net new
- fix: small change, mostly design fixes to existing components
- chore: house cleaning, internal changes that have no customer-facing effects
- docs: documentation

### Examples

- feat(alert dialog): add a new variant
- fix(toast): left align text
- docs(badge): update description to match doc site
