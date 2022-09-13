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
    pageHeaderShouldBeVisible(props: {headerText: string; shouldHaveGithubLink?: boolean; shouldHaveStorybook?: boolean; shouldHaveOpenGraph?: boolean}): void;

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
     * - change log header `h2` with text "Changelog" is visible
     * - on click of header, the changelog content is visible.
     */
    checkChangelogRevealer(): void;

    /**
     * Navigates to a URL and takes a snapshot with for VRT.
     */
    visualRegressionTestUrl({url, testName}: {url: string, testName: string}): void;
  }
}
