const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'xbob95',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
    },
    video: true,
    baseUrl: 'https://front.serverest.dev/',

  },
});
