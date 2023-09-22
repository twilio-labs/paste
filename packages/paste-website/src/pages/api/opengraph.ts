/*
 * Shout outs to the following repositories:
 * https://github.com/whitep4nth3r/puppeteer-demo
 * https://github.com/vercel/og-image
 * https://github.com/ireade/netlify-puppeteer-screenshot-demo
 */

import chromium from '@sparticuz/chromium';
import type { NextApiRequest, NextApiResponse } from 'next';
/*
 * Note
 * The maximum execution timeout is 10
 * seconds when deployed on a Personal Account (Hobby plan).
 * For Teams, the execution timeout is 60 seconds (Pro plan)
 * or 900 seconds (Enterprise plan).
 */
import puppeteer from 'puppeteer-core';
import Rollbar from 'rollbar';

import { logger } from '../../functions-utils/logger';

/**
 * The code below determines the executable location for Chrome to
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore complaining about process.platform containing more options than listed in PlatformPath object
const exePath = PlatformPath[process.platform] || PlatformPath.darwin;

async function getOptions(isDev: boolean): Promise<{ args: any; executablePath: any; headless: any }> {
  if (isDev) {
    return {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  }

  return {
    executablePath: await chromium.executablePath(),
    args: chromium.args,
    headless: chromium.headless,
  };
}

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

type Data = {
  body: string;
  headers?: Record<string, string>;
  isBase64Encoded?: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  /*
   * pass in this parameter if you are developing locally
   * to ensure puppeteer picks up your machine installation of
   * Chrome via the configurable options
   */
  const isDev = req.query.isDev === 'true';
  const hostURL = isDev ? 'http://localhost:3000' : `https://${req.headers.host}`;
  const { componentRequested } = req.query;
  const pageToVisit = `${hostURL}/opengraph/?path=${componentRequested}`;

  logger.info('Page to visit', { pageToVisit });

  // check for a legit link
  if (!componentRequested || !componentRequested.includes('/')) {
    logger.error('Page not found');
    rollbar.error('Page not found for screenshotting', { page: pageToVisit });
    res.status(404).json({
      body: "Sorry, we couldn't screenshot that page. Did you include a page?",
    });
  }

  try {
    // get options for browser
    const options = await getOptions(isDev);
    logger.info('options', options);
    // launch a new headless browser with dev / prod options
    const browser = await puppeteer.launch(options);
    logger.info('get browser with options');

    const page = await browser.newPage();
    logger.info('new page from browser');
    // set the viewport size
    await page.setViewport({
      width: 800,
      height: 420,
      deviceScaleFactor: 1,
    });
    logger.info('set viewport');

    await page.goto(pageToVisit, {
      // wait for the load event as we need JS to render the page
      waitUntil: 'networkidle0',
    });
    logger.info(`go to page ${pageToVisit}`);

    // take a screenshot
    const file = (await page.screenshot({
      encoding: 'base64',
    })) as string;
    logger.info('grab screenshot');

    // close the browser
    await browser.close();

    logger.info('close browser');

    const imageResp = Buffer.from(file, 'base64');

    res.writeHead(200, {
      'Cache-Control': 'max-age=0, s-maxage=86400',
      'Content-Type': 'image/png',
      'Content-Length': imageResp.length,
    });
    res.end(imageResp);
  } catch (error) {
    logger.error('500 error', { error });
    rollbar.error(error as Error);
    res.status(500).json({
      body: JSON.stringify(error),
    });
  }
}
