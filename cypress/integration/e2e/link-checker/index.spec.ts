/**
 * USAGE:
 * 1. yarn build:website
 * 2. yarn serve:website
 * 3. yarn run cyprus open
 * 4. Click the link-checker test in the cyprus window that pops up
 *
 * Doesn't work on the `yarn start:website` command because
 * this runs on the SSR site for speed of execution in CI.
 */

// FIXME: these are all broken links we should do something about
const IGNORE_LIST = [
  // Left these in there because they're being called from the sidebar nav.
  // That will need to be refactored to pull from AirTable instead of packages.
  'components/help-text',
  'components/label',
  'primitives/sibling-box',
  '/__/', // I don't know where this is being picked up
];

/*
 * This function determines whether the link should be visited in our crawl
 */
const shouldVisitLink = (link) => {
  // We should never have a `//` in a url other than the one in `http://`
  const passesDoubleSlashTest = link.split('//')[2] == null;
  const passesIrrelevantTest = !link.includes('page-data') && !link.includes('socket.io');
  const passesHostTest = link.includes('//localhost:');
  const passesIgnoreTest = !IGNORE_LIST.some((ignoreItem) => link.includes(ignoreItem));

  return passesDoubleSlashTest && passesIrrelevantTest && passesHostTest && passesIgnoreTest;
};

describe('Broken link checker', () => {
  it('recursively check all website links for any broken links', () => {
    const VISITED_LINKS = new Set();

    function crawlPageLinks(pagePath: string) {
      // If the page is visited already, skip recrawling it
      if (VISITED_LINKS.has(pagePath)) return;
      // Add the link to the list of visited links
      VISITED_LINKS.add(pagePath);

      // This requests the page and only retrieves the body content,
      // so it omits the need to wait for the JS to execute.
      // This makes this crawler much more performant, but it only
      // works because we SSR our website.
      cy.request(pagePath)
        .its('body')
        .then((html) => {
          // Cyprus has a jQuery like syntax (called Cheerio) to traverse
          // the html content: https://cheerio.js.org
          // Finds all anchors in the HTML that aren't 'mailto' links.
          const $anchors = Cypress.$(html).find("a:not([href*='mailto:'])");

          // For every anchor on the page, call this function again
          // to request it and scan for that page's anchors
          // until every link has been crawled. #recursion
          $anchors.each((index: number) => {
            const href = $anchors[index].href;
            // Remove the hash to prevent checking the same actual link multiple times
            const link = href.split('#')[0];

            if (shouldVisitLink(link)) {
              crawlPageLinks(link);
            }
          });
        });
    }

    // Start the recursive crawl on the homepage path
    crawlPageLinks('/');
  });
});
