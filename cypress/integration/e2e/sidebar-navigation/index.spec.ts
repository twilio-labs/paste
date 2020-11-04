describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens the getting started discosure', () => {
    cy.get('[data-cy=getting-started-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the tokens discosure', () => {
    cy.get('[data-cy=design-tokens-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the components discosure', () => {
    cy.get('[data-cy=components-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the primitives discosure', () => {
    cy.get('[data-cy=primitives-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the layout discosure', () => {
    cy.get('[data-cy=layout-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the icons discosure', () => {
    cy.get('[data-cy=icons-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the content discosure', () => {
    cy.get('[data-cy=content-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });

  it('opens the patterns discosure', () => {
    cy.get('[data-cy=patterns-button]')
      .click()
      .should('have.attr', 'aria-expanded', 'true');
  });
});
