describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
  });

  it('opens the sidebar disclosures', () => {
    cy.get('[data-cy=getting-started-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=getting-started-list]').should('be.visible');

    cy.get('[data-cy=design-tokens-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=design-tokens-list]').should('be.visible');

    cy.get('[data-cy=components-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=components-list]').should('be.visible');

    cy.get('[data-cy=primitives-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=primitives-list]').should('be.visible');

    cy.get('[data-cy=layout-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=layout-list]').should('be.visible');

    cy.get('[data-cy=icons-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=icons-list]').should('be.visible');

    cy.get('[data-cy=content-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=content-list]').should('be.visible');

    cy.get('[data-cy=patterns-button]').click().should('have.attr', 'aria-expanded', 'true');
    cy.getInFixedContainer('[data-cy=patterns-list]').should('be.visible');
  });
});
