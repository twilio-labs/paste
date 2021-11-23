describe('Sidebar navigation', () => {
  beforeEach(() => {
    // The sidebar navigation requires this endpoint's data to load in order for the expected behavior to be functional.
    cy.intercept('/page-data/index/page-data.json').as('indexPageData');
    cy.visit('/');
    // waiting for the data to load ensures that our tests only run when the page is ready to be interacted with.
    cy.wait('@indexPageData');
  });

  it('opens the sidebar disclosures', () => {
    cy.get('[data-cy="getting-started-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="getting-started-list"]').should('be.visible');

    cy.get('[data-cy="design-tokens-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="design-tokens-list"]').should('be.visible');

    cy.get('[data-cy="components-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="components-list"]').should('be.visible');

    cy.get('[data-cy="primitives-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="primitives-list"]').should('be.visible');

    cy.get('[data-cy="layout-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="layout-list"]').should('be.visible');

    cy.get('[data-cy="icons-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="icons-list"]').should('be.visible');

    cy.get('[data-cy="content-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="content-list"]').should('be.visible');

    cy.get('[data-cy="patterns-button"]').click().shouldHaveAttribute('aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy="patterns-list"]').should('be.visible');
  });
});
