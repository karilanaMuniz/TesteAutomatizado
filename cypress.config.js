const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     //video:true

     //baseUrl:'https://front.serverest.dev/login'
     baseUrl:'https://front.serverest.dev/'
  },
});
