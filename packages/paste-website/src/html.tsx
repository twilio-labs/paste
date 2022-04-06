import * as React from 'react';

interface HTMLProps {
  children?: React.ReactElement;
  htmlAttributes: unknown;
  headComponents: [];
  bodyAttributes: unknown;
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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://assets.twilio.com" crossOrigin="" />
        <link rel="stylesheet" href="https://assets.twilio.com/public_assets/paste-fonts/main-1.2.0/fonts.css" />
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
