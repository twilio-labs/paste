describe('Filter group pattern examples', () => {
  beforeEach(() => {
    cy.visit('/patterns/filter-group');
    cy.get('[data-cy="filter-group-default-example"]').first().as('filterGroupWrapper');
    cy.get('@filterGroupWrapper').find('select[name="type"]').as('roomTypeSelect');
    cy.get('@filterGroupWrapper').find('select[name="range"]').as('dateRangeSelect');
    cy.get('@filterGroupWrapper').find('input[name="search"]').as('searchInput');
  });

  it('filters the table with the search bar', () => {
    cy.get('@filterGroupWrapper').find('tr').should('have.length', 8);
    cy.get('@searchInput').type('test').should('have.value', 'test');
    cy.get('@filterGroupWrapper').find('[data-cy="filter-group-search-button"]').click();
    cy.get('@filterGroupWrapper').find('tr').should('have.length', 3);
  });

  it('filters the table with the selects', () => {
    cy.get('@filterGroupWrapper').find('tr').should('have.length', 8);
    cy.get('@roomTypeSelect').select('Group').should('have.value', 'Group');
    cy.get('@dateRangeSelect').select('day').should('have.value', 'day');
    cy.get('@filterGroupWrapper').find('[data-cy="filter-group-apply-button"]').click();
    cy.get('@filterGroupWrapper').find('tr').should('have.length', 2);
  });

  describe('Empty state', () => {
    it('shows the empty state when search returns no results', () => {
      cy.get('@filterGroupWrapper').find('tr').should('have.length', 8);
      cy.get('@searchInput').type('asdfasdf');
      cy.get('@filterGroupWrapper').find('[data-cy="filter-group-search-button"]').click();
      cy.get('@filterGroupWrapper').find('table').should('have.length', 0);
      cy.get('@filterGroupWrapper').find('[data-cy="filter-group-empty-state-clear-button"]').should('be.visible');
    });

    it('shows the empty state when selects returns no results', () => {
      cy.get('@filterGroupWrapper').find('tr').should('have.length', 8);
      cy.get('@roomTypeSelect').select('Peer to Peer');
      cy.get('@dateRangeSelect').select('day');
      cy.get('@filterGroupWrapper').find('[data-cy="filter-group-apply-button"]').click();
      cy.get('@filterGroupWrapper').find('table').should('have.length', 0);
      cy.get('@filterGroupWrapper').find('[data-cy="filter-group-empty-state-clear-button"]').should('be.visible');
    });
  });

  describe('Clear buttons', () => {
    beforeEach(() => {
      cy.get('@roomTypeSelect').select('Group');
      cy.get('@dateRangeSelect').select('day');
      cy.get('@searchInput').type('sfasdf');
      cy.get('@filterGroupWrapper').find('[data-cy="filter-group-apply-button"]').click();
    });

    it('clears the filters when press clear button', () => {
      cy.get('@filterGroupWrapper').find('tr').should('have.length', 0);
      cy.get('@filterGroupWrapper').find('[data-cy="filter-group-clear-button"]').click();
      cy.get('@filterGroupWrapper').find('tr').should('have.length', 8);
      cy.get('@roomTypeSelect').should('have.value', 'All');
      cy.get('@dateRangeSelect').should('have.value', 'all');
      cy.get('@searchInput').should('have.value', '');
    });

    it('clears the filters when press empty state clear button', () => {
      cy.get('@filterGroupWrapper').find('tr').should('have.length', 0);
      cy.get('@filterGroupWrapper').find('[data-cy="filter-group-empty-state-clear-button"]').click();
      cy.get('@filterGroupWrapper').find('tr').should('have.length', 8);
      cy.get('@roomTypeSelect').should('have.value', 'All');
      cy.get('@dateRangeSelect').should('have.value', 'all');
      cy.get('@searchInput').should('have.value', '');
    });
  });
});
