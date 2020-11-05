describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens the getting started disclosure', () => {
    cy.get('[data-cy=getting-started-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the tokens disclosure', () => {
    cy.get('[data-cy=design-tokens-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the components disclosure', () => {
    cy.get('[data-cy=components-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the primitives disclosure', () => {
    cy.get('[data-cy=primitives-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the layout disclosure', () => {
    cy.get('[data-cy=layout-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the icons disclosure', () => {
    cy.get('[data-cy=icons-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the content disclosure', () => {
    cy.get('[data-cy=content-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the patterns disclosure', () => {
    cy.get('[data-cy=patterns-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });
});
