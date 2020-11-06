describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens the getting started disclosure', () => {
    cy.get('[data-cy=getting-started-button]').click();
    cy.get('[data-cy=getting-started-list]').should('not.have.attr', 'hidden');
  });

  it('opens the tokens disclosure', () => {
    cy.get('[data-cy=design-tokens-button]').click();
    cy.get('[data-cy=design-tokens-list]').should('not.have.attr', 'hidden');
  });

  it('opens the components disclosure', () => {
    cy.get('[data-cy=components-button]').click();
    cy.get('[data-cy=components-list]').should('not.have.attr', 'hidden');
  });

  it('opens the primitives disclosure', () => {
    cy.get('[data-cy=primitives-button]').click();
    cy.get('[data-cy=primitives-list]').should('not.have.attr', 'hidden');
  });

  it('opens the layout disclosure', () => {
    cy.get('[data-cy=layout-button]').click();
    cy.get('[data-cy=layout-list]').should('not.have.attr', 'hidden');
  });

  it('opens the icons disclosure', () => {
    cy.get('[data-cy=icons-button]').click();
    cy.get('[data-cy=icons-list]').should('not.have.attr', 'hidden');
  });

  it('opens the content disclosure', () => {
    cy.get('[data-cy=content-button]').click();
    cy.get('[data-cy=content-list]').should('not.have.attr', 'hidden');
  });

  it('opens the patterns disclosure', () => {
    cy.get('[data-cy=patterns-button]').click();
    cy.get('[data-cy=patterns-list]').should('not.have.attr', 'hidden');
  });
});
