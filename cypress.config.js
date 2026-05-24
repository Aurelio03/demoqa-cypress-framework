const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",

    viewportWidth: 1440,
    viewportHeight: 900,

    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,

    video: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});