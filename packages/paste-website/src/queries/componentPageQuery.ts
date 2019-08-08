const componentPageQuery = `
  {
    allPasteComponent(filter: {name: {eq: "@twilio-paste/button"}}) {
      edges {
        node {
          category
          description
          status
          version
        }
      }
    }
  }
`;

export {componentPageQuery};
