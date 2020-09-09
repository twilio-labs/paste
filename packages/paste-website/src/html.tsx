import * as React from 'react';

interface HTMLProps {
  children?: React.ReactElement;
  htmlAttributes: {};
  headComponents: [];
  bodyAttributes: {};
  preBodyComponents: [];
  body: string;
  postBodyComponents: [];
}
const HTML: React.FC<HTMLProps> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=1024" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
