// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const result = require('dotenv').config();

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  if (config.env.USE_CYPRESS_EYES == null) {
    config.env.USE_CYPRESS_EYES = JSON.parse(process.env.USE_CYPRESS_EYES);
  }

  return config;
};

require('@applitools/eyes-cypress')(module);
