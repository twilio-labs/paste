const SidebarNavigationDisclosures = [
  'introduction',
  'for-designers',
  'for-engineers',
  'contributing',
  'foundations',
  'content',
  'patterns',
  // 'components',
  // 'icons',
  'primitives',
  'design-tokens',
  'core',
  'libraries',
  'customization',
];

describe('Sidebar navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
  });

  it('opens the sidebar disclosures', () => {
    SidebarNavigationDisclosures.forEach((disclosureName) => {
      cy.get(`[data-cy=${disclosureName}-button]`).click().should('have.attr', 'aria-expanded', 'true');
      cy.getInFixedContainer(`[data-cy=${disclosureName}-list]`).should('be.visible');
    });
  });
});
