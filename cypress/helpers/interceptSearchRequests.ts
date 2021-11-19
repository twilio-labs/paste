//https://bh4d9od16a-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20docsearch.js%202.6.3&x-algolia-application-id=BH4D9OD16A&x-algolia-api-key=c6eb931a8730b755bb868172bc270e33

// spy on request

//

const spyOnRequest = ({method, url, alias = 'request'}) => {
  cy.server();

  cy.route({method, url}).as('request');

  return cy;
};
