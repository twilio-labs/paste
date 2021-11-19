describe('Alert-dialog component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/alert-dialog');
  });

  // it('should render the alert-dialog component page correctly', () => {
  //   cy.pageHeaderShouldBeVisible('Alert Dialog');

  //   cy.checkInPageNavigationLinks();
  //   cy.checkPageAside();
  //   cy.checkLivePreviews();
  //   cy.checkChangelogRevealer();
  // });

  it('should handle search', () => {
    cy.testAutocompleteSearch('h');
  });

  // it('should handle search', () => {
  //   cy.server();

  //   cy.route({
  //     method: 'POST',
  //     url: 'https://bh4d9od16a-dsn.algolia.net/1/indexes/*/**',
  //   }).as('searchRequest');

  //   cy.get('[data-cy="paste-docs-search-input"]').shouldBeVisible().focus().should('have.focus').clear().type('h');

  //   cy.wait('@searchRequest').then((data) => {
  //     const search = extractRequestParams(data);

  //     // const parsedParams = new URLSearchParams(search);
  //     // cy.wrap(parsedParams.has('query')).should('eql', true);
  //     // cy.wrap(parsedParams.get('query')).should('eql', 'h');
  //     // cy.wrap(data.status).should('eql', 200);

  //     verifyQuery(search, {query: 'h'});

  //     const hits = extractResponseHits(data);

  //     // cy.get('[id*="algolia-autocomplete-listbox"]')
  //     //   .should('be.visible')
  //     //   .find('[role="option"]')
  //     //   .should('have.length', hits.length);
  //     verifyResponseHits(hits.length);
  //   });

  //   // cy.get('[data-cy="paste-docs-search-input"]').should('have.focus').type('e');
  //   // cy.wait('@searchRequest').then((data) => {
  //   //   console.log({data});
  //   // });

  //   // cy.get('[data-cy="paste-docs-search-input"]').should('have.focus').type('l');
  //   // cy.wait('@searchRequest').then((data) => {
  //   //   console.log({data});
  //   // });

  //   // cy.get('[data-cy="paste-docs-search-input"]').should('have.focus').type('l');
  //   // cy.wait('@searchRequest').then((data) => {
  //   //   console.log({data});
  //   // });

  //   // cy.get('[data-cy="paste-docs-search-input"]').should('have.focus').type('o');
  //   // cy.wait('@searchRequest').then((data) => {
  //   //   console.log({data});
  //   // });
  // });
});
