// cypress.config.js
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 900,
  viewportWidth: 1440,
  requestTimeout: 10000,
  numTestsKeptInMemory: process.env.CI ? 0 : 1,
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureResultsPath: 'allure-results',
    },
  },
});
