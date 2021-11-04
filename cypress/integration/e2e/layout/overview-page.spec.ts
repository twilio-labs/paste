import {GraphQLHttpResponse} from '../../types';

describe('Overview page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/page-data/layout/page-data.json').as('pageDataRequest');
    cy.visit('/layout');
    cy.wait('@pageDataRequest');

    cy.get<GraphQLHttpResponse>('@pageDataRequest').then(({response}) => {
      const {
        body: {
          result: {data},
        },
      } = response;
      cy.wrap(data).as('layoutOverviewData');
    });
  });

  it('should render the layout overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Layout');

    cy.overviewTableRendersCorrectly('@layoutOverviewData');
  });
});
