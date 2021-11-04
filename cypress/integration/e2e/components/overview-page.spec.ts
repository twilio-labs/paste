import {GraphQLHttpResponse} from '../../types';

describe('Overview page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/page-data/components/page-data.json').as('pageDataRequest');
    cy.visit('/components');
    cy.wait('@pageDataRequest');

    cy.get<GraphQLHttpResponse>('@pageDataRequest').then(({response}) => {
      const {
        body: {
          result: {data},
        },
      } = response;
      cy.wrap(data).as('componentOverviewData');
    });
  });

  it('should render the components overview page correctly', () => {
    cy.pageHeaderShouldBeVisible('Components');

    cy.overviewTableRendersCorrectly('@componentOverviewData');
  });
});
