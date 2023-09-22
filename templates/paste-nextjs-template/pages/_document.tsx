import { Html, Head, Main, NextScript } from 'next/document';

const Document = (): JSX.Element => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://assets.twilio.com" crossOrigin="" />
        <link rel="stylesheet" href="https://assets.twilio.com/public_assets/paste-fonts/1.5.0/fonts.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
