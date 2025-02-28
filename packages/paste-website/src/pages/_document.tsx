import Document, { Head, Html, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import nookies, { parseCookies } from "nookies";

interface DocumentProps {
  cookieTheme?: string;
}

class _Document extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & DocumentProps> {
    // eslint-disable-next-line sonarjs/prefer-immediate-return
    const initialProps = await Document.getInitialProps(ctx);
    const cookies = nookies.get(ctx);
    // eslint-disable-next-line no-console
    console.log(cookies, ctx.req?.headers.cookie);
    const cookieTheme = cookies["paste-docs-theme"];

    return { ...initialProps, cookieTheme };
  }

  render(): React.ReactElement {
    // eslint-disable-next-line no-console
    console.log("cookieTheme", this.props.cookieTheme, parseCookies()["paste-docs-theme"]);
    const theme = this.props.cookieTheme || parseCookies()["paste-docs-theme"];

    return (
      <Html lang="en" dir="ltr">
        <Head>
          <link rel="preconnect" href="https://assets.twilio.com" crossOrigin="" />
          <link rel="stylesheet" href="https://assets.twilio.com/public_assets/paste-fonts/1.5.2/fonts.css" />

          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="icon" href="/favicon-32x32.png" type="image/png" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

          <meta name="theme-color" content="#141c2c" />
          <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png" />
          <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
        </Head>
        <body data-theme={theme}>
          <noscript key="noscript">This app works best with JavaScript enabled.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
