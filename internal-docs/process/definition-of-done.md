# Definition of Done

- [Definition of Done](#definition-of-done)
  - [Team Definition of Done (for all issues where applicable)](#team-definition-of-done-for-all-issues-where-applicable)
  - [Component Definition of Done](#component-definition-of-done)
  - [Website Definition of Done](#website-definition-of-done)

A Definition of Done (DoD) is a team agreement of when an issue from the backlog can be considered officially “done.” This definition ensures everyone is operating from the same understanding and helps capture repetitive requirements so they don't have to be enumerated on every story.

## Team Definition of Done (for all issues where applicable)

1. All Acceptance Criteria items defined in the ticket have been met, or explicitly accepted by the PO as an exception
2. All work outside of bug fixes or admin tasks should have a kickoff
3. The developed UI should match the Figma Files
4. Designer to review all UI items before it is published to website

## Component Definition of Done

1. The component is available for people to use (i.e. documentation, usable component, reviewable design files, announcements) (doesn’t apply to alpha component)
2. Components must go through the Design Systems committee review and design critiques before they can be considered done. (doesn’t apply to alpha component)
3. Design and implementation of a component must meet AA rating for accessibility (DOES apply to stage 1 components)
4. Component must have unit tests
5. Component must have documentation
6. Code is reviewed by at least two members of the team, one of which must be a from the engineering leads

## Website Definition of Done

1. Cypress end-to-end test for any functionality
2. Storybook story to catch component visual regression
3. New pages should have a Percy VRT test in Cypress
4. Proof read by at least two members of the team
5. Tested on a mobile device.
