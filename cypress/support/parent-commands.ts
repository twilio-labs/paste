/**
 * @file Custom parent commands
 * @description commands that are not chained off of a previous command
 * @example <caption>For a login command that does not chain off of a parent</caption>
 * `Cypress.Commands.add("login", (email, password) => { ... })`
 * @see https://on.cypress.io/custom-commands#Parent-Commands
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Gets the docs side `main` tag and returns it's chainer.
     * @example <caption>Find div with ID "my-selector" from the main element.</caption>
     * // returns Chainer<HTMLDivElement>
     * cy.getDocsPageContentArea().get('#my-selector').then(...);
     */
    getDocsPageContentArea(): Chainable<Subject>;

    /**
     * Gets element by selector in a fixed container.
     *
     * @param {string} selector
     * @returns `Chainable<Subject>`
     * @example <caption>Find div with ID "my-selector" from the main element.</caption>
     * // returns Chainer<HTMLDivElement>
     * cy.getInFixedContainer('#my-selector').then(...);
     * @alias `get`
     * @alias `invoke('innerHeight')`
     * @alias `scrollIntoView({offset: {top: height, left: 0}})`
     * @see https://on.cypress.io/guides/core-concepts/interacting-with-elements#scrolling
     */
    getInFixedContainer(selector: string): Chainable<Subject>;

    /**
     * Gets page header and asserts it it exists, and is visible with correct text.
     *
     * @param {string} headerText
     * @alias `contains`
     * @alias `should`
     */
    pageHeaderShouldBeVisible(headerText: string): void;

    /**
     * Asserts the overview table component renders correctly.
     */
    overviewTableRendersCorrectly(): void;

    /**
     * Asserts that:
     * - anchored headings each have an `href` attribute that is prefixed by `#`
     * - that only `h2` and `h3` headings have matching in-page navigation links.
     */
    checkInPageNavigationLinks(): void;

    /**
     * Asserts that:
     * - anchored headings each have an `href` attribute that is prefixed by `#`
     * - that only `h2` and `h3` headings have matching in-page navigation links.
     */
    checkPageAside(): void;

    /**
     * Asserts that:
     * - at least one live preview is in page
     */
    checkLivePreviews(): void;

    /**
     * Asserts that:
     * - at least one do/don't container is in page
     */
    checkDoDonts(): void;

    /**
     * Asserts that:
     * - change log container is visible
     * - change log header `h2` with text "Changlog" is visible
     * - on click of header, the changelog content is visible.
     */
    checkChangelogRevealer(): void;

    // @TODO add notes/docs here.
    verifyExpectedQuery(queryString: string, expectedParams: Record<string, string | boolean>): void;
  }
}

Cypress.Commands.add('getDocsPageContentArea', () => cy.get('#paste-docs-content-area'));

Cypress.Commands.add('pageHeaderShouldBeVisible', (headerText) => {
  cy.contains('h1', headerText).should('be.visible');
});

Cypress.Commands.add('overviewTableRendersCorrectly', () => {
  cy.get('table').first().as('componentsTable').should('be.visible');
  cy.get('@componentsTable').find('thead').find('tr').find('th').as('overviewTableHeaders');
  cy.get('@componentsTable').find('tbody').find('tr').as('tableRows');

  // Table has correct number of headers
  cy.get('@overviewTableHeaders').should('have.length', 6);

  // Table has correct text for headers
  const headers = ['Name', 'Status', 'Code ready', 'Design assets', 'Documentation', 'Peer review'];
  cy.get('@overviewTableHeaders').each((header, index) => {
    // using include here to do a loose match of headers
    cy.wrap(header).should('include.text', headers[index]);
  });

  // verify at least one row is rendered.
  cy.get('@tableRows').its('length').should('be.greaterThan', 0);
});

Cypress.Commands.add('checkInPageNavigationLinks', () => {
  cy.getDocsPageContentArea().as('contentArea');

  cy.get('@contentArea').find('[data-cy="page-aside-anchor"]').as('pageAsideAnchors');

  cy.get('@contentArea')
    .find(
      '[data-cy="anchored-heading-h2"]:not(#component-changelog a),[data-cy="anchored-heading-h3"]:not(#component-changelog a)'
    )
    .as('anchoredHeadings');

  cy.get('@pageAsideAnchors').then((anchors) => {
    cy.get('@anchoredHeadings').each((anchor, idx) => {
      cy.wrap(anchor).should('have.attr', 'href').and('include', '#');
      cy.wrap(anchors[idx]).should('have.attr', 'href').and('include', '#').and('eql', anchor.attr('href'));
    });
  });
});

// @TODO Check ComponentHeader <--- waiting for changes to this component to be merged.
// Cypress.Commands.add('checkComponentHeader', () => {});

Cypress.Commands.add('checkPageAside', () => {
  cy.getDocsPageContentArea().getInFixedContainer('[data-cy="page-aside"]').as('pageAside');
  cy.get('@pageAside').find('[data-cy="table-of-contents"]').should('be.visible');
  cy.get('@pageAside').contains('button', 'Rate this page').should('be.visible');
  cy.get('@pageAside').find('[data-cy="page-aside-anchor"]').should('be.visible');
});

Cypress.Commands.add('checkLivePreviews', () => {
  cy.getDocsPageContentArea().find('[data-cy="live-preview"]').should('have.length.above', 0);
});

const commonSpies = {
  search: '*.algolia.net/1/indexes/*/queries*',
  analytics: '*.google-analytics.com*',
};

Cypress.Commands.add('verifyExpectedQuery', (searchString, expectedQuery) => {
  const parsedParams = new URLSearchParams(searchString);

  const expectedQueryParamKeys = Object.keys(expectedQuery);
  expectedQueryParamKeys.forEach((key) => {
    cy.wrap(parsedParams.has(key)).should('eql', true);
    cy.wrap(parsedParams.get(key)).should('eql', expectedQuery[key]);
  });
});

Cypress.Commands.add('checkDoDonts', () => {
  cy.getDocsPageContentArea().find('[data-cy="do-dont-container"]').and('have.length.above', 0);
  cy.getDocsPageContentArea().find('[data-cy="do-box"]').and('have.length.above', 0);
  cy.getDocsPageContentArea().find('[data-cy="dont-box"]').and('have.length.above', 0);
});

Cypress.Commands.add('checkChangelogRevealer', () => {
  cy.getInFixedContainer('#component-changelog')
    .as('changelogContainer')
    .contains('h2', 'Changelog')
    .should('be.visible')
    .click(); // Note: when cypress is upgraded, we can specify ScrollBehavior here to center if not default

  cy.get('@changelogContainer').find('[data-cy="changelog-revealer-content"]').should('be.visible');
});

Cypress.Commands.add('getInFixedContainer', (selector) => {
  cy.get(selector).as('target');

  return cy
    .get('@target')
    .invoke('innerHeight')
    .then((height) => {
      return cy.get('@target').scrollIntoView({offset: {top: (height as number) / 2, left: 0}, ensureScrollable: true});
    });
});
