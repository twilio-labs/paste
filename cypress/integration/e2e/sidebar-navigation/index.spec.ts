describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const gettingStartedButton = '[data-cy=getting-started-button]';
  const designTokensButton = '[data-cy=design-tokens-button]';
  const componentsButton = '[data-cy=components-button]';
  const primitivesButton = '[data-cy=primitives-button]';
  const layoutButton = '[data-cy=layout-button]';
  const iconsButton = '[data-cy=icons-button]';
  const contentButton = '[data-cy=content-button]';

  it('opens the getting started menu', () => {
    cy.get(gettingStartedButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the design tokens menu', () => {
    cy.get(designTokensButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the components menu', () => {
    cy.get(componentsButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the primitives menu', () => {
    cy.get(primitivesButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the layout menu', () => {
    cy.get(layoutButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the icons menu', () => {
    cy.get(iconsButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the content menu', () => {
    cy.get(contentButton)
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });
});
