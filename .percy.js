const percyCSS = `
/* disable all the iframes in the docs site */
iframe {
  display: none;
}
/* make it scroll so vrt can capture all of it */
#styled-site-body {
  scroll-behavior: auto;
  overflow: unset;
}
`;
module.exports = {
  version: 2,
  snapshot: {
    widths: [1280],
    percyCSS,
  },
};
