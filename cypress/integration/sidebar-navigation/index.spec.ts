describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
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
