module.exports = {
  env: {
    DATADOG_APPLICATION_ID: process.env.DATADOG_APPLICATION_ID,
    DATADOG_CLIENT_TOKEN: process.env.DATADOG_CLIENT_TOKEN,
    // Netlify or Vercel (whilst we migrate) environment context
    ENVIRONMENT_CONTEXT: process.env.CONTEXT || process.env.VERCEL_ENV,
    // Netlify or Vercel (whilst we migrate) deploy url
    DEPLOY_URL: process.env.DEPLOY_URL || process.env.VERCEL_URL,
  },
};
