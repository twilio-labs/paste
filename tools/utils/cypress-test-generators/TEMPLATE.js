const {upperFirst, startCase} = require('lodash');

module.exports = function (targetName, targetType = 'component') {
  return `describe('${upperFirst(targetName)} ${targetType} documentation page', () => {
  beforeEach(() => {
    cy.visit('/${targetType}/${targetName.toLowerCase()}');
  });

  it('should render the ${targetName} ${targetType} page correctly', () => {
    cy.pageHeaderShouldBeVisible('${startCase(targetName)}');

    cy.checkInPageNavigationLinks();
    cy.checkPageAside();
    cy.checkLivePreviews();
    cy.checkChangelogRevealer();
  });
});
`;
};
