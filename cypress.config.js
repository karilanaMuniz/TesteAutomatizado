const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({
  projectId: 'xbob95',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
    },
    video: true,
    baseUrl: 'https://front.serverest.dev/',
    chromeWebSecurity: false,
    projectId: "xhyuhk",

  },
});
