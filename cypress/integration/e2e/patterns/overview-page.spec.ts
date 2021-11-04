import {GraphQLHttpResponse} from '../../types';

describe('Overview page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/page-data/patterns/page-data.json').as('pageDataRequest');
    cy.visit('/patterns');
    cy.wait('@pageDataRequest');

    cy.get<GraphQLHttpResponse>('@pageDataRequest').then(({response}) => {
      const {
        body: {
          result: {data},
        },
      } = response;
      cy.wrap(data).as('patternsOverviewData');
    });
  });

  it('should render the patterns overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Patterns');

    cy.overviewTableRendersCorrectly('@patternsOverviewData');
  });
});
