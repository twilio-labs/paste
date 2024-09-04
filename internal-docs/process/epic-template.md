# Jira Epic Template

- [Jira Epic Template](#jira-epic-template)
  - [Design](#design)
    - [Kickoff component](#kickoff-component)
    - [Write spec for component](#write-spec-for-component)
    - [Design component](#design-component)
    - [Iterate on spec based on peer review](#iterate-on-spec-based-on-peer-review)
    - [Finalize spec and design based on final review](#finalize-spec-and-design-based-on-final-review)
    - [Publish Figma component](#publish-figma-component)
  - [Engineering](#engineering)
    - [Create component API explorations](#create-component-api-explorations)
    - [Create component package](#create-component-package)
    - [Build component doc page](#build-component-doc-page)
    - [Publish pattern](#publish-pattern)

**N.B.** Each heading 2 represents one ticket.

## Design

### Kickoff component

1. An engineer and designer should pair to write the kickoff document. Make a copy of this doc and fill out the bottom kickoff section: [Kickoff doc](https://docs.google.com/document/d/1Egx2cXpzKluMFJwp3NcJKaGAA8KsDbkFSz5QxsFqrtc/edit#heading=h.gwj72pv8f47o)
2. Create a "Request for input" post in Github Discussions, and share the request for input in all the design + front-end Slack channels.
3. Schedule kickoff with team

### Write spec for component

1. An engineer and designer should pair to write the component spec. Use the same doc as the kickoff doc.
2. Includes descriptions for everything in the component and API acceptance criteria listed in the kickoff section.
3. Schedule a review with the team.
4. Share the spec and API exploration (coordinate with the engineer working on it) as a Request for Comment (RFC) on Github Discussions. Share the post in all the design + front-end Slack channels.

### Design component

1. Design the component
2. Includes design for states listed in the acceptance criteria.
3. Schedule a review with the team.
4. Share the design as a Request for Comment (RFC) on Github Discussions. Share the post in all the design + front-end Slack channels.

### Iterate on spec based on peer review

_Always create this as a placeholder, add details as they come to light or close ticket as "won't do" if not needed._

1. Iterate on spec based on feedback from internal review, crits, and peer review.
2. Schedule final team review.
3. Revise original RFCs.

### Finalize spec and design based on final review

_Create this as a placeholder. Add details as they come to light, or close the ticket as "won't do" if not needed._

1. Finalize component spec and design based on feedback.
2. Add a link of screenshots showing products’ current usage of the component to the corresponding “[Build component doc page](#build-component-doc-page)” ticket. This helps with defining examples for the page
3. Share final design in spec in design + front-end Slack channels.

### Publish Figma component

1. Create the Figma component. Make sure the component is suffixed with “(dev)” if it’s not yet in code.
2. Test Figma implementation: [Testing work](../design/designer-workflow.md#testing-work)
3. Review with DSYS designers.
4. Publish the component: [Finalizing work](../design/designer-workflow.md#finalizing-work)
5. Update the "Takeaways" section of the spec doc with any decisions made or learnings from the building process.
6. Optional: create a Loom video showing how to use the Figma component. Add it to the component spec.
7. Update Airtable to reflect the component has design assets.

---

## Engineering

### Create component API explorations

_If the component API is somewhat unknown, this ticket can be done before building the component package. If the API is known, this can be closed as “won’t do”._

- Research what other design system libraries are currently doing for their version
- Build prototypes in CodeSandbox to explore possible API directions
- Review prototypes with DSYS
- Post the API exploration and spec (coordinate with whoever's writing the spec) on Github as an RFC.
  - Decide what the component API should be. Add a link in the corresponding component package ticket, or create the ticket.

### Create component package

_If the full component can’t be completed in one sprint, split this ticket up for the different variations of this component._

- Follow component spec for component: [LINK]
- Build the package/component following the design: [LINK TO FIGMA]
  - Use the `yarn create:package` script
- Add the ability to customize tagged element nodes inside of a component, by targeting them from the customization provider.
  - Box is used for each node.
  - Allow element prop to be set on the component. Set the default to be the name of the component. e.g. element = 'ALERT'
  - Each customizable element inside a component should use the passed in element name to compose their names e.g `${element}`,`${element}_CHILD`,`${element}_CHILD2`. This allows for Paste-defined element names, and unique custom instances of the component when used by a consumer.
  - See a checklist with more details [here](../engineering/core/adding-customization-to-components.md)
- Write tests
  - Write unit tests to cover all functionality
  - Write tests to verify all props are passed
  - Create tests that ensure the defined custom element API remains. Any changes to those are a breaking change. If you tag an internal node as customizable that has to remain customizable forever.
- Define stories for Storybook
  - Write Storybook stories for component
  - Create Stories to use in VRT to ensure customizations don't break
  - Include all permutations
- Update the "Takeaways" section of the spec doc with any decisions made or learnings from the building process.
- Optional: create a Loom video showing how to use the coded component. Link to it in the component spec.

### Build component doc page

- Build component doc page based off component spec doc
- The package stage is updated appropriately in Airtable
- Define what the examples are for the component page

### Publish pattern

- Build pattern doc page based off pattern spec doc
- Build pattern examples
- The pattern stage is updated appropriately in Airtable
