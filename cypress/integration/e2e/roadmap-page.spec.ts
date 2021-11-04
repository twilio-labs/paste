describe('Roadmap Page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/page-data/roadmap/page-data.json').as('roadmapDataRequest');
    cy.visit('/roadmap');
    cy.wait('@roadmapDataRequest');

    return cy
      .get<{response: {body: {result: {data: {BPM: Record<string, any>[]; Roadmap: Record<string, any>[]}}}}}>(
        '@roadmapDataRequest'
      )
      .then(({response}) => {
        cy.wrap(Cypress._.get(response, 'body.result.data.BPM.edges')).as('bpmData');
        cy.wrap(Cypress._.get(response, 'body.result.data.Roadmap.group')).as('roadmapData');
      });
  });

  it('should load page data with correct shape', () => {
    cy.get('@bpmData').then((bpmData) => {
      expect(Array.isArray(bpmData) && !Cypress._.isEmpty(bpmData)).to.equal(true);
    });
    cy.get('@roadmapData').then((roadmapData) => {
      expect(Array.isArray(roadmapData) && !Cypress._.isEmpty(roadmapData)).to.equal(true);
    });
  });

  it('should load the roadmap correctly', () => {
    cy.get<Record<string, any>[]>('@roadmapData').then((data) => {
      const numberOfExpectedRoadmapReleases = data.length;

      cy.get('table').should('have.length', numberOfExpectedRoadmapReleases);

      data.forEach(({release}) => {
        cy.contains('h2', release).should('exist');
      });
    });
  });
});
