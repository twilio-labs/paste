// Shout outs to the following repositories:
// https://github.com/whitep4nth3r/puppeteer-demo
// https://github.com/vercel/og-image
// https://github.com/ireade/netlify-puppeteer-screenshot-demo

// Note
// The maximum execution timeout is 10
// seconds when deployed on a Personal Account (Hobby plan).
// For Teams, the execution timeout is 60 seconds (Pro plan)
// or 900 seconds (Enterprise plan).
import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';
import type {Handler} from '@netlify/functions';

/** The code below determines the executable location for Chrome to
 * start up and take the screenshot when running a local development environment.
 *
 * If the code is running on Windows, find chrome.exe in the default location.
 * If the code is running on Linux, find the Chrome installation in the default location.
 * If the code is running on MacOS, find the Chrome installation in the default location.
 * You may need to update this code when running it locally depending on the location of
 * your Chrome installation on your operating system.
 */
const PlatformPath = {
  win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
};
const exePath = PlatformPath[process.platform] || PlatformPath.darwin;

async function getOptions(isDev: boolean): Promise<{args: any; executablePath: any; headless: any}> {
  if (isDev) {
    return {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  }

  return {
    executablePath: await chromium.executablePath,
    args: chromium.args,
    headless: chromium.headless,
  };
}

const handler: Handler = async (event) => {
  // pass in this parameter if you are developing locally
  // to ensure puppeteer picks up your machine installation of
  // Chrome via the configurable options
  const isDev = event.queryStringParameters.isDev === 'true';
  const hostURL = isDev ? 'http://localhost:8888' : `https://${event.headers.host}`;
  const componentRequested = event.path.replace('/.netlify/functions/opengraph/', '');
  const pageToVisit = `${hostURL}/opengraph/?path=${componentRequested}`;

  // check for a legit link
  if (!componentRequested || !componentRequested.includes('/')) {
    return {
      statusCode: 404,
      body: "Sorry, we couldn't screenshot that page. Did you include a page?",
    };
  }

  try {
    // get options for browser
    const options = await getOptions(isDev);
    // launch a new headless browser with dev / prod options
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    // set the viewport size
    await page.setViewport({
      width: 800,
      height: 420,
      deviceScaleFactor: 1,
    });

    // console.log('Visiting page:', pageToVisit, Date.now());
    await page.goto(pageToVisit, {
      // wait for the load event as we need JS to render the page
      waitUntil: 'networkidle2',
    });
    // console.log('Page visited', Date.now());

    // take a screenshot
    const file = (await page.screenshot({
      encoding: 'base64',
    })) as string;

    // close the browser
    await browser.close();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
      },
      body: file,
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error,
    };
  }
};

export {handler};
