module.exports = {
  env: {
    DATADOG_APPLICATION_ID: process.env.DATADOG_APPLICATION_ID,
    DATADOG_CLIENT_TOKEN: process.env.DATADOG_CLIENT_TOKEN,
    // Netlify environment context
    ENVIRONMENT_CONTEXT: process.env.CONTEXT,
    // Netlify deploy url
    DEPLOY_URL: process.env.DEPLOY_URL,
  },
};
