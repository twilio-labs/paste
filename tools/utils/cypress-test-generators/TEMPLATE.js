const {upperFirst, startCase} = require('lodash');

module.exports = function (componentName) {
  return `describe('${upperFirst(componentName)} component documentation page', () => {
  beforeEach(() => {
    cy.visit('/components/${componentName.toLowerCase()}');
  });

  it('should render the ${componentName} component page correctly', () => {
    cy.pageHeaderShouldBeVisible('${startCase(componentName)}');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
`;
};
