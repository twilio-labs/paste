import {GraphQLHttpResponse} from '../../types';

describe('Overview page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/page-data/primitives/page-data.json').as('pageDataRequest');
    cy.visit('/primitives');
    cy.wait('@pageDataRequest');

    cy.get<GraphQLHttpResponse>('@pageDataRequest').then(({response}) => {
      const {
        body: {
          result: {data},
        },
      } = response;
      cy.wrap(data).as('primitivesOverviewData');
    });
  });

  it('should render the primitives overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Primitives');

    cy.overviewTableRendersCorrectly('@primitivesOverviewData');
  });
});
