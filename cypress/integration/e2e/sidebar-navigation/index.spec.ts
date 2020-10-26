describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens the sidebar disclosures correctly', () => {
    const gettingStartedButton = '[data-cy=getting-started-button]';
    const designTokensButton = '[data-cy=design-tokens-button]';
    const componentsButton = '[data-cy=components-button]';
    const primitivesButton = '[data-cy=primitives-button]';
    const layoutButton = '[data-cy=layout-button]';
    const iconsButton = '[data-cy=icons-button]';
    const contentButton = '[data-cy=content-button]';

    cy.get(gettingStartedButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.get(designTokensButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.get(componentsButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.get(primitivesButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.get(layoutButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.get(iconsButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
    cy.get(contentButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });
});
