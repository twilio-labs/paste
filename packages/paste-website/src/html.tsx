import * as React from 'react';

interface HTMLProps {
  children?: React.ReactElement;
  htmlAttributes: Record<string, unknown>;
  headComponents: [];
  bodyAttributes: Record<string, unknown>;
  preBodyComponents: [];
  body: string;
  postBodyComponents: [];
}
const HTML: React.FC<React.PropsWithChildren<HTMLProps>> = ({
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
        <link rel="stylesheet" href="https://assets.twilio.com/public_assets/paste-fonts/1.4.1/fonts.css" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        {/* eslint-disable-next-line react/no-danger */}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{__html: body}} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
