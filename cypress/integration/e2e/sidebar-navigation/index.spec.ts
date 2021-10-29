describe('Sidebar navigation', () => {
  it('opens the sidebar disclosures', () => {
    cy.visit('/');
    cy.wait(2500);

    cy.get('[data-cy=getting-started-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=getting-started-list]').should('be.visible');

    cy.get('[data-cy=design-tokens-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=design-tokens-list]').should('be.visible');

    cy.get('[data-cy=components-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=components-list]').should('be.visible');

    cy.get('[data-cy=primitives-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=primitives-list]').should('be.visible');

    cy.get('[data-cy=layout-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=layout-list]').should('be.visible');

    cy.get('[data-cy=icons-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=icons-list]').should('be.visible');

    cy.get('[data-cy=content-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=content-list]').should('be.visible');

    cy.get('[data-cy=patterns-button]').click({force: true}).should('have.attr', 'aria-expanded', 'true');
    cy.get('[data-cy=patterns-list]').should('be.visible');
  });
});
