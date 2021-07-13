// Shout outs to the following repositories:

// https://github.com/whitep4nth3r/puppeteer-demo
// https://github.com/vercel/og-image
// https://github.com/ireade/netlify-puppeteer-screenshot-demo

// The maximum execution timeout is 10
// seconds when deployed on a Personal Account (Hobby plan).
// For Teams, the execution timeout is 60 seconds (Pro plan)
// or 900 seconds (Enterprise plan).

import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

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
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  };
}

// TODO typing req and res
module.exports = async (req: any, res: any) => {
  const pageToScreenshot = Array.isArray(req.query.page) ? req.query.page[0] : req.query.page;

  // check for a legit link
  if (!pageToScreenshot || !pageToScreenshot.includes('/')) {
    res.statusCode = 404;
    res.json({
      body: "Sorry, we couldn't screenshot that page. Did you include a page?",
    });
  }

  // pass in this parameter if you are developing locally
  // to ensure puppeteer picks up your machine installation of
  // Chrome via the configurable options
  const isDev = req.query.isDev === 'true';

  try {
    // get options for browser
    const options = await getOptions(isDev);

    // launch a new headless browser with dev / prod options
    const browser = await puppeteer.launch(options);

    const page = await browser.newPage();

    // set the viewport size
    await page.setViewport({
      width: 578,
      height: 192,
      deviceScaleFactor: 1,
    });

    // tell the page to visit the url
    await page.goto(`https://deploy-preview-1661--paste-docs.netlify.app/opengraph/?path=${pageToScreenshot}`, {
      waitUntil: 'domcontentloaded',
    });

    // Wait until all images and fonts have loaded
    await page.evaluate(async () => {
      const selectors = [...document.querySelectorAll('img')];
      await Promise.all([
        // @ts-expect-error document exists in evaluate because this function is called in the browser
        document.fonts.ready,
        ...selectors.map((img) => {
          // Image has already finished loading, let’s see if it worked
          if (img.complete) {
            // Image loaded and has presence
            if (img.naturalHeight !== 0) return;
            // Image failed, so it has no height
            throw new Error('Image failed to load');
          }
          // Image hasn’t loaded yet, added an event listener to know when it does
          return new Promise((resolve, reject) => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', reject);
          });
        }),
      ]);
    });

    await page.waitForTimeout(100);

    // take a screenshot
    const file = await page.screenshot({
      type: 'png',
    });

    // close the browser
    await browser.close();

    res.statusCode = 200;
    res.setHeader('Content-Type', `image/png`);

    // return the file!
    res.end(file);
  } catch (error) {
    res.statusCode = 500;
    res.json({
      body: error,
    });
  }
};
