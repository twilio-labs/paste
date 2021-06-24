describe('Pattern overview table', () => {
  it('checks all links in table', () => {
    cy.visit('/patterns');

    cy.get('[data-cy=overview-table] a:not([href*="/patterns/notifications-and-feedback"])').each((page) => {
      cy.request(page.prop('href'));
    });
  });
});

describe('Components overview table', () => {
  it('checks all links in table', () => {
    cy.visit('/components');

    cy.get(
      '[data-cy=overview-table] a:not([href*="/components/help-text"]):not([href*="/components/form-key"]):not([href*="/components/label"]):not([href*="/components/time-picker"])'
    ).each((page) => {
      cy.request(page.prop('href'));
    });
  });
});

describe('Layout overview table', () => {
  it('checks all links in table', () => {
    cy.visit('/layout');

    cy.get('[data-cy=overview-table] a').each((page) => {
      cy.request(page.prop('href'));
    });
  });
});

describe('Primitives overview table', () => {
  it('checks all links in table', () => {
    cy.visit('/primitives');

    cy.get('[data-cy=overview-table] a').each((page) => {
      cy.request(page.prop('href'));
    });
  });
});
