const sidebarNavigationDisclosures = [
  'introduction',
  'for-designers',
  'for-engineers',
  'contributing',
  'foundations',
  'content',
  'patterns',
  'components',
  'icon',
  'primitives',
  'tokens',
  'core',
  'libraries',
  'customization',
];

const BASE = 'sidebar-disclosure';

describe('Sidebar navigation', () => {
  // set of the data-cy attribute values for all the tested disclosures
  let visited = new Set<string>();

  before(() => {
    cy.visit('/');
    cy.wait(1000);
  });

  beforeEach(() => {
    if (visited.size > 0) {
      cleanupOpenDisclosures(visited);
    }
  });

  sidebarNavigationDisclosures.forEach((disclosureName) => {
    const buttonSelector = `${BASE}-button-${disclosureName}`;
    const contentSelector = `${BASE}-content-${disclosureName}`;

    it(`should open the the "${disclosureName}" sidebar disclosure`, () => {
      cy.get(`[data-cy="${buttonSelector}"]`).click().should('have.attr', 'aria-expanded', 'true');
      // creates an alias for the content
      cy.get(`[data-cy="${contentSelector}"]`).as('currentContent');

      cy.get('@currentContent')
        // calls jquery attr() on the DOM element, returns the value of the data-level attribute
        .invoke('attr', 'data-level')
        .then((level) => {
          return getTargetOffset(level);
        })
        .then((offset) => {
          // scrollIntoView has offset arg, which takes top and left coordinates and scrolls that far after element is in view
          cy.get('@currentContent').scrollIntoView({offset}).should('be.visible');
          visited.add(buttonSelector);
        });
    });
  });
});

/**
 * Helper that goes through all the top level disclosure buttons. If their associated content has no unvisited disclosures within it, cypress closes the disclosure and expects the aria-expanded attribute to update accordingly.
 * @param visited {Set<string>} - set of the data-cy attribute values of disclosures that have aleady been tested
 */
function cleanupOpenDisclosures(visited: Set<string>) {
  cy.get('aside').then(($aside) => {
    // array of the HTMLElements of all the expanded disclosure buttons
    const expandedButtons = $aside.find(`[aria-expanded="true"]`).toArray();

    // array of the cy attribute values of all the top level expanded and visited buttons (decided we don't need to collapse nested disclosures because can just collapse the top level one)
    const filteredCyAttributes = expandedButtons.reduce((accum, disclosure) => {
      const cyAttr = disclosure.getAttribute('data-cy');
      const level = Number(disclosure.getAttribute('data-level'));

      return visited.has(cyAttr) && level === 0 ? [...accum, cyAttr] : accum;
    }, []);

    filteredCyAttributes.forEach((currentSelector) => {
      // get the content associated with the current button
      cy.get(`[data-cy="${currentSelector.replace('button', 'content')}"]`)
        // returns an array of disclosure buttons inside the content that are not in the visited set
        .then(($content) => {
          return $content
            .find('button')
            .toArray()
            .filter(($btn) => {
              const btnAttr = $btn.getAttribute('data-cy');
              return !visited.has(btnAttr);
            });
        })
        // returns a boolean - the disclosure should close if there are no unvisited disclosures in the content
        .then((result) => {
          return result.length === 0;
        })
        .then((shouldClose) => {
          if (shouldClose) {
            cy.log(`closing disclosure button: ${currentSelector}`);
            cy.get(`[data-cy="${currentSelector}"]`).click().should('have.attr', 'aria-expanded', 'false');
          }
        })
        .end();
    });
  });
}

/**
 * Helper that gets the coordinates of the disclosure content relative to the ul that wraps the disclosures
 * @param level {'0' | '1'} - the level the disclosure content is nested
 * @returns {top, left} - the content's coordinates
 */
function getTargetOffset(level) {
  if (Number(level) > 0) {
    // creates an alias for the ul that wraps the disclosures
    cy.get('@currentContent').parent().parent().as('navigationList');

    return (
      cy
        .get('@navigationList')
        // calls jquery offset(), returns top, left coordinates of the ul
        .invoke('offset')
        .then((containingOffset) => {
          cy.get('@currentContent')
            // calls jquery offset(), returns top, left coordinates of disclosure content
            .invoke('offset')
            .then((currentOffset) => {
              // add the top values, which is the correct value for cypress to scroll
              const top = containingOffset.top + currentOffset.top;
              const left = currentOffset.left;
              return {top, left};
            });
        })
    );
  }

  return cy.get('@currentContent').invoke('offset');
}
