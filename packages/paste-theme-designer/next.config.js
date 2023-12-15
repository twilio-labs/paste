module.exports = {
  env: {
    DATADOG_APPLICATION_ID: process.env.DATADOG_APPLICATION_ID,
    DATADOG_CLIENT_TOKEN: process.env.DATADOG_CLIENT_TOKEN,
    ENVIRONMENT_CONTEXT: process.env.VERCEL_ENV,
    DEPLOY_URL: process.env.VERCEL_URL,
  },
};
