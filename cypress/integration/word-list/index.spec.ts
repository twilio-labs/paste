describe('Word list with no filters', function () {
  beforeEach(() => {
    cy.visit('/foundations/content/word-list');
  });
  it('should have a pre-populated list of words in the table', () => {
    cy.get('[data-cy="word-list-table"] tbody tr').its('length').should('eq', 81);
  });
});

describe('Word list with filters', function () {
  beforeEach(() => {
    cy.visit('/foundations/content/word-list');
  });

  it('should filter the table when a filter string is provided', () => {
    cy.get('[data-cy="word-list-table"] tbody tr').as('table-rows');
    cy.get('[data-cy="word-list-filter-input"]').click().type('ad');
    cy.get('@table-rows').its('length').should('eq', 4);
  });
});
